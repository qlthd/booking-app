import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import BottomTabs from "./components/BottomTabs";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [loaded] = useFonts({
    WorkSansRegular: require("./assets/fonts/WorkSans-Regular.ttf"),
    SubjectivityRegular: require("./assets/fonts/Subjectivity-Regular.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  );
}

export default App;