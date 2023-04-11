import styled from 'styled-components/native';
import {fontSize} from '../../helpers/Layout';

export const Container = styled.TouchableOpacity`
  background-color: #2563eb;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 5%;
  padding: 10px 10px;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #f8fafc;
  font-weight: 600;
  font-size: ${fontSize(16)};
  letter-spacing: ${fontSize(2)};
`;