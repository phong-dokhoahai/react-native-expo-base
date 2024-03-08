import React from "react";
import HomeScreen from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DemoUseRef from "./demo/DemoUseRef";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DemoUseRef">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DemoUseRef" component={DemoUseRef} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
