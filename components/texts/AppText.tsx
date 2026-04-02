import {StyleSheet, Text, TextProps} from 'react-native'
import React from 'react'
import {s} from "react-native-size-matters"
import {AppColor} from "@/styles/colors";

type Variant = "medium" | "bold";

interface AppTextProps extends TextProps {
    children: React.ReactNode;
    style?: any;
    variant?: Variant;
}

export default function AppText({children, style, variant = "medium", ...rest}: AppTextProps) {
    return (
        <Text {...rest} style={[styles[variant], style]}>
            {children}
        </Text>
    );
}


const styles = StyleSheet.create({
    bold: {
        fontSize: s(18),
        fontWeight: "bold", // 👈 missing
        color:AppColor.blackColor,
    },
    medium: {
        fontSize: s(16),
        color: AppColor.blackColor,
    }
})
