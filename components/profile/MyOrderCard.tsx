import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AppText from "@/components/texts/AppText";
import {commonStyles} from "@/styles/SharedStyles";
import {AppColor} from "@/styles/colors";
import {s, vs} from 'react-native-size-matters';

interface IMyOrdersProps {
    date: string,
    totalAmount: string,
    totalPrice: string,
}

export default function MyOrderCard({totalPrice, date, totalAmount}: IMyOrdersProps) {
    return (
        <View style={styles.container}>
        {/*    Header   */}
            <AppText>ORDER DETAILS:</AppText>

        {/*    Divider  */}
            <View style={styles.divider}/>

        {/*    total price */}
            <View style={styles.priceSection}>
                <AppText>Total Price: {totalPrice}</AppText>
                <AppText style={{color: AppColor.redColor}}>${totalAmount}</AppText>
            </View>
        {/*    Date    */}
            <View style={styles.priceSection}>
                <AppText>Date: {date}</AppText>
                <AppText style={{color: AppColor.redColor}}>{date}</AppText>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        ...commonStyles.shadow,
        borderColor: AppColor.mediumGrey,
        backgroundColor: AppColor.white,
        padding: 20,
        borderRadius: s(12),
    },
    divider: {
        borderColor: AppColor.primaryColor,
        height: 1,
        width: "100%",
        borderBottomWidth: 1,
        marginVertical: vs(5)
    },
    priceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
