# PMDM

iOS app built with SwiftUI.

## Requirements

- Xcode 16 or later
- iOS 18.0+ deployment target

## Getting started

```sh
open PMDM.xcodeproj
```

Select the **PMDM** scheme and a simulator, then press ⌘R.

## Layout

```
PMDM/                 App target (synchronized folder – new files are picked up automatically)
  PMDMApp.swift       App entry point
  Views/              SwiftUI views
  Assets.xcassets     App icon, accent color, images
  Preview Content/    Assets used only by Xcode previews
PMDMTests/            Unit tests (Swift Testing)
```

## Tests

Press ⌘U in Xcode, or:

```sh
xcodebuild test -project PMDM.xcodeproj -scheme PMDM -destination 'platform=iOS Simulator,name=iPhone 16'
```
