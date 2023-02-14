import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Paragraph({text}: {text: string}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '300',
  },
});
