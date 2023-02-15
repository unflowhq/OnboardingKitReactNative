import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppearanceImage from './AppearanceImage';
import Title from './Title';

export default function Header({image, text}: {text: string; image: any}) {
  return (
    <View style={styles.container}>
      <AppearanceImage name={image} style={styles.image} />
      <Title text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  image: {
    width: 160,
    height: 160,
  },
});
