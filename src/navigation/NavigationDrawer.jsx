import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen, SettingScreen } from "../screens";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
}