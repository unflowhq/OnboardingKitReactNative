import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroPage from './pages/IntroPage';
import EmailPage from './pages/EmailPage';
import ConfirmEmailPage from './pages/ConfirmEmailPage';
import PhoneNumberEntryPage from './pages/PhoneNumberEntryPage';
import ConfirmationCodePage from './pages/ConfirmationCodePage';
import SetupConfirmationPage from './pages/SetupConfirmationPage';
import NotificationPermissionPage from './pages/NotificationPermissionPage';

const Stack = createNativeStackNavigator();

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={NavigationTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="NotificationPermissionPage"
            component={NotificationPermissionPage}
          />
          <Stack.Screen
            name="SetupConfirmationPage"
            component={SetupConfirmationPage}
          />
          <Stack.Screen name="IntroPage" component={IntroPage} />
          <Stack.Screen name="ConfirmEmailPage" component={ConfirmEmailPage} />
          <Stack.Screen name="EmailPage" component={EmailPage} />
          <Stack.Screen
            name="PhoneNumberEntryPage"
            component={PhoneNumberEntryPage}
          />
          <Stack.Screen
            name="ConfirmationCodePage"
            component={ConfirmationCodePage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
