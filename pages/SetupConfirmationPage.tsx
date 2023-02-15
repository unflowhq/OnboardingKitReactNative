import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import flowers from '../assets/FlowersLight.png';
import MinimalButton from '../components/MinimalButton';

export default function SetupConfirmationPage({navigation}) {
  const handleProgress = () => {
    navigation.navigate('NotificationPermissionPage');
  };

  return (
    <View style={styles.container}>
      <View>
        <Header image={flowers} text="You're all set up!" />
        <Paragraph text="From now on you can use your phone number to identify yourself, when you log in or confirm transactions." />
      </View>
      <MinimalButton text="Great!" onPress={handleProgress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});
