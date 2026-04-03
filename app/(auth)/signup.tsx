import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {sharedPaddingHorizontal} from "@/styles/SharedStyles";
import {Image} from "expo-image";
import {IMAGES} from "@/constants/images-paths";
import {s, vs} from 'react-native-size-matters';
import AppText from "@/components/texts/AppText";
import AppTextInput from "@/components/inputs/AppTextInput";
import AppButton from "@/components/buttons/AppButton";
import {AppColor} from "@/styles/colors";
import {SafeAreaView} from "react-native-safe-area-context";
import {useRouter} from "expo-router";

export default function SignUpScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const router = useRouter()

    return (
        <SafeAreaView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo}/>
            <AppTextInput placeholder={"User name"} value={username} onChangeText={setUsername}/>
            <AppTextInput placeholder={"Email"} value={email} onChangeText={setEmail}/>
            <AppTextInput placeholder={"Password"} value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title={"Create New Account"}/>
            <AppButton title={"Go To Sign In"}
                       style={styles.signInButton}
                       textColor={AppColor.primaryColor}
                       onPress={() => {router.back()}}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: sharedPaddingHorizontal,
    },
    logo: {
        height: s(150),
        width: s(150),
        marginBottom: vs(30)
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15),
    },
    signInButton: {
        backgroundColor: AppColor.white,
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColor.primaryColor,
    }
})
