import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "./AppContext";
import Splash from "./login/screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import EcommerceAppNavigator from "./AppNavigator";

export default function App() {
  return (
    <AppContext>
      <NavigationContainer>
        <EcommerceAppNavigator></EcommerceAppNavigator>
      </NavigationContainer>
    </AppContext>
  );
}
