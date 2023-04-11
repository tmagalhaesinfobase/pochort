import React from 'react';
import * as S from './styles';

const Button = ({children, onPress}) => {
  return (
    <S.Container onPress={onPress}>
      <S.TextButton>{children}</S.TextButton>
    </S.Container>
  );
};

export {Button};