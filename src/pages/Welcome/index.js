import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button';
import * as S from './styles';

const WelcomeScreen = ({navigation}) => {
  return (
    <S.Container>
      <S.Title> Hortifruti </S.Title>
      <Button onPress={() => navigation.navigate('HomeScreen')}>
        Home S/ Header
      </Button>
      <Button onPress={() => navigation.navigate('LogBookScreen')}>
        Home C/ Header
      </Button>
    </S.Container>
  );
};

export {WelcomeScreen};