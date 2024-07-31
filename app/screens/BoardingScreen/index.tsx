import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { InfoBox } from '@app/sharedComponents'

function BoardingScreen() {
  return (
    <View>
      <View style={styles.infoContainer}>
        <InfoBox
          info='Guess My Age'
          styles={{ container: styles.infoBox, infoText: styles.infoText }}
        />
      </View>
      <View style={styles.inputContainer}>
        <InfoBox info='Number' />
      </View>
    </View>
  )
}

export default BoardingScreen

const styles = StyleSheet.create({
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 3,
  },
  infoBox: {
    padding: 16,
    borderColor: 'yellow',
    borderWidth: 4,
  },
  infoText: {
    fontSize: 24,
    fontWeight: '700',
  },
})
