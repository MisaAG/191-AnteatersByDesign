import React from 'react'
import {StyleSheet, View, Text, FlatList, Image, ScrollView} from 'react-native'
import PreviewCard from './PreviewCard'

import pic1 from '../../data/downtown.jpg'
import pic2 from '../../data/park.jpeg'
import pic3 from '../../data/chinatown.jpg'
import pic4 from '../../data/salesforce.jpg'

function PreviewCarousel(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{props.title}</Text>

      <View style={styles.post}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PreviewCard image={pic1} />
          <PreviewCard image={pic2} />
          <PreviewCard image={pic3} />
          <PreviewCard image={pic4} />
        </ScrollView>
      </View>
    </View>
  )
}

export default PreviewCarousel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  post: {
    height: 250,
    marginTop: 20,
  },
})
