import React from 'react';
import {TouchableOpacity, Text,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

const HeaderBackButton = ({title='back',onPress}) => {
  
  if(!onPress){
    const navigation = useNavigation()
    onPress = ()=>navigation.goBack()
  }
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}


export {HeaderBackButton};