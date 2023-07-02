import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Text from "./src/common/components/Text";
import Spacer from "./src/common/components/Spacer";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import Icon from "./src/common/components/Icon";
import Avatar from "./src/common/components/Avatar";
import BackButton from "./src/common/components/BackButton";
import NotFound from "./src/common/components/NotFound";
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
        <Spacer height={20} />
          <BackButton
            onPress={() => {
              console.log("clicou no botão in");
            }}
          />
          <Spacer height={20} />
          <Text size={30} color="onSecondary">
            1 Meu componente de text
          </Text>
          <Icon icon="home" color="red" size={40}></Icon>
          <Spacer height={30} />
          <Avatar
            size="small"
            url="https://br.web.img3.acsta.net/pictures/18/08/01/20/13/3535250.jpg"
          />
          <NotFound />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
