import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

export default function KeyboardAvoidingContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      keyboardVerticalOffset={100}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
