import { View, Text, SafeAreaView, FlatList, ListRenderItem, ScrollView } from 'react-native'
import React, { useState } from 'react'
import RestaurantCard, { IRestaurantCardProp } from '@/components/Cards/Restaurant';
import Food from '@/assets/food.jpeg'
import { Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import SearchComponent from '@/components/SearchField';

const OrderTab = () => {
    const [query, setSearchQuery] = useState("")
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
        <SafeAreaView className='h-full w-full bg-white p-2 pt-8 flex flex-col'>
            <View className='flex flex-row flex-1  w-full items-center bg-white my-2 py-4'>
                <View className='bg-[#f7f7fa] w-10 h-10 rounded-md flex items-center justify-center'>
                    <AntDesign name='arrowleft' size={25} color={"#f7941d"} />
                </View>
                <SearchComponent handleChange={(e: any) => setSearchQuery(e)} value={query} placeHolder='Search...' />
            </View>
            <View className='w-full h-[1.5px] bg-[#f7f7fa] '/>

            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <Text className='font-semibold text-md text-primary pl-2 p-4'>Nearby Restaurant</Text>
                    )
                }}
                onEndReachedThreshold={0.5}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={renderItem}
                className=''



            />

        </SafeAreaView>
    )
}

export default OrderTab