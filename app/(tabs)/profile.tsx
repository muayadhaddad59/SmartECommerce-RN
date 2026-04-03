import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "@/components/headers/HomeHeader";
import ProfileSectionButton from "@/components/buttons/ProfileSectionButton";
import {sharedPaddingHorizontal} from "@/styles/SharedStyles";
import AppText from "@/components/texts/AppText";
import {s, vs} from 'react-native-size-matters';

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <HomeHeader title="Profile"/>
            <AppText variant={"bold"} style={{fontSize: s(18), marginTop: vs(10)}}>Hello Ahmed</AppText>
           <View style={{paddingHorizontal: sharedPaddingHorizontal}}>
               <ProfileSectionButton title={"My orders"}/>
               <ProfileSectionButton title={"My Language"}/>
               <ProfileSectionButton title={"Logout"}/>
           </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
