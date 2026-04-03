import React from 'react'
import {Tabs} from "expo-router";
import {AppColor} from "@/styles/colors";
import {s, vs} from 'react-native-size-matters';
import Ionicons from "@expo/vector-icons/Ionicons";
import {IS_ANDROID} from "@/constants/constants";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: AppColor.primaryColor,
            tabBarLabelStyle: {
                marginTop: vs(4),
                fontSize: s(10)
            },
            tabBarStyle: IS_ANDROID && {
                height: vs(50),
            }
        }}>

            <Tabs.Screen name={"home"} options={{
                title: "Home",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name={"home"} size={size} color={color}/>
                )
            }}/>
            <Tabs.Screen name={"cart"} options={{
                title: "Cart", tabBarIcon: ({color, size}) => (
                    <Ionicons name={"cart"} size={size} color={color}/>
                )
            }}/>
            <Tabs.Screen name={"profile"} options={{
                title: "Profile", tabBarIcon: ({color, size}) => (
                    <Ionicons name={"person"} size={size} color={color}/>
                )
            }}/>
        </Tabs>
    )
}
