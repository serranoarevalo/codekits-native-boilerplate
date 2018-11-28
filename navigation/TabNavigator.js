import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const StackNavOptions = {
  headerStyle: {},
  headerTitleStyle: {}
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  { ...StackNavOptions }
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  { ...StackNavOptions }
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
