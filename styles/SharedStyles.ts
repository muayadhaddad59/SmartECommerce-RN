import { s } from "react-native-size-matters";
import {StyleSheet} from "react-native";
import {AppColor} from "@/styles/colors";

export const sharedPaddingHorizontal = s(12)
export const commonStyles = StyleSheet.create({
    shadow: {
        // iOS
        shadowColor: AppColor.blackColor,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Android
        elevation: 4,
    }
})