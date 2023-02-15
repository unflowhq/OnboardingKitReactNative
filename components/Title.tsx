import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Title({text, style = {}}: {text: string; style?: any}) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
