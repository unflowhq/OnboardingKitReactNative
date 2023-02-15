import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const useKeyboard = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowSubscription = Keyboard.addListener(
      'keyboardWillShow',
      () => setKeyboardOpen(true),
    );
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      () => setKeyboardOpen(false),
    );

    return () => {
      keyboardDidShowSubscription.remove();
      keyboardDidHideSubscription.remove();
    };
  });

  return keyboardOpen;
};
