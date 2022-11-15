import * as React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Dietas from './Screens/Dietas';
import Contacto from './Screens/Contacto';
import Desayuno from './Screens/Desayuno';
import DietasPasadas from './Screens/DietasPasadas';
import LoginScreen from './Screens/LoginScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Secrets from './Screens/Secrets';

const Tab = createBottomTabNavigator();

export const BottomTab = props => {
  const hide = props.routeName != 'HealthBeat';
  return (
    <Tab.Navigator
      initialRouteName="HealthBeat"
      tabBarOptions={{
        activeTintColor: '#F19F00',
        activeBackgroundColor: '#FFEBC6',
        inactiveTintColor: '#FFF',
        inactiveBackgroundColor: '#272F3C',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, alignItems}) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Contacto':
              iconName = 'person-outline';
              break;
            case 'Dietas':
              iconName = 'fast-food-outline';
              break;
          }
          return (
            <Icon name={iconName} size={35} color={color} focused={true} />
          );
        },
      })}>
      <Tab.Screen
        name="Dietas"
        component={Dietas}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: '#F19F00',
            height: 80,
            borderWidth: 1,
            borderColor: '#F9F9F9',
          },
          headerTitleStyle: {
            color: '#FFFF',
            fontSize: 35,
            fontStyle: 'italic',
            marginLeft: 140,
          },
        }}
      />
      <Tab.Screen
        name="Secrets"
        component={Secrets}
        options={{
          tabBarStyle: {
            display: hide ? 'none' : 'flex',
            width: 800,
          },
          tabBarLabel: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: '#F19F00',
            height: 80,
          },
          headerTitleStyle: {
            color: '#FFFF',
            fontSize: 35,
            fontStyle: 'italic',
            marginLeft: 110,
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: '#F19F00',
            height: 80,
            borderWidth: 1,
            borderColor: '#F9F9F9',
          },
          headerTitleStyle: {
            color: '#FFFF',
            fontSize: 35,
            fontStyle: 'italic',
            marginLeft: 137,
          },
        }}
      />
      <Tab.Screen
        name="HealthBeat"
        component={LoginScreen}
        options={{
          tabBarStyle: {
            display: hide ? 'none' : 'flex',
            width: 800,
          },
          tabBarLabel: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: '#F19F00',
            height: 80,
          },
          headerTitleStyle: {
            color: '#FFFF',
            fontSize: 35,
            fontStyle: 'italic',
            marginLeft: 110,
          },
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={Contacto}
        options={{
          tabBarLabel: () => {
            return null;
          },

          headerStyle: {
            backgroundColor: '#F19F00',
            height: 80,
            borderWidth: 1,
            borderColor: '#F9F9F9',
          },
          headerTitleStyle: {
            color: '#FFFF',
            fontSize: 35,
            fontStyle: 'italic',
            marginLeft: 120,
          },
        }}
      />
    </Tab.Navigator>
  );
};
