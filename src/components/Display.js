import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create ({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayVlaue: {
    fontSize: 60,
    color: '#fff',
  }
})

export default props => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayVlaue} numberOfLines={1}>{props.value}</Text>
    </View>
  )
}