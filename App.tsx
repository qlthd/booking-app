import { useFonts } from "expo-font";
import BottomTabs from "./components/BottomTabs";
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as React from "react";

const App = () => {
  const queryClient = new QueryClient();

  const [loaded] = useFonts({
    WorkSansRegular: require("./assets/fonts/WorkSans-Regular.ttf"),
    SubjectivityRegular: require("./assets/fonts/Subjectivity-Regular.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;