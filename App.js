import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Contact } from './screens/Contact';
import { Creator } from './screens/Creator';
import { Gallery } from './screens/Gallery';
import { Join } from './screens/Join';
import { Shop } from './screens/Shop';
import { Item } from './screens/Item';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{
            title: 'Paddy Wack Homemade Gifts',
            headerStyle: { backgroundColor: '#922667' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'}
          }}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{
            title: 'Gallery',
            headerStyle: { backgroundColor: '#922667' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'}
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: 'Contact Paddy Wack Gifts',
            headerStyle: { backgroundColor: '#922667' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'}
          }}
        />
        <Stack.Screen
          name="Join"
          component={Join}
          options={{
            title: 'Join Paddy Wack Gifts',
            headerStyle: { backgroundColor: '#922667' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'}
          }}
        />
        <Stack.Screen
          name="Creator"
          component={Creator}
          options={{
            title: 'Paddy Wack Gifts Creator',
            headerStyle: { backgroundColor: '#922667' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'}
          }}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={{
            title: 'Paddy Wack Gifts Store',
            headerStyle: { backgroundColor: '#922667' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
