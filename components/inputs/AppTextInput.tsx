import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColor } from "@/styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

type AppTextInputProps = {
    label?: string;
    error?: string;
    containerStyle?: any;
    inputStyle?: any;
    secureTextEntry?: boolean;
} & TextInputProps;

export default function AppTextInput({
                                         label,
                                         error,
                                         containerStyle,
                                         inputStyle,
                                         secureTextEntry,
                                         ...props
                                     }: AppTextInputProps) {
    const [isSecure, setIsSecure] = useState(secureTextEntry);

    return (
        <View style={[styles.container, containerStyle]}>
            {/* Label */}
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.inputWrapper}>
                <TextInput
                    {...props}
                    secureTextEntry={isSecure}
                    placeholderTextColor={AppColor.mediumGrey}
                    style={[
                        styles.input,
                        inputStyle,
                        error && { borderColor: "red" },
                    ]}
                />

                {/* Show/Hide password */}
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setIsSecure(prev => !prev)}
                        style={styles.icon}
                    >
                        <Ionicons
                            name={isSecure ? "eye-off" : "eye"}
                            size={18}
                            color={AppColor.mediumGrey}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {/* Error */}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(12),
        width: "100%",
    },
    label: {
        fontSize: s(14),
        marginBottom: vs(5),
        color: AppColor.blackColor,
    },
    inputWrapper: {
        justifyContent: "center",
    },
    input: {
        height: vs(40),
        borderRadius: s(25),
        borderWidth: 1,
        borderColor: AppColor.blueGrey,
        paddingHorizontal: s(15),
        fontSize: s(16),
        backgroundColor: AppColor.white,
    },
    icon: {
        position: "absolute",
        right: s(15),
    },
    error: {
        marginTop: vs(4),
        color: "red",
        fontSize: s(12),
    },
});