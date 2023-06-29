import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Text from "./src/common/components/Text";
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={styles.container}>
        <Text size={40} color="secondary">
          Meu componente de tex2
        </Text>
        <StatusBar style="auto" />
      </View>
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
