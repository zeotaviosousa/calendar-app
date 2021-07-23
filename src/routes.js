import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Day from './screens/Day'
import Month from './screens/Month'
import Reminder from './screens/Reminder'

const Stack = createStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Day" component={Day} />
          <Stack.Screen name="Month" component={Month} />
          <Stack.Screen name="Reminder" component={Reminder} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes
