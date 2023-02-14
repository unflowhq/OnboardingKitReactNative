import React from 'react';
import {StyleSheet, View} from 'react-native';
import MinimalButton from '../components/MinimalButton';
import ButtonGroup from '../components/ButtonGroup';
import Title from '../components/Title';

export default function IntroPage({navigation}: {navigation: any}) {
  const handleSignUp = () => {
    navigation.navigate('EmailPage');
  };

  const handleLogIn = () => {
    navigation.navigate('PhoneNumberEntryPage');
  };

  return (
    <View style={styles.container}>
      <Title text="Boost your business risk free" />
      <ButtonGroup>
        <MinimalButton text="Sign Up" onPress={handleSignUp} />
        <MinimalButton
          text="Log In"
          variant="secondary"
          onPress={handleLogIn}
        />
      </ButtonGroup>
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
