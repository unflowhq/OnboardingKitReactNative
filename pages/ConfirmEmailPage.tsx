import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

export default function ConfirmEmailPage({route}: {route: any}) {
  return (
    <View style={styles.container}>
      <Header image="Drum" text="Your login link is on the way!" />
      <Paragraph
        text={`We've sent an email with a verification link to ${route.params.email}`}
      />
      <Paragraph text="If you're unable to find the email, please check your spam folder" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    marginHorizontal: 20,
  },
});
