import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MinimalButton from '../components/MinimalButton';
import ButtonGroup from '../components/ButtonGroup';
import Title from '../components/Title';
import intro1 from '../assets/IntroImage1.png';
import intro2 from '../assets/IntroImage2.png';

export default function IntroPage({navigation}: {navigation: any}) {
  const handleSignUp = () => {
    navigation.navigate('EmailPage');
  };

  const handleLogIn = () => {
    navigation.navigate('PhoneNumberEntryPage');
  };

  return (
    <View style={styles.container}>
      <Title
        text="Boost your business risk free"
        style={styles.horizontalContainer}
      />
      <View style={styles.imageContainer}>
        <View style={styles.leftImage}>
          <Image source={intro1} resizeMode="contain" style={styles.image} />
        </View>
        <View style={styles.rightImage}>
          <Image source={intro2} resizeMode="contain" style={styles.image} />
        </View>
      </View>
      <ButtonGroup style={styles.horizontalContainer}>
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
  horizontalContainer: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  imageContainer: {flex: 1, flexDirection: 'row'},
  leftImage: {flex: 1},
  rightImage: {flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'},
  image: {maxWidth: '90%'},
});
