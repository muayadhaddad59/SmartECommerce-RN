import {StyleSheet, View} from 'react-native'
import React from 'react'
import {AppColor} from "@/styles/colors";
import { vs } from 'react-native-size-matters';
import {Image} from "expo-image";
import {IMAGES} from "@/constants/images-paths";

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.primaryColor,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: vs(10),
    },
    logo:{
        height: vs(40),
        width: vs(40),
        tintColor: AppColor.white,
    }
})
