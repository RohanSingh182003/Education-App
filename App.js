import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About'
import Contact from './src/screens/Contact'
import Courses from './src/screens/Courses'
import Users from './src/screens/Users'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} showHeaderTitle = 'none' options={{
          headerShown: false
        }} />
        <Stack.Screen name="About" component={About} options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="Contact" component={Contact}  options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitleAlign: 'center' }}
        />
        <Stack.Screen name="Courses" component={Courses}   options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitleAlign: 'center' }} />
        <Stack.Screen name="Users" component={Users}   options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitleAlign: 'center' }} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

