import styled from 'styled-components/native';
import {fontSize, Layout} from '../../helpers/Layout';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${fontSize(25)};
  margin-bottom: ${Layout.Height(1)};
`;