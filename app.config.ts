import "./scripts/load-env.js";
import type { ExpoConfig } from "expo/config";

const bundleId = "com.app.galaxybuds2companion";
const scheme = "buds2companion";

const config: ExpoConfig = {
  name: "Buds2 Companion",
  slug: "galaxy-buds2-companion",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme,
  userInterfaceStyle: "dark",
  newArchEnabled: true,
  android: {
    adaptiveIcon: {backgroundColor:"#10131A",foregroundImage:"./assets/images/android-icon-foreground.png",backgroundImage:"./assets/images/android-icon-background.png",monochromeImage:"./assets/images/android-icon-monochrome.png"},
    edgeToEdgeEnabled:true,
    predictiveBackGestureEnabled:false,
    package:bundleId,
    permissions:["BLUETOOTH_CONNECT"],
    intentFilters:[{action:"VIEW",data:[{scheme,host:"*"}],category:["BROWSABLE","DEFAULT"]}]
  },
  ios:{supportsTablet:true,bundleIdentifier:bundleId,infoPlist:{ITSAppUsesNonExemptEncryption:false}},
  web:{bundler:"metro",output:"static",favicon:"./assets/images/favicon.png"},
  plugins:["./plugins/with-buds2-bluetooth.js","expo-router",["expo-audio",{microphonePermission:"Allow $(PRODUCT_NAME) to access your microphone."}],["expo-video",{supportsBackgroundPlayback:true,supportsPictureInPicture:true}],["expo-splash-screen",{image:"./assets/images/splash-icon.png",imageWidth:200,resizeMode:"contain",backgroundColor:"#10131A",dark:{backgroundColor:"#10131A"}}],["expo-build-properties",{android:{buildArchs:["armeabi-v7a","arm64-v8a"],minSdkVersion:24}}]],
  experiments:{typedRoutes:true,reactCompiler:true}
};
export default config;
