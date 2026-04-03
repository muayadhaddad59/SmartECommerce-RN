import {Redirect, Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "react-native";
import FlashMessage from "react-native-flash-message";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" />
            <Stack screenOptions={{headerShown: false}}/>
            <FlashMessage position={"top"}/>
        </SafeAreaProvider>
    )
}
