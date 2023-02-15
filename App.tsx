import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
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

const NavigationTheme = (colorScheme: string) => {
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colorScheme === 'light' ? '#FFFFFF' : '#000000',
    },
  };
};

function App(): JSX.Element {
  const colorScheme = useColorScheme() || 'light';

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={NavigationTheme(colorScheme)}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            options={nonNavigable}
            name="IntroPage"
            component={IntroPage}
          />
          <Stack.Screen
            name="EmailPage"
            options={navigable(colorScheme)}
            component={EmailPage}
          />
          <Stack.Screen
            name="ConfirmEmailPage"
            options={navigable(colorScheme)}
            component={ConfirmEmailPage}
          />
          <Stack.Screen
            name="PhoneNumberEntryPage"
            options={navigable(colorScheme)}
            component={PhoneNumberEntryPage}
          />
          <Stack.Screen
            name="ConfirmationCodePage"
            options={navigable(colorScheme)}
            component={ConfirmationCodePage}
          />
          <Stack.Screen
            name="SetupConfirmationPage"
            options={nonNavigable}
            component={SetupConfirmationPage}
          />
          <Stack.Screen
            name="NotificationPermissionPage"
            options={navigable(colorScheme)}
            component={NotificationPermissionPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const nonNavigable = {headerShown: false};
const navigable = (colorScheme: string) => {
  return {
    title: '',
    headerTintColor: colorScheme === 'light' ? '#000000' : '#FFFFFF',
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerShadowVisible: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
