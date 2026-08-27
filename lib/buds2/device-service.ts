import { Platform, Linking } from "react-native";
import { EMPTY_BLUETOOTH_SNAPSHOT, getNativeBuds2Bridge, type BluetoothSnapshot } from "@/modules/buds2-bridge";
export async function getBluetoothSnapshot():Promise<BluetoothSnapshot>{
  if(Platform.OS!=="android") return EMPTY_BLUETOOTH_SNAPSHOT;
  const bridge=getNativeBuds2Bridge();
  if(!bridge?.getSnapshot) return EMPTY_BLUETOOTH_SNAPSHOT;
  try{return await bridge.getSnapshot();}catch{return EMPTY_BLUETOOTH_SNAPSHOT;}
}
export async function openBluetoothSettings(){if(Platform.OS==="android") await Linking.openSettings();}
