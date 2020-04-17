import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

function PreviewCard(props) {
  return (
    <View style={styles.card}>
      <View style={{flex: 2}}>
        <Image source={props.image} style={styles.image} />
      </View>
    </View>
  )
}

export default PreviewCard

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})
