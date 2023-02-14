import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroPage from './pages/IntroPage';
import EmailPage from './pages/EmailPage';
import ConfirmEmailPage from './pages/ConfirmEmailPage';
import PhoneNumberEntryPage from './pages/PhoneNumberEntryPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="IntroPage" component={IntroPage} />
          <Stack.Screen name="EmailPage" component={EmailPage} />
          <Stack.Screen name="ConfirmEmailPage" component={ConfirmEmailPage} />
          <Stack.Screen
            name="PhoneNumberEntryPage"
            component={PhoneNumberEntryPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
  },
});

export default App;
