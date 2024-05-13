
import { FontAwesome, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import SearchComponent from '@/components/SearchField';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [query, setSearchQuery] = useState("")
  return (
    <Tabs


      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { position: "absolute", backgroundColor: "#ffffff", elevation: 30, bottom: 4, padding: 12, height: 80, display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", borderRadius: 60, shadowOpacity: 1, shadowOffset: { width: 60, height: 70 }, shadowColor: "#979fb6" },


      }}>

      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'notifications-sharp'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Order"
        options={{
          headerShown: true,
          header: () => {
            return (
              <View className='flex flex-row gap-x-20 w-full items-center bg-white my-2'>
                <View className='bg-gray-100 w-10 h-10 rounded-md flex items-center justify-center'>
                  <AntDesign name='arrowleft' size={15} color={"#f7941d"} />
                </View>
                <SearchComponent handleChange={(e: any) => setSearchQuery(e)} value={query} placeHolder='Search...' />
              </View>
            )
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'restaurant' : 'restaurant-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon designCategory={'entypo'} name={'back-in-time'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon designCategory="antDesign" name={'shoppingcart'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
