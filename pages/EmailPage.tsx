import React from 'react';
import {StyleSheet, Switch, View, Text} from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import MinimalButton from '../components/MinimalButton';

export default function EmailPage() {
  return (
    <View style={styles.container}>
      <View>
        <Title text="Sign up in less than 2 minutes" />
        <Input value="" type="email" onChange={() => {}} />
        <MinimalButton text="Send link" onPress={() => {}} />
        <View style={styles.rememberContainer}>
          <Text style={styles.subtext}>Remember login details</Text>
          <Switch onValueChange={() => {}} value={true} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    rowGap: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtext: {
    fontSize: 12,
  },
});
