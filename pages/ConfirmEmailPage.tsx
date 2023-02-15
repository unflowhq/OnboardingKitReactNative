import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import drum from '../assets/DrumLight.png';

export default function ConfirmEmailPage({route}) {
  return (
    <View style={styles.container}>
      <Header image={drum} text="Your login link is on the way!" />
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
    backgroundColor: '#fff',
    rowGap: 20,
    marginHorizontal: 20,
  },
});
