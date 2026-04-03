import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import AppText from "@/components/texts/AppText";
import {AppColor} from "@/styles/colors";
import {s, vs } from 'react-native-size-matters';
import {AppFonts} from "@/styles/fonts";
import {MaterialIcons} from "@expo/vector-icons";

interface ProfileSectionButtonProps {
    onPress: () => void;
    title: string;
}

export default function ProfileSectionButton({title, onPress}: ProfileSectionButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.textContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
            </View>
            <View >
                <MaterialIcons name={"arrow-forward-ios"} size={s(14)} color={AppColor.mediumGrey}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: AppColor.lightGrey,
        paddingBottom: vs(10),
        marginTop: vs(14),
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    textTitle: {
        fontSize: s(16),
        fontFamily: AppFonts.Medium,
        color: AppColor.primaryColor
    },
    textContainer: {
        flex: 5,
        justifyContent: 'flex-start',
        marginHorizontal: s(8)
    }
})
