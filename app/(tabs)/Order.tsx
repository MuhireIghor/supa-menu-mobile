import { View, Text, SafeAreaView, FlatList, ListRenderItem, ScrollView } from 'react-native'
import React, { useState } from 'react'
import RestaurantCard, { IRestaurantCardProp } from '@/components/Cards/Restaurant';
import Food from '@/assets/food.jpeg'
import { Stack } from 'expo-router';

const OrderTab = () => {
    const [restaurants, setRestaurants] = useState<IRestaurantCardProp[]>([
        {
            id: "1",
            category: ["World", "African", "Pizzeria", "Coffer"],
            location: "Kigali",
            image: Food
        },
        {
            id: "2",
            category: ["World", "African", "Pizzeria", "Coffer"],
            location: "Nairobi",
            image: Food
        },
        {
            id: "3",
            category: ["World", "African", "Pizzeria", "Coffer"],
            location: "Kampala",
            image: Food
        },
        {
            id: "4",
            category: ["World", "African", "Pizzeria", "Coffer"],
            location: "Kampala",
            image: Food
        },
        {
            id: "5",
            category: ["World", "African", "Pizzeria", "Coffer"],
            location: "Kampala",
            image: Food
        },

    ])
    const renderItem: ListRenderItem<IRestaurantCardProp> = ({ item }) => (

        <RestaurantCard {...item} />
    )
    return (
        <SafeAreaView className='h-full bg-white p-2 pt-8'>

            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <Text className='font-semibold text-md text-primary pl-4 p-6'>Nearby Restaurant</Text>
                    )
                }}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={renderItem}
                className=''



            />

        </SafeAreaView>
    )
}

export default OrderTab