import styled from 'styled-components/native';
import { Layout } from '../../helpers/Layout';

export const Container = styled.TouchableOpacity`
  /* margin-right: ${Layout.Width(5)}; */
  padding: ${Layout.Height(1) } ${Layout.Width(5)}
`;

export const Title = styled.Text`
  color:#1d4ed8
`;