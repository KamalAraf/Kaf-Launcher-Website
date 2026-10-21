---
name: Kaf Launcher Website
description: A text-first website for the Minecraft Java launcher.
colors:
  background: "#f7f1eb"
  panel: "#f0e7e0"
  paper: "#fffdfa"
  divider: "#e5d8d0"
  frame: "#888184"
  ink: "#30272a"
  secondary-ink: "#605256"
  muted: "#716368"
  rose: "#874955"
  rose-soft: "#f7e7e9"
  rose-line: "#ead1d5"
  dark: "#44373b"
typography:
  display:
    fontFamily: '"Avenir Next", "Segoe UI", system-ui, sans-serif'
    fontSize: "clamp(2.25rem, 5vw, 3.6rem)"
    fontWeight: 650
    lineHeight: 1.16
    letterSpacing: "-0.045em"
  body:
    fontFamily: '"Avenir Next", "Segoe UI", system-ui, sans-serif'
    fontSize: "1rem"
    lineHeight: 1.6
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section-space: "clamp(1.5rem, 3vw, 2.5rem)"
---

# Design System: Kaf Launcher Website

## Overview

**Creative North Star: "The Quiet Launch Index"**

The site is a small, direct guide to Kaf Launcher. It favors plain English and a short route between product information, platform status, and practical help. The visual language stays deliberately restrained so the content remains the focus.

Cream and blush surfaces, dark readable text, rose links, and thin dividers carry the KafLab palette into a distinct text-only layout. The site uses no product mockups or decorative imagery.

**Key Characteristics:**
- Text-first pages with short sections.
- Shared, compact navigation.
- KafLab's exact cream, blush, and rose palette.

## Colors

KafLab's warm neutrals provide the background and reading surfaces; muted rose marks links and active navigation.

### Primary
- **Muted Rose** (#874955): Links and current-page navigation.

### Neutral
- **Cream** (#f7f1eb): Main page background.
- **Blush Panel** (#f0e7e0): Header and footer background.
- **Soft Paper** (#fffdfa): Reserved palette surface.
- **Pale Divider** (#e5d8d0): Content separators.
- **Frame Gray** (#888184): Strong header/footer rules.
- **Warm Ink** (#30272a): Headings and primary text.
- **Secondary Ink** (#605256): Supporting body text.
- **Muted Mauve** (#716368): Secondary labels and footer text.
- **Soft Rose** (#f7e7e9): Palette accent surface.
- **Rose Line** (#ead1d5): Palette accent divider.
- **Dark Plum** (#44373b): High-contrast utility surface.

### Named Rules
**The Quiet Palette Rule.** Keep the KafLab palette intact and let text hierarchy, not decoration, distinguish content.

## Typography

**Display Font:** "Avenir Next", "Segoe UI", system-ui, sans-serif

**Body Font:** "Avenir Next", "Segoe UI", system-ui, sans-serif

**Character:** A neutral system sans keeps the small site readable across operating systems. Headings use weight and compact spacing rather than a separate display face.

### Hierarchy
- **Display** (650, `clamp(2.25rem, 5vw, 3.6rem)`, 1.16): Page title.
- **Title** (600, 1.28rem, 1.16): Section headings.
- **Lead** (400, 1.05rem, 1.6): Homepage introduction.
- **Body** (400, 1rem, 1.6): Main copy, constrained by a 42–70ch reading measure.
- **Label** (400–600, 0.76–0.92rem): Navigation, links, and supporting text.

### Named Rules
**The Plain Language Rule.** Keep headings descriptive and supporting copy short; do not add decorative labels above headings.

## Layout

The shared shell uses a centered 1120px maximum width and a fluid gutter (`clamp(1.25rem, 4vw, 3rem)`). Content-heavy pages place the page title and summary in a narrow first column and the related feature list, platform list, or FAQ in a wider second column. Content-light pages stay in one column rather than reserving empty space. At 700px and below, all content reflows into one column, the header stacks the wordmark and wrapping navigation, and footer links stack. Related homepage sections use `clamp(1.5rem, 3vw, 2.5rem)` separation.

## Elevation & Depth

The site is flat. Tonal background changes and 1px dividers distinguish the header, footer, and content; there are no shadows or elevated cards.

### Named Rules
**The Flat Surface Rule.** Use the palette and dividers for structure; do not add decorative shadows.

## Shapes

Content remains square-edged and unboxed. The skip link alone has a small 4px radius. Focus is indicated with a visible 3px rose outline.

## Components

### Links and Navigation
- **Style:** Rose text links with a modest underline; navigation is compact and shared by every page.
- **Active:** The current page uses rose text and an underline.
- **Focus:** A 3px rose outline with a 4px offset.

### Lists and FAQ
- **Style:** Plain text lists and native disclosure rows, separated by thin horizontal rules.
- **State:** FAQ rows use the browser's native open/closed disclosure behavior.

### Platform Status
- **Style:** Plain text availability labels in rose.
- **State:** Windows, macOS, and Linux remain marked “Coming soon” until verified installers are linked.

## Do's and Don'ts

### Do:
- **Do** use the shared stylesheet and navigation across all pages.
- **Do** preserve the KafLab palette and English-language copy.
- **Do** leave platform, release, contact, and legal details as explicit placeholders until verified.

### Don't:
- **Don't** add product previews, mockups, or decorative imagery without a new request.
- **Don't** link to an installer before its build and requirements are verified.
- **Don't** fill the page with cards, gradients, or decorative effects.
