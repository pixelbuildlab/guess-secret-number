import React from 'react'
import type { StyleProp } from 'react-native'
import { Text, TextStyle, View, ViewStyle } from 'react-native'

type styles = {
  container?: StyleProp<ViewStyle>
  infoText?: StyleProp<TextStyle>
}
type InfoBoxProps = {
  info: string
  styles?: styles
}

function InfoBox({ info, styles }: InfoBoxProps) {
  return (
    <View style={styles?.container}>
      <Text style={styles?.infoText}>{info}</Text>
    </View>
  )
}

export { InfoBox }
