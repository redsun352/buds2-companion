import { NativeModules, Platform } from "react-native";

export type BluetoothPermissionState = "granted" | "denied" | "not-requested" | "unavailable";

export interface BluetoothAudioDevice {
  name: string | null;
  address: string | null;
  deviceType: string;
  bondState: string;
  isLikelyBuds2: boolean;
  a2dpConnected: boolean;
  headsetConnected: boolean;
  batteryLevel: number | null;
}

export interface BluetoothSnapshot {
  nativeModuleAvailable: boolean;
  permissionGranted: boolean;
  bluetoothSupported: boolean;
  bluetoothEnabled: boolean;
  devices: BluetoothAudioDevice[];
}

const NativeBuds2Bridge = NativeModules.Buds2Bridge;

export function getNativeBuds2Bridge() {
  if (Platform.OS !== "android" || !NativeBuds2Bridge) return null;
  return NativeBuds2Bridge as {
    getSnapshot?: () => Promise<BluetoothSnapshot>;
  };
}

export const EMPTY_BLUETOOTH_SNAPSHOT: BluetoothSnapshot = {
  nativeModuleAvailable: false,
  permissionGranted: false,
  bluetoothSupported: false,
  bluetoothEnabled: false,
  devices: [],
};
