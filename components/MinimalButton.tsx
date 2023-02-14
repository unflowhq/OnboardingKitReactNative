import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function MinimalButton({
  text,
  variant = 'primary',
  onPress,
}: {
  text: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}>
      <Text style={[styles.text, styles[variant]]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primary: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
  },
  secondary: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
});
