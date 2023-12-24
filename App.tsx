import { useFonts } from "expo-font";
import BottomTabs from "./components/BottomTabs";
import { NavigationContainer } from '@react-navigation/native';
import * as React from "react";

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