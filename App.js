
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestuarantScreen from './screens/RestuarantScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restuarant" component={RestuarantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} 
            options={{
              presentation: 'modal',
              headerShown: false
            }}
          />
          <Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen}
          options={{
            presentation: 'fullScreenModal',
            headerShown: false
          }} />
          <Stack.Screen name='Delivery' component={DeliveryScreen}
          options={{
            presentation: 'fullScreenModal',
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}