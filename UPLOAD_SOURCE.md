# Finish full-source upload

The Holographic Virtual Life v0.9.3 repository is initialized and contains source samples, Android project configuration, a portfolio, and automated tests.

The complete release ZIP includes the 93 prototype assets, Java Android classes, simulation modules, Python and JavaScript test suites, and the full offline phone demo.

## One ZIP upload

1. Download **Holographic_Virtual_Life_v0.9.3_Full_Android_Source.zip** from the ChatGPT conversation.
2. Open [Upload files to this repository](https://github.com/arborisprimaris/empty-repo/upload/main).
3. Upload the ZIP file itself without extracting it and commit directly to **main**. Keep the exact filename.
4. Open [GitHub Actions](https://github.com/arborisprimaris/empty-repo/actions) and inspect **Import Holographic full source and build APK**.

The automation validates the ZIP, extracts its files into the repository root, removes the ZIP, commits the imported project, runs regression tests, and attempts the UI-only Android 10 debug APK build.

**Do not upload your private GGUF model, credentials, chat history, voice recordings, or unpublished third-party content.** The prepared source package contains no user secrets or private local memory.

## Build evidence

A successful workflow will attach an artifact named **holographic-v093-android10-ui-debug-apk** with **preview-debug.apk**, a hash, and Android permission verification outputs. Until GitHub produces that artifact, there is no verified Android APK.

The default build excludes experimental native GGUF inference. Real phone installation, performance, and offline inference remain separate test gates.
