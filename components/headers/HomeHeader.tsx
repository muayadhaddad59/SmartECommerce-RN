import {StyleSheet, View} from 'react-native'
import React from 'react'
import {s, vs } from 'react-native-size-matters';
import {Image} from "expo-image";
import {IMAGES} from "@/constants/images-paths";
import AppText from "@/components/texts/AppText";

interface IHomeProps {
    title: string,
}

export default function HomeHeader({title}: IHomeProps) {
    return (
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo}/>
            <AppText style={styles.title}>{title}</AppText>
            <View style={styles.rightPlaceholder} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: s(10),
        paddingBottom: vs(10),
    },
    logo:{
        height: vs(30),
        width: vs(30),
    },
    title: {
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
    },
    rightPlaceholder: {
        width: vs(35), // same as logo
    }
})
