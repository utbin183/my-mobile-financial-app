import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashPage';
import RegisterScreen from './RegisterPage';
import LoginScreen from './LoginPage';
import HomeScreen from './HomePage';
import SavingScreen from './SavingPage';
import OwingScreen from './OwingPage';
import ExpendingScreen from './ExpendingPage';
import InvestingScreen from './InvestingPage';
import FinancialDataScreen from './FinancialDataPage';
import AddingScreen from './AddingPage';
import LinkingScreen from './LinkingPage';
import BonusScreen from './BonusPage';
import OtherCardScreen from './OtherCardPage';
import ChatBoxScreen from './ChatBoxPage';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />   
        <Stack.Screen name="Saving" component={SavingScreen} />
        <Stack.Screen name="Owing" component={OwingScreen} />
        <Stack.Screen name="Expending" component={ExpendingScreen} />
        <Stack.Screen name="Investing" component={InvestingScreen} />
        <Stack.Screen name="Financial_Data" component={FinancialDataScreen} />
        <Stack.Screen name="Adding_Money" component={AddingScreen}/>
        <Stack.Screen name="Linking" component={LinkingScreen}/>
        <Stack.Screen name="Bonus" component={BonusScreen}/>
        <Stack.Screen name="Other_card" component={OtherCardScreen}/>
        <Stack.Screen name="ChatBox" component={ChatBoxScreen}/>
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
