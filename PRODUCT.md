# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Minecraft Java players who organize separate instances, configurations, mods, and modpacks.

## Product Purpose
Kaf Launcher prepares, configures, and launches Minecraft Java instances. The site should help players understand the launcher and, when published, install it on Windows, macOS, or Linux.

## Positioning
The desktop GUI and CLI share workflows and saved data. Instances keep their own game files while shared Minecraft assets are reused.

## Operating Context
Players manage instances, Java runtimes, supported mod loaders, mods, modpacks, account identity, and game launches.

## Capabilities and Constraints
- The launcher supports Vanilla, Fabric, Quilt, Forge, and NeoForge instances.
- It includes Modrinth mod search and installation, compatible `.mrpack` imports, instance backups, launch diagnostics, and Microsoft sign-in.
- Offline identity does not authenticate players with Microsoft. It can connect to multiplayer servers only when the server owner enables offline mode and allows the connection; it does not grant access to servers that require an authenticated Minecraft account.
- Java installation through Settings is currently available on Windows.
- Windows, macOS, and Linux are the requested installer targets. The availability of verified installer builds for each platform is undecided.
- Do not imply a particular download or release is available unless a verified destination is linked.

## Brand Commitments
Use a text-first, ultra-minimal English website with no product mockups or decorative imagery. Match KafLab's palette: background `#f7f1eb`, panel `#f0e7e0`, card `#fffdfa`, line `#e5d8d0`, ink `#30272a`, muted `#716368`, rose `#874955`, soft rose `#f7e7e9`, and dark `#44373b`. Keep page structure compact and professional without copying KafLab's layout.

## Evidence on Hand
The Kaf-Launcher repository's README, PRODUCT.md, GUI guide, application source, and desktop interface.

## Product Principles
- Keep each instance and its saves distinct.
- Explain supported features without implying unsupported behavior.
- Make platform availability and verified release information easy to find.

## Accessibility & Inclusion
Use semantic HTML, keyboard-operable links, visible focus, responsive layouts, and readable contrast.
