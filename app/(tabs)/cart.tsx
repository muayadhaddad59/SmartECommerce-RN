import {FlatList, StyleSheet, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";
import CartItem from "@/components/cart/CartItem";
import TotalView from "@/components/cart/TotalView";
import {products} from "@/data/products";
import {sharedPaddingHorizontal} from "@/styles/SharedStyles";
import AppButton from "@/components/buttons/AppButton";
import {useRouter} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {addToCart, deleteFromCart, removeFromCart} from "@/store/reducers/cartSlice";
import {shippingFees} from "@/constants/constants";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartScreen() {
    const router = useRouter();
    const {items} = useSelector((state: RootState) => state.cartSlice)
    const dispatch = useDispatch();
    const totalProductPriceSum = items.reduce((acc, item) => acc + item.sum, 0)
    const orderTotal = totalProductPriceSum + shippingFees + 13

    return (
        <SafeAreaView style={{flex: 1, paddingHorizontal: sharedPaddingHorizontal}}>
            {
                items.length > 0 ?
                    <View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={items}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => (
                                <CartItem
                                    qty={0}
                                    {...item}
                                    price={item.sum}
                                    onDecrementPress={() => {
                                        dispatch(removeFromCart(item))
                                    }}
                                    onDeletePress={() => {
                                        dispatch(deleteFromCart(item))
                                    }}
                                    onIncrementPress={() => {
                                        dispatch(addToCart(item))
                                    }}

                                />
                            )}
                        />
                        <TotalView itemPrice={totalProductPriceSum} orderTotal={orderTotal}/>
                        <AppButton title={"Continue"} onPress={() => {
                            router.navigate("/checkout")
                        }}/>
                    </View> : <EmptyCart/>
            }


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
