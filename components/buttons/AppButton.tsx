import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    ActivityIndicator,
    TouchableOpacityProps,
} from "react-native";
import {s, vs} from "react-native-size-matters";
import AppText from "@/components/texts/AppText";
import {AppColor} from "@/styles/colors";

type AppButtonProps = {
    title: string;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    loading?: boolean;
} & TouchableOpacityProps;

export default function AppButton({
                                      onPress,
                                      title,
                                      backgroundColor = AppColor.primaryColor,
                                      textColor = AppColor.white,
                                      style,
                                      textStyle,
                                      disabled = false,
                                      loading = false,
                                      ...rest
                                  }: AppButtonProps) {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={isDisabled}
            style={[
                styles.button,
                {
                    backgroundColor: isDisabled
                        ? AppColor.disabledGray
                        : backgroundColor,
                },
                style,
            ]}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color={textColor}/>
            ) : (
                <AppText
                    style={[styles.textTitle, {color: textColor}, textStyle]}
                    variant="bold"
                >
                    {title}
                </AppText>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: vs(40),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(25),
        alignSelf: "center",
    },
    textTitle: {
        fontSize: s(16),
    },
});