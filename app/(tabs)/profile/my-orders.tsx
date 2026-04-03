import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import MyOrderCard from "@/components/profile/MyOrderCard";
import {sharedPaddingHorizontal} from "@/styles/SharedStyles";
import {vs} from "react-native-size-matters";

export default function MyOrdersScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={orderData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <MyOrderCard {...item} />
                )}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        paddingTop: vs(5),
        paddingHorizontal: sharedPaddingHorizontal
    }
})


const orderData = [
    {
        id: 1,
        date: "2029-01-01",
        totalAmount: "120",
        totalPrice: "$150",
    },
    {
        id: 2,
        date: "2029-01-02",
        totalAmount: "75",
        totalPrice: "$90",
    },
    {
        id: 3,
        date: "2029-01-04",
        totalAmount: "200.25",
        totalPrice: "$250",
    }
]