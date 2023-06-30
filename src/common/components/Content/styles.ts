
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  //adicionei Esse top por causa do android
  margin-top: ${({ theme }) => theme.spacing.md}px;;
  margin-left: ${({ theme }) => theme.spacing.md}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;