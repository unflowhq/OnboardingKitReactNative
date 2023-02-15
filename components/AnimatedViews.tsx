import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

const AnimatedSpacer = ({visible}: {visible: boolean}) => {
  const animatedFlex = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animatedFlex, {
      toValue: visible ? 1 : 0,
      duration: 50,
      delay: visible ? 0 : 10000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [visible, animatedFlex]);

  return <Animated.View style={{flex: animatedFlex}} />;
};

const FadingView = ({
  visible,
  children,
  style,
}: {
  visible: boolean;
  children: React.ReactNode;
  style?: any;
}) => {
  const nextValue = visible ? 1 : 0;
  const animatedValue = useRef(new Animated.Value(nextValue)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: nextValue,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [visible, nextValue, animatedValue]);

  return (
    <Animated.View style={[style, {opacity: animatedValue}]}>
      {children}
    </Animated.View>
  );
};

export default {Spacer: AnimatedSpacer, FadingView};
