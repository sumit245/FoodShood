import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TopPage from './TopPage';
import Orders from './Orders';
import Icon from 'react-native-vector-icons/Ionicons';
import PastOrders from './PastOrders';
import AccountSettings from './AccountSettings';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00ccff"
      inactiveColor="tomato"
      inactiveTintColor="black"
      shifting={true}
      barStyle={{
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}>
      <Tab.Screen
        name="Home"
        component={TopPage}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="home-outline"
              color={color}
              selectionColor={'red'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="fast-food-outline"
              color={color}
              selectionColor={'red'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Past Orders"
        component={PastOrders}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="today-outline"
              color={color}
              selectionColor={'red'}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={AccountSettings}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="grid-outline"
              color={color}
              selectionColor={'red'}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class HomePage extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
