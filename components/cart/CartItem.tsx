import {Pressable, StyleSheet, View, StyleProp, ViewStyle} from 'react-native'
import React from 'react'
import {Image} from 'expo-image'
import {s, vs} from 'react-native-size-matters'
import AppText from '@/components/texts/AppText'
import {AppColor} from '@/styles/colors'
import {AppFonts} from '@/styles/fonts'
import {AntDesign, FontAwesome} from '@expo/vector-icons'

interface ICartItemProps {
    title: string
    price: number | string
    imageURL: string
    qty: number
    onDeletePress?: () => void
    onIncrementPress?: () => void
    onDecrementPress?: () => void
    containerStyle?: StyleProp<ViewStyle>
}

export default function CartItem({
                                     title,
                                     price,
                                     imageURL,
                                     qty,
                                     onDeletePress,
                                     onIncrementPress,
                                     onDecrementPress,
                                     containerStyle,
                                 }: ICartItemProps) {
    return (
        <View style={[styles.container, containerStyle]}>
            {/* Image Container */}
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: imageURL}}
                    style={styles.image}
                    contentFit="cover"
                />
            </View>

            {/* Details Container */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.textTitle} numberOfLines={2}>
                    {title}
                </AppText>

                <AppText style={styles.textPrice}>
                    ${price}
                </AppText>

                <View style={styles.qtyContainer}>
                    <Pressable style={styles.iconButton} onPress={onIncrementPress}>
                        <FontAwesome
                            name="plus"
                            size={s(10)}
                            color={AppColor.primaryColor}
                        />
                    </Pressable>

                    <AppText style={styles.textQty}>{qty}</AppText>

                    <Pressable style={styles.iconButton} onPress={onDecrementPress}>
                        <FontAwesome
                            name="minus"
                            size={s(12)}
                            color={AppColor.primaryColor}
                        />
                    </Pressable>
                </View>
            </View>

            {/* Delete Button Container */}
            <View style={styles.deleteContainer}>
                <Pressable style={styles.deleteButton} onPress={onDeletePress}>
                    <AntDesign name="delete" size={s(14)} color={AppColor.redColor}/>
                    <AppText style={styles.deleteText}>Delete</AppText>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: vs(8),
        paddingVertical: vs(8),
        borderColor: AppColor.blueGrey,
    },
    imageContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 3.5,
        justifyContent: 'center',
    },
    deleteContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingEnd: s(12),
    },
    image: {
        height: s(80),
        width: s(80),
        borderRadius: s(5),
    },
    textTitle: {
        fontSize: s(14),
        color: AppColor.primaryColor,
        fontFamily: AppFonts.Medium,
        marginTop: vs(5),
    },
    textPrice: {
        fontSize: s(16),
        color: AppColor.primaryColor,
        fontFamily: AppFonts.Bold,
        marginVertical: vs(5),
    },
    deleteText: {
        marginLeft: s(6),
        fontFamily: AppFonts.Medium,
        color: AppColor.mediumGrey,
        fontSize: s(12),
        marginTop: vs(1),
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: s(5),
        borderRadius: s(30),
        borderWidth: 1,
        borderColor: AppColor.blueGrey,
        width: s(90),
        paddingVertical: vs(5),
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.white,
        padding: s(5),
        height: s(20),
        width: s(20),
        borderRadius: s(10),
    },
    textQty: {
        flex: 1,
        textAlign: 'center',
        color: AppColor.primaryColor,
        fontFamily: AppFonts.Medium,
    },
})