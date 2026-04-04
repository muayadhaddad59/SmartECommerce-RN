import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles, sharedPaddingHorizontal} from '@/styles/SharedStyles';
import {s, vs} from 'react-native-size-matters';
import {AppColor} from '@/styles/colors';
import AppButton from '@/components/buttons/AppButton';
import AppTextInputController from "@/components/inputs/AppTextInputController";
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";



const schema = yup.object({
    fullName: yup
        .string()
        .required('Full name is required')
        .min(3, 'Name must be at least 3 characters'),

    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .matches(/^[0-9]+/, "Must be only digits")
        .min(10, 'Phone number must be at least 10 digits'),

    detailedAddress: yup
        .string()
        .required()
        .min(15, "Please provide a valid address with at least 15 characters"),
}).required()
type FormData = yup.InferType<typeof schema>

export default function CheckoutScreen() {
    const {control, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const saveOrder = (formData: FormData) => {
        console.log(formData);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.inputsContainer}>
                    <AppTextInputController control={control} name={"fullName"} placeholder="Full Name"/>
                    <AppTextInputController control={control} name={"phoneNumber"} placeholder="Phone Number"
                                            keyboardType="phone-pad"/>
                    <AppTextInputController control={control} name={"detailedAddress"} placeholder="Detailed Address"/>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Confirm" onPress={handleSubmit(saveOrder)}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.white,
    },
    content: {
        flex: 1,
        paddingHorizontal: sharedPaddingHorizontal,
        paddingTop: vs(16),
        paddingBottom: vs(100),
    },
    inputsContainer: {
        ...commonStyles.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: AppColor.white,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: sharedPaddingHorizontal,
        paddingTop: vs(10),
        paddingBottom: vs(10),
        borderTopWidth: 1,
        borderColor: AppColor.lightGrey,
        backgroundColor: AppColor.white,
    },
});