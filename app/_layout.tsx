import {Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ActivityIndicator, StatusBar} from "react-native";
import FlashMessage from "react-native-flash-message";
import {useFonts} from "expo-font";

export default function RootLayout() {
   const [fontsLoaded] = useFonts({
        "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
        "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    })

    if(!fontsLoaded){
        return <ActivityIndicator size={'large'}/>
    }
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" />
            <Stack screenOptions={{headerShown: false}}/>
            <FlashMessage position={"top"}/>
        </SafeAreaProvider>
    )
}
