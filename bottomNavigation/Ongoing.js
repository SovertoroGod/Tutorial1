import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Ongoing() {
  return (
    <View style={styles.main}>
      <Text>Ongoing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})