import { View, Text, SafeAreaView, FlatList, ListRenderItem, ScrollView, SafeAreaViewComponent, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Food from '@/assets/food.jpeg'
import { IRestaurantCardProp } from '@/components/Cards/Restaurant'
import HomeCardItem from '@/components/Cards/HomeCardItem'
import CustomField from '@/components/Inputs/InputField'
import { AntDesign, Entypo, FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const HomeTab = () => {
    const [searchField, setSearchField] = useState("");
    const handleChange = (e: any) => {
        setSearchField(e)
    }
    const renderItem: ListRenderItem<IRestaurantCardProp> = ({ item }) => (
        <HomeCardItem {...item} />
    )
    const [items, setItems] = useState([
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
        }, {
            id: "4",
            category: ["World", "African", "Pizzeria", "Coffer"],
            location: "Nairobi",
            image: Food
        },



    ])
    return (
        <SafeAreaView className='w-full h-full bg-white '>
            <View className='w-full  flex flex-col mt-[24px] justify-center  h-[15%] px-4 border border-primary bg-primary rounded-br-[50px] shadow-xl' >
                <View className='w-full flex flex-row justify-between '>
                    <Text className=' text-white text-xl font-bold w-[50%]'>Find and order your favorite Dish</Text>
                    <View className='w-[50%] flex flex-row justify-end gap-x-8'>
                        <TouchableOpacity className='w-10 h-10 rounded-full flex flex-row justify-center items-center bg-white'>
                            <MaterialIcons name="coffee-maker" size={25} color="#f7941d" />
                        </TouchableOpacity>
                        <TouchableOpacity className='w-10 h-10 rounded-full flex flex-row justify-center items-center bg-white'>
                            <MaterialIcons name="soup-kitchen" size={25} color="#f7941d" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View className='w-full flex flex-row items-center justify-between'>
                    <View className='w-5/6 h-20' >
                        <CustomField placeHolder='Search Your favorite meal' className='bg-primary' value={searchField} handleChange={(e) => handleChange(e)} />
                    </View>
                    <TouchableOpacity className='w-10 h-10 rounded-xl flex flex-row justify-center items-center bg-primary'>
                        <FontAwesome6 name='arrow-right-arrow-left' color={"#ffffff"} size={25} />
                    </TouchableOpacity>
                </View> */}
            </View>

            <FlatList

                onEndReachedThreshold={0.5}
                data={items}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={renderItem}
                className='h-[65%] absolute mt-52'
                scrollsToTop={true}
                showsVerticalScrollIndicator={false}
            />


        </SafeAreaView>
    )
}

export default HomeTab