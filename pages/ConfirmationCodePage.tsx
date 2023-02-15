import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, useColorScheme} from 'react-native';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import MinimalButton from '../components/MinimalButton';
import {useKeyboard} from '../hooks/keyboard';
import AnimatedViews from '../components/AnimatedViews';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';

export default function ConfirmationCodePage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const colorScheme = useColorScheme() || 'light';
  const keyboardOpen = useKeyboard();

  const {phoneNumber, expectedCode} = route.params;

  const handleConfirmCode = () => {
    if (expectedCode !== value) {
      return Alert.alert(
        'Uh oh!',
        'It looks like the code you entered did not match',
      );
    }
    navigation.navigate('SetupConfirmationPage');
  };

  return (
    <KeyboardAvoidingContainer style={styles.container}>
      <View style={styles.flexing}>
        <Title text="Verify your phone number" />
        <Paragraph
          text={`We've sent you a one time verification code to ${phoneNumber}`}
        />
        <View style={styles.flexing} />
      </View>

      <AnimatedViews.Spacer visible={!keyboardOpen} />

      <View style={styles.footer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={6}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          rootStyle={styles.codeField}
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[
                styles.cell,
                styles[colorScheme],
                isFocused && styles.focusCell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={[styles.cellText, styles[colorScheme]]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <MinimalButton text="Confirm" onPress={handleConfirmCode} />
      </View>
    </KeyboardAvoidingContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    marginHorizontal: 20,
  },
  flexing: {flex: 1},
  footer: {gap: 20},
  codeField: {gap: 8},
  cell: {
    justifyContent: 'center',
    flex: 1,
    height: 60,
    borderWidth: 2,
    borderRadius: 8,
  },
  focusCell: {borderColor: '#000000'},
  cellText: {fontSize: 24, textAlign: 'center'},
  light: {
    color: '#000000',
    borderColor: '#F6F6F6',
    backgroundColor: '#F6F6F6',
  },
  dark: {
    color: '#E7E9E6',
    borderColor: '#333333',
    backgroundColor: '#333333',
  },
});
