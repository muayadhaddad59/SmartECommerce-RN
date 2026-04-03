import {FlatList, StyleSheet} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";
import CartItem from "@/components/cart/CartItem";
import TotalView from "@/components/cart/TotalView";
import {products} from "@/data/products";
import {sharedPaddingHorizontal} from "@/styles/SharedStyles";
import AppButton from "@/components/buttons/AppButton";

export default function CartScreen() {
    return (
        <SafeAreaView style={{flex: 1, paddingHorizontal: sharedPaddingHorizontal}}>
            <HomeHeader title="Cart"/>
            {/*<EmptyCart/>*/}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <CartItem {...item} />
                )}
            />
            <TotalView itemPrice={5000} orderTotal={5000}/>
            <AppButton title={"Continue"}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
