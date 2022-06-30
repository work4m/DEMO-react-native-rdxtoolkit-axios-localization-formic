## Template for React-Native redux-toolkit, axios, localization and formic

install process
yarn install @react-navigation/native @react-navigation/native-stack @reduxjs/toolkit axios formik react-native-safe-area-context react-native-screens react-redux redux-persist yup react-native-mmkv-storage && yarn pod

copy following for package
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "android-clean": "cd android && ./gradlew clean",
    "start": "react-native start",
    "pod": "cd ios && pod install",
    "android-build": "cd android && gradlew assembleRelease",
    "android-build-mac": "cd android && ./gradlew assembleRelease",
    "android-build-aab-mac": "cd android && ./gradlew bundleRelease",
    "ios-build": "react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios",
    "test": "jest",
    "lint": "eslint ."
