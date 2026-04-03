import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {JSX} from 'react'
import {s, vs} from "react-native-size-matters";
import {AppColor} from "@/styles/colors";
import {Image} from "expo-image";
import AppText from "@/components/texts/AppText";
import {AppFonts} from "@/styles/fonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import {commonStyles} from "@/styles/SharedStyles";

interface IProductCardProps {
    title: string,
    price: number,
    imageURL: string,
    onAddToCartPress: () => void,
}

export default function ProductCard({title, price, imageURL, onAddToCartPress}: IProductCardProps) {
    return (
        <View style={styles.container}>

            {/*Add to cart button*/}
            <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCartPress}>
                <Ionicons name={"cart"} size={s(15)} color={AppColor.white}/>
            </TouchableOpacity>

            {/*Image UI */}
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: imageURL}}
                    style={styles.image}/>
            </View>

            {/*Details*/}
            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.priceText}>{price} $</AppText>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: s(160),
        height: vs(190),
        backgroundColor: AppColor.white,
        borderRadius: s(10),
        ...commonStyles.shadow,
    },
    imageContainer: {
        overflow: "hidden",
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        height: vs(130),
        width: "100%",
    }, image: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
    detailsContainer: {
        flex: 1,
        paddingTop: s(8),
        paddingBottom: vs(8),
        paddingHorizontal: s(10),
    },
    titleText: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColor.primaryColor,

    },
    priceText: {
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColor.primaryColor,
        marginTop: vs(7),
    },
    addToCartButton: {
        height: s(28),
        width: s(28),
        position: "absolute",
        left: 5,
        top: 5,
        borderRadius: s(14),
        backgroundColor: AppColor.primaryColor,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
