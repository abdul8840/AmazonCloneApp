import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { CarouselData } from '../data/CarouselData.js';

const Carousel = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.container}>
      {CarouselData.map(item => (
        <View key={item.id} style={styles.row}>
          <Image source={item.image} style={styles.imgStyle} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
  },
  row: {
    width: 380, // Set a fixed width for each image container
    marginRight: 10,
  },
  imgStyle: {
    height: 250,
    width: '100%',
    resizeMode: 'cover', // Adjust image to cover the container
  },
});

export default Carousel;
