import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BoardingScreen from '@screens/BoardingScreen'
import ResultScreen from '@screens/ResultScreen'

export default function Main() {
  return (
    <View style={styles.container}>
      <BoardingScreen />
      <ResultScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
