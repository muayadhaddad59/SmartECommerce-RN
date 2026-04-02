import {Platform, StatusBar, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {AppColor} from "@/styles/colors";
import {IS_ANDROID} from "@/constants/constants";

interface AppSaveViewProps {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function AppSaveView({children, style}: AppSaveViewProps) {
    return (
       <SafeAreaView style={styles.safeArea}>
           <View style={[styles.container, style]}>{children}</View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColor.white,
        paddingTop:IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
    },
    container: {
        flex: 1,
    }
})
