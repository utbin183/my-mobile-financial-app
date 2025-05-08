import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashPage';
import RegisterScreen from './RegisterPage';
import LoginScreen from './LoginPage';
import HomeScreen from './HomePage';
import StorageScreen from './StoragePage';
import AISuggestionScreen from './AIsuggestionPage';
import LinkingScreen from './LinkingPage';
import OtherChatBoxScreen from './OtherChatBoxPage'
import ChatBoxScreen from './ChatBoxPage';
import OTPScreen from './OTPPage';
import SecurityScreen from './SecurityPage';
import ReviewScreen from './ReviewPage';
import ManageGoalScreen from './ManageGoalPage';
import ShareScreen from './SharingPage';
import DiscoverScreen from './DiscoverPage';
import UpdateScreen from './UpdatePage'
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />   
        <Stack.Screen name="Storage" component={StorageScreen} />
        <Stack.Screen name="AISuggestion" component={AISuggestionScreen} />
        <Stack.Screen name="Manage_goal" component={ManageGoalScreen}/>
        <Stack.Screen name="Linking" component={LinkingScreen}/>
        <Stack.Screen name="OtherChatBox" component={OtherChatBoxScreen}/>
        <Stack.Screen name="ChatBox" component={ChatBoxScreen}/>
        <Stack.Screen name="OTPPage" component={OTPScreen}/>
        <Stack.Screen name="Security" component={SecurityScreen}/>
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Sharing" component={ShareScreen}/>
        <Stack.Screen name="Discovering" component={DiscoverScreen}/>
        <Stack.Screen name="Updating" component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
