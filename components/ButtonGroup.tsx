import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ButtonGroup({children}: {children: React.ReactNode}) {
  return <View style={styles.group}>{children}</View>;
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'column',
    gap: 100,
  },
});
