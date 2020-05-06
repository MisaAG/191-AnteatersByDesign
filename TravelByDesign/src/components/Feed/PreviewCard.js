import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

function PreviewCard(props) {
  //const navigation = useNavigation()
  const onPress = () => 1 + 2 // navigation.push('Post', {id: props.key})
  return (
    <View style={styles.card}>
      <View style={{flex: 2}}>
        <TouchableOpacity style={styles.image} onPress={onPress}>
          <Image source={props.image} style={styles.image} />
        </TouchableOpacity>
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})
