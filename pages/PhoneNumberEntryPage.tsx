import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Paragraph from '../components/Paragraph';
import MinimalButton from '../components/MinimalButton';
import {useValidation} from '../hooks/validations';
import {useKeyboard} from '../hooks/keyboard';
import AnimatedViews from '../components/AnimatedViews';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';

export default function PhoneNumberEntryPage({navigation}: {navigation: any}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const {validatePhoneNumber} = useValidation();
  const keyboardVisible = useKeyboard();

  const handleSendMessage = () => {
    // if (!validatePhoneNumber(phoneNumber)) {
    //   return Alert.alert('Invalid phone number', 'Please enter a phone number');
    // }
    // TODO: Add your own service to send a login link via SMS with the generated 'expectedCode'
    const expectedCode = '198913';
    navigation.navigate('ConfirmationCodePage', {phoneNumber, expectedCode});
  };

  return (
    <KeyboardAvoidingContainer style={styles.container}>
      <AnimatedViews.FadingView visible={!keyboardVisible}>
        <Header image="StrangeEyes" text="What's your phone number?" />
        <Paragraph text="We need to make sure you're you. Please let us know what number to send a code to." />
      </AnimatedViews.FadingView>
      <Input value={phoneNumber} type="phone" onChange={setPhoneNumber} />
      <AnimatedViews.Spacer visible={!keyboardVisible} />
      <MinimalButton text="Send code" onPress={handleSendMessage} />
    </KeyboardAvoidingContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    gap: 20,
  },
});
