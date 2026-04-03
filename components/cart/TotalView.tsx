import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {s, vs } from 'react-native-size-matters'
import AppText from "@/components/texts/AppText";
import {AppColor} from "@/styles/colors";
import {shippingFees, taxes} from "@/constants/constants";

interface ITotalViewProps {
    itemPrice: string,
    orderTotal: string
}

export default function TotalView({itemPrice, orderTotal}:ITotalViewProps) {
    return (
        <View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Subtotal:</AppText>
                <AppText style={styles.textPrice}>$ {itemPrice}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>taxes:</AppText>
                <AppText style={styles.textPrice}>$ {taxes}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Shipping Fee:</AppText>
                <AppText style={styles.textPrice}>$ {shippingFees}</AppText>
            </View>
            <View style={styles.divider}/>

            <View style={styles.row}>
                <AppText style={styles.textTitle}>Order Total:</AppText>
                <AppText style={styles.textPrice}>$ {orderTotal}</AppText>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: vs(10)
    },
    textTitle: {
        fontSize: s(16),
        flex: 1,
    },
    textPrice: {
        fontSize: s(16),
        color:AppColor.primaryColor
    },
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: AppColor.blueGrey,
        marginVertical: vs(5)
    }
})
