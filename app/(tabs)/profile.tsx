import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <HomeHeader title="Profile"/>
            <Text>ProfileScreen</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
