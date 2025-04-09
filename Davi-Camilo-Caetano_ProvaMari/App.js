import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login';
import Estoque from './screens/estoque'
import FaleConosco from './screens/faleConosco'


function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Estoque" component={Estoque} />
        <Drawer.Screen name="FaleConosco" component={FaleConosco} />
      </Drawer.Navigator>
  );

}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="DepoisLogin" component = {Drawer}/>
      </Stack.Navigator>
    </NavigationContainer>

  )

}