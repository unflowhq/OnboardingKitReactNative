import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Title({text}: {text: string}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
