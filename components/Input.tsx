import React from 'react';
import {StyleSheet, TextInput, useColorScheme} from 'react-native';

export default function Input({
  onChange,
  type = 'text',
  value,
}: {
  onChange: (text: string) => void;
  type?: 'email' | 'phone' | 'text';
  value: string;
  placeholder?: string;
}) {
  const colorScheme = useColorScheme() || 'light';

  return (
    <TextInput
      style={[styles.input, styles[colorScheme]]}
      placeholderTextColor={colorScheme === 'light' ? '#000000' : '#67676A'}
      onChangeText={onChange}
      inputMode={type === 'email' ? 'email' : type === 'phone' ? 'tel' : 'text'}
      value={value}
      placeholder={
        type === 'email'
          ? 'Email Address'
          : type === 'phone'
          ? 'Phone Number'
          : 'Start typing...'
      }
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  light: {
    backgroundColor: '#F6F6F6',
  },
  dark: {backgroundColor: '#333333', color: '#E7E9E6'},
});
