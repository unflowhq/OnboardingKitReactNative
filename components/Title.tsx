import React from 'react';
import {StyleSheet, Text, useColorScheme} from 'react-native';

export default function Title({text, style = {}}: {text: string; style?: any}) {
  const colorScheme = useColorScheme() || 'light';

  return <Text style={[styles.text, style, styles[colorScheme]]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  light: {
    color: '#000000',
  },
  dark: {
    color: '#E7E9E6',
  },
});
