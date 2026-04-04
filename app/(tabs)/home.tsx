import {FlatList, StyleSheet} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";
import ProductCard from "@/components/cards/ProductCard";
import {products} from "@/data/products";
import {s, vs} from 'react-native-size-matters';
import {useDispatch} from "react-redux";
import {addToCart} from "@/store/reducers/cartSlice";

export default function HomeScreen() {
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
            <HomeHeader title="Home"/>
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <ProductCard
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageURL}
                        onAddToCartPress={() => {
                            dispatch(addToCart(item));
                        }}
                    />
                )}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: vs(10)
                }}
                contentContainerStyle={{
                    paddingHorizontal: s(10),
                    paddingBottom: vs(20),
                }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
