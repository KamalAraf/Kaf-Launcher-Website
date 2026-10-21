import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const pageNames = [
  "index.html",
  "features.html",
  "download.html",
  "faq.html",
  "changelog.html",
  "support.html",
  "privacy.html",
  "terms.html",
  "404.html",
];

const pages = await Promise.all(
  pageNames.map(async (name) => [name, await readFile(new URL(`../${name}`, import.meta.url), "utf8")]),
);

test("all planned pages are present and share the accessible site shell", () => {
  assert.equal(pages.length, 9);
  for (const [name, html] of pages) {
    assert.match(html, /<html lang="en">/, `${name} should declare English`);
    assert.match(html, /<link rel="stylesheet" href="styles\.css">/, `${name} should load shared styles`);
    assert.match(html, /class="skip-link" href="#main"/, `${name} should have a skip link`);
    assert.match(html, /<main class="container page-content(?: page-content-single)?" id="main">/, `${name} should have a main landmark`);
    assert.match(html, /<nav aria-label="Main navigation">/, `${name} should have named navigation`);
  }
});

test("content-heavy pages use the wide two-column reading layout", () => {
  for (const name of ["index.html", "features.html", "download.html", "faq.html"]) {
    const html = pages.find(([pageName]) => pageName === name)[1];
    assert.match(html, /class="page-heading"/, `${name} should group its title and introduction`);
    assert.match(html, /class="[^"]*page-sections/, `${name} should place its content in the second column`);
  }
  for (const name of ["changelog.html", "support.html", "privacy.html", "terms.html", "404.html"]) {
    const html = pages.find(([pageName]) => pageName === name)[1];
    assert.match(html, /class="container page-content page-content-single"/, `${name} should avoid an empty second column`);
  }
});

test("local page and stylesheet links resolve", async () => {
  for (const [name, html] of pages) {
    const links = [...html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)].map((match) => match[1]);
    for (const link of links) {
      if (/^[a-z]+:/i.test(link)) continue;
      await access(new URL(`../${link}`, import.meta.url));
    }
  }
});

test("download page lists all target platforms without fake installer links", () => {
  const downloadPage = pages.find(([name]) => name === "download.html")[1];
  for (const platform of ["Windows", "macOS", "Linux"]) {
    assert.ok(downloadPage.includes(`<strong>${platform}</strong>`));
  }
  assert.equal((downloadPage.match(/class="platform-status">Coming soon/g) ?? []).length, 3);
  assert.doesNotMatch(downloadPage, /href="[^"]*(?:\.exe|\.dmg|\.AppImage|\.deb|\.rpm)(?:[?#"][^"]*)?"/i);
});

test("the home page is text-only and KafLab's palette is preserved", async () => {
  const homePage = pages.find(([name]) => name === "index.html")[1];
  const styles = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.doesNotMatch(homePage, /<(?:img|svg|video|canvas)\b/i);
  for (const color of ["#f7f1eb", "#f0e7e0", "#fffdfa", "#e5d8d0", "#30272a", "#716368", "#874955", "#f7e7e9", "#44373b"]) {
    assert.ok(styles.includes(color), `Expected KafLab palette color ${color}`);
  }
});

test("feature claims and offline-profile limitations are included", () => {
  const featuresPage = pages.find(([name]) => name === "features.html")[1];
  const faqPage = pages.find(([name]) => name === "faq.html")[1];
  for (const feature of ["Vanilla", "Fabric", "Quilt", "Forge", "NeoForge", "Modrinth", ".mrpack"]) {
    assert.ok(featuresPage.includes(feature), `Expected the features page to mention ${feature}`);
  }
  assert.match(faqPage, /if the server owner has enabled offline mode/i);
  assert.match(faqPage, /cannot access servers that require an authenticated Minecraft account/i);
});
