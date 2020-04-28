import React from 'react'
import {StyleSheet, View, Text, FlatList, Image, ScrollView} from 'react-native'
import PreviewCard from './PreviewCard'

import pic1 from '../../data/downtown.jpg'
import pic2 from '../../data/park.jpeg'
import pic3 from '../../data/chinatown.jpg'
import pic4 from '../../data/salesforce.jpg'

export default class PreviewCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: '1',
          image: pic1,
        },
        {
          id: '2',
          image: pic2,
        },
        {
          id: '3',
          image: pic3,
        },
        {
          id: '4',
          image: pic4,
        },
      ],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>{this.props.title}</Text>
        <View style={styles.post}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.data.map((post, index) => {
              return <PreviewCard key={index} image={post.image} />
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}

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
