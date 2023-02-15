import React from 'react';
import {useColorScheme, Image, ImageSourcePropType} from 'react-native';

const images = {
  light: {
    CoupleWithMoon: require('../assets/CoupleWithMoonLight.png'),
    Drum: require('../assets/DrumLight.png'),
    Flowers: require('../assets/FlowersLight.png'),
    LadyWithBag: require('../assets/LadyWithBagLight.png'),
    StrangeEyes: require('../assets/StrangeEyesLight.png'),
  },
  dark: {
    CoupleWithMoon: require('../assets/CoupleWithMoonDark.png'),
    Drum: require('../assets/DrumDark.png'),
    Flowers: require('../assets/FlowersDark.png'),
    LadyWithBag: require('../assets/LadyWithBagDark.png'),
    StrangeEyes: require('../assets/StrangeEyesDark.png'),
  },
} as {[scheme: string]: {[key: string]: ImageSourcePropType}};

export default function AppearanceImage({
  name,
  style,
}: {
  name: string;
  style?: any;
}) {
  const colorScheme = useColorScheme() || 'light';

  return (
    <Image
      source={images[colorScheme][name]}
      resizeMode="contain"
      style={style}
    />
  );
}
