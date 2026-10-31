# Holographic Virtual Life

**Offline-first Tamagotchi companion for Android 10 · v0.9.3**

This repository is being populated from the prepared full-source release. The existing public prototype has 93 numbered assets, a Java/WebView Android shell, interactive apartment simulation, movement and care actions, local saved state, JavaScript and Python tests, and an experimental on-device GGUF AI bridge.

## Release status

- **Published here:** starter documentation and source modules as they are committed.
- **Prepared locally but not yet fully synchronized here:** complete Android project and the 93-asset bundle.
- **Still unverified:** compiled Android APK, Huawei Android 10 phone installation, and actual on-device GGUF inference.

Do not treat this repository as an installable Android release until the complete source has been uploaded and the APK build workflow succeeds.

## What the Tamagotchi engine does

Tracks fullness, hydration, energy, hygiene, mood and companionship. Daily goals record food, drink, rest, cleaning and play **only when an action completes**. Local care history and badges persist. The character is not penalized for time away.

## Source layout

- `src/tamagotchi.js`: portable six-needs care engine
- `src/physical.js`: character action choreography
- `src/offline-ai.js`: experimental on-device AI JavaScript bridge
- `android/`: native Android build sources (pending full import)
- `docs/`: portfolio (pending full import)
- `tests/`: regression suite (pending full import)

## Public portfolio

[Visit the Holographic portfolio](https://arborisprimaris.github.io/Andersson/projects/holographic-virtual-life/)

## Attribution and privacy

This is an unofficial fan-inspired research project. Referenced characters and franchise rights belong to their respective owners. Source code and artwork have different rights; no third-party character license is implied. No personal chat history, credentials or local GGUF model are included in the public source. Do not upload any private notes or voice recordings into this repository.

**Repository name note:** The owner created this repository as `empty-repo`. Its name can be changed in GitHub Settings without affecting existing source code.
