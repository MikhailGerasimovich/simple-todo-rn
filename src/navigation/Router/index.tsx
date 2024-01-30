import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { config } from './config';
import { colors } from '../../constants';
import Todo from '../../screens/Todo';
import { Button } from 'react-native';
import Info from '../../screens/Info';

const NavigationStack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        initialRouteName={config[0].name}
        screenOptions={{
          headerStyle: { backgroundColor: colors.headerBackground },
          headerTitleStyle: {
            color: colors.text,
            fontSize: 20,
          },
        }}>
        <NavigationStack.Screen
          name={'todo'}
          component={Todo}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                title="info"
                onPress={() => navigation.navigate('info')}
              />
            ),
            title: 'Todo',
          })}
        />
        <NavigationStack.Screen
          name={'info'}
          options={{ title: 'Info' }}
          component={Info}
        />

        {/* {config.map(screen => (
          <NavigationStack.Screen
            key={screen.name}
            name={screen.name}
            options={{ title: screen.title }}
            component={screen.component}
          />
        ))} */}
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}
