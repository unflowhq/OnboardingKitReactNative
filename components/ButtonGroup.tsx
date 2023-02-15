import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ButtonGroup({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <View style={[styles.group, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  group: {flexDirection: 'column', gap: 4},
});
