import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
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
import Input from "./src/common/components/Input";
import ShowCover from "./src/common/components/ShowCover";
import { episodeMocked } from "./src/common/constants/mocks/episode.mock";
import EpisodeCover from "./src/common/components/EpisodeCover";
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import EpisodeCard from './src/common/components/EpisodeCard';
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
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
