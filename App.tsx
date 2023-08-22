import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    WorkSansRegular: require("./assets/fonts/WorkSans-Regular.ttf"),
    SubjectivityRegular: require("./assets/fonts/Subjectivity-Regular.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View className="mt-8 mr-2 ml-2">
      <Text className="font-workSans text-3xl">Booking app</Text>
      <StatusBar style="auto" />
    </View>
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

export default App;