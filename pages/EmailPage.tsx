import React, {useState} from 'react';
import {StyleSheet, Switch, View, Alert} from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import MinimalButton from '../components/MinimalButton';
import {useKeyboard} from '../hooks/keyboard';
import {useValidation} from '../hooks/validations';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import AnimatedViews from '../components/AnimatedViews';
import AppearanceImage from '../components/AppearanceImage';
import Subtext from '../components/Subtext';

export default function EmailPage({navigation}: {navigation: any}) {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const keyboardOpen = useKeyboard();
  const {validateEmail} = useValidation();

  const handleSendLink = () => {
    if (!validateEmail(email)) {
      return Alert.alert('Invalid email', 'Please enter a valid email');
    }
    // TODO: Add your own service to send a login link via email
    navigation.navigate('ConfirmEmailPage', {email});
  };

  return (
    <KeyboardAvoidingContainer style={styles.container}>
      <AnimatedViews.FadingView
        visible={!keyboardOpen}
        style={styles.imageContainer}>
        <AppearanceImage name="CoupleWithMoon" style={styles.image} />
      </AnimatedViews.FadingView>
      <View style={styles.formContainer}>
        <Title text="Sign up in less than 2 minutes" />
        <Input value={email} type="email" onChange={setEmail} />
        <MinimalButton text="Send link" onPress={handleSendLink} />
        <View style={styles.rememberContainer}>
          <Subtext text="Remember login details" />
          <Switch
            onValueChange={setRememberMe}
            value={rememberMe}
            trackColor={{true: '#000000'}}
          />
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: 300,
  },
  formContainer: {rowGap: 20},
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
