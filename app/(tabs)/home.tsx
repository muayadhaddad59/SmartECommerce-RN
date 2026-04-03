import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <HomeHeader/>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
