import React from 'react';
import {StyleSheet, Text, useColorScheme} from 'react-native';

export default function Paragraph({text}: {text: string}) {
  const colorScheme = useColorScheme() || 'light';

  return <Text style={[styles.text, styles[colorScheme]]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '300',
  },
  light: {
    color: '#000000',
  },
  dark: {
    color: '#E7E9E6',
  },
});
