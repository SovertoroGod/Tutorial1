import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Compass() {
  return (
    <View style={styles.main}>
      <Text>Compass</Text>
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



{/* <View style={{alignItems:"center", justifyContent:"center"}}>
                <Ionicons name="ios-compass-sharp" size={24} color={focused? "#16247d" : "#111"} />
                <Text style={{fontSize:12, color: "#16247d"}}>Navigation</Text>
            </View> */}