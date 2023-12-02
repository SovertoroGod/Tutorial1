import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons';


import {
    
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
export const MainHeader = ({title}) => {

    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {marginTop: insets.top}]}>
            <FontAwesome name="user-circle" size={26} color="#F46200" onPress={() => {}}/>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome name="bars" size={26} color="#F46200" onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
            height: 80,
            paddingHorizontal: 30,
        },
        title: {
            fontSize : 20,
            fontWeight : "bold",
            color: "#F46200",
            fontStyle: "italic",
        },
    }
)


