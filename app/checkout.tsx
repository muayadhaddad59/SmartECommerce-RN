import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles, sharedPaddingHorizontal } from '@/styles/SharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColor } from '@/styles/colors';
import AppTextInput from '@/components/inputs/AppTextInput';
import AppButton from '@/components/buttons/AppButton';

export default function CheckoutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.inputsContainer}>
                    <AppTextInput placeholder="Full Name" />
                    <AppTextInput placeholder="Phone Number" keyboardType="phone-pad" />
                    <AppTextInput placeholder="Detailed Address" />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Confirm" />
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