import {StyleSheet, View} from 'react-native'
import React from 'react'
import {s, vs} from "react-native-size-matters";
import AppText from "@/components/texts/AppText";
import {AppFonts} from "@/styles/fonts";
import {AppColor} from "@/styles/colors";
import AppButton from "@/components/buttons/AppButton";
import {useRouter} from "expo-router";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function EmptyCart() {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={"shopping-outline"} size={s(100)} color={AppColor.primaryColor} style={styles.icon}/>
            <AppText style={styles.title}>Your Cart is Empty</AppText>
            <AppText style={styles.subTitle}>Browse our products and find something you like.</AppText>
            <AppButton title={"Start Shopping"} style={styles.button} onPress={() => {
                router.push("/home")
            }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: s(20),
    },
    title: {
        fontSize: s(20),
        fontFamily: AppFonts.Bold,
        color: AppColor.primaryColor,
        marginBottom: vs(10)
    },
    subTitle: {
        fontSize: s(16),
        fontFamily: AppFonts.Medium,
        color: AppColor.mediumGrey,
        textAlign: "center",
        marginBottom: vs(20)
    },
    button: {
        width: "80%",
    },
    icon: {
        marginBottom: vs(20),
        opacity: .9
    }
})
