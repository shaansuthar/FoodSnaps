import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import DetectFoodsScreen from "../screens/DetectFoodsScreen";
import ChatbotScreen from "../screens/ChatbotScreen";

import {
  BottomTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <BottomTab.Screen
        name="FoodSnaps"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-code" color={color} />
          ),
          tabBarLabel: "Intro",
        }}
      />
      <BottomTab.Screen
        name="Food Identification"
        component={DetectFoodsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-camera" color={color} />
          ),
          tabBarLabel: "Detect Foods",
        }}
      />
      <BottomTab.Screen
        name="Chatbot"
        component={ChatbotScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-chatbubble" color={color} />
          ),
          tabBarLabel: "Chatbot",
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
