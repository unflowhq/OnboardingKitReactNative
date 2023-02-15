import React, {useState} from 'react';
import {StyleSheet, Switch, View, Text, Image, Alert} from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import MinimalButton from '../components/MinimalButton';
import moon from '../assets/CoupleWithMoonLight.png';
import {useKeyboard} from '../hooks/keyboard';
import {useValidation} from '../hooks/validations';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import AnimatedViews from '../components/AnimatedViews';

export default function EmailPage({navigation}) {
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
        <Image source={moon} resizeMode="contain" style={styles.image} />
      </AnimatedViews.FadingView>
      <View style={styles.formContainer}>
        <Title text="Sign up in less than 2 minutes" />
        <Input value={email} type="email" onChange={setEmail} />
        <MinimalButton text="Send link" onPress={handleSendLink} />
        <View style={styles.rememberContainer}>
          <Text style={styles.subtext}>Remember login details</Text>
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
    backgroundColor: '#fff',
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
  subtext: {
    fontSize: 12,
  },
});
