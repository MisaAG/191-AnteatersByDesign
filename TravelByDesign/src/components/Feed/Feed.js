import React, {Component} from 'react'
import {StyleSheet, View, Text, FlatList, Image, ScrollView} from 'react-native'
import PreviewCarousel from './PreviewCarousel'

posts = [
  {
    id: '1',
    name: 'Joe McKay',
    text: 'This is my trip to Bali',
    image: require('./pic.jpg'),
    timeStamp: '1/1/2020',
  },
]

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
        </View>

        <ScrollView scrollEventThrottle={16}>
          <PreviewCarousel title="Local" />
          <PreviewCarousel title="Global" />

          <View style={styles.container}>
            <Text style={styles.headerTitle}>Trending</Text>

            <View style={styles.post}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.carousel}>
                  <View style={{flex: 2}}>
                    <Image source={require('./pic.jpg')} style={styles.image} />
                  </View>
                </View>

                <View style={styles.carousel}>
                  <View style={{flex: 2}}>
                    <Image
                      source={require('../../data/kyoto.jpg')}
                      style={styles.image}
                    />
                  </View>
                </View>

                <View style={styles.carousel}>
                  <View style={{flex: 2}}>
                    <Image
                      source={require('../../data/times.jpg')}
                      style={styles.image}
                    />
                  </View>
                </View>

                <View style={styles.carousel}>
                  <View style={{flex: 2}}>
                    <Image
                      source={require('../../data/bali.jpg')}
                      style={styles.image}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
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
  carousel: {
    height: 250,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
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
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})
