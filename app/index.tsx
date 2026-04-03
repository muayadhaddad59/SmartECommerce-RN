import AppText from "@/components/texts/AppText";
import {SafeAreaView} from "react-native-safe-area-context";
import FlashMessage, {showMessage} from "react-native-flash-message";
import AppButton from "@/components/buttons/AppButton";
import AppTextInput from "@/components/inputs/AppTextInput";
import LoginScreen from "@/app/(auth)/login";
import SignUpScreen from "@/app/(auth)/signup";
import {Redirect} from "expo-router";

export default function Index() {
  return (

      <Redirect href={"/login"}/>
  );
}
