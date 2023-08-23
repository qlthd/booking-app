import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react'
import { Home } from './Home';
import { Profile } from './Profile';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SavedBookings } from './SavedBookings';
import { Bookings } from './Bookings';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
 
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <Entypo name="home" size={18} color="black" />
                  ) : (
                    <AntDesign name="home" size={18} color="black" />
                  ),
              }}
        />
        <Tab.Screen 
            name="Bookings" 
            component={Bookings}
            options={{
                tabBarLabel: "Bookings",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <Entypo name="wallet" size={18} color="black" />
                  ) : (
                    <AntDesign name="wallet" size={18} color="black" />
                  ),
              }}
        />
        <Tab.Screen 
            name="Saved" 
            component={SavedBookings}
            options={{
                tabBarLabel: "Saved",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <AntDesign name="heart" size={18} color="black" />
                  ) : (
                    <AntDesign name="hearto" size={18} color="black" />
                  ),
              }}
        />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <Entypo name="user" size={18} color="black" />
                  ) : (
                    <AntDesign name="user" size={18} color="black" />
                  ),
              }}
        />
    </Tab.Navigator>
  );
}


export default BottomTabs;