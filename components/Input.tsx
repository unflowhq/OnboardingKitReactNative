import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

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
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
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
    width: 160,
    height: 160,
  },
});
