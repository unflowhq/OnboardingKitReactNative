import React from 'react';
import {StyleSheet, Text, TouchableOpacity, useColorScheme} from 'react-native';

export default function MinimalButton({
  text,
  variant = 'primary',
  onPress,
}: {
  text: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
}) {
  const colorScheme = useColorScheme() || 'light';

  return (
    <TouchableOpacity
      style={[styles.button, themes[colorScheme][variant]]}
      onPress={onPress}>
      <Text style={[styles.text, themes[colorScheme][variant]]}>{text}</Text>
    </TouchableOpacity>
  );
}

const light = StyleSheet.create({
  primary: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
  },
  secondary: {
    color: '#000000',
    backgroundColor: 'transparent',
  },
});

const dark = StyleSheet.create({
  primary: {
    color: '#000000',
    backgroundColor: '#E7E9E6',
  },
  secondary: {
    color: '#E7E9E6',
    backgroundColor: 'transparent',
  },
});

const themes = {
  light,
  dark,
};

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
});
