import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import MinimalButton from '../components/MinimalButton';
import ButtonGroup from '../components/ButtonGroup';
import {requestNotifications} from 'react-native-permissions';

export default function NotificationPermissionPage() {
  const handleNotificationPermissionRequest = async () => {
    let {status} = await requestNotifications(['alert', 'sound']);
    Alert.alert('Permission status', `Notification permissions were ${status}`);
  };

  const handleSkip = () => {};

  return (
    <View style={styles.container}>
      <View>
        <Header image="LadyWithBag" text="Don't miss anything" />
        <Paragraph text="Get full control over your purchases, allow push notifications and get information when you have made a purchase or when you have something to pay." />
      </View>
      <ButtonGroup>
        <MinimalButton
          text="Sure!"
          onPress={handleNotificationPermissionRequest}
        />
        <MinimalButton
          text="Not right now"
          variant="secondary"
          onPress={handleSkip}
        />
      </ButtonGroup>
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
