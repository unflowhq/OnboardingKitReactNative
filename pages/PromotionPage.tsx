import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Paragraph from '../components/Paragraph';
import drum from '../assets/Drum.png';
import MinimalButton from '../components/MinimalButton';

export default function PromotionPage() {
  return (
    <View style={styles.container}>
      <View>
        <Header image={drum} text="What's your phone number?" />
        <Paragraph
          text={`We've sent an email with a verification link to ${email}`}
        />
        <Paragraph text="We need to make sure you're you. Please let us know what number to send a code to." />
        <Input value="" type="phone" onChange={() => {}} />
      </View>
      <MinimalButton text="Send code" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
