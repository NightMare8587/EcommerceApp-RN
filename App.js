import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "./AppContext";
import Splash from "./login/screens/Splash";

export default function App() {
  return (
    <AppContext>
      <Splash />
    </AppContext>
  );
}
