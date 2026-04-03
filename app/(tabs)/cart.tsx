import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";

export default function CartScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <HomeHeader title="Cart"/>
            {/*<EmptyCart/>*/}
            <CartItem/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
