import { View, Text, FlatList, ListRenderItem } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartItem, { ICartItemProp } from '@/components/Cards/CartItem';
import Food from "@/assets/food.jpeg"
import { IRestaurantCardProp } from '@/components/Cards/Restaurant';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/Button';

const CartTab = () => {
    const [items, setItems] = useState<ICartItemProp[]>([
        {
            id: "1",
            image: Food,
            ingredients: ["Kaffir Lime", "Vodka", "Lemongrass", "Ginger", "Citrus"],
            itemName: "Tom Yummy",
            unitPrice: 2500

        },
        {
            id: "2",
            image: Food,
            ingredients: ["Gin", "Grenadine", "Citrus", "Cucumber"],
            itemName: "Singapore Sling",
            unitPrice: 2500

        },
        {
            id: "3",
            image: Food,
            ingredients: ["Vanilla", "Coffee and Chocolate with hints of orange"],
            itemName: "White Russian",
            unitPrice: 2500

        }
    ]);
    const renderItem: ListRenderItem<ICartItemProp> = ({ item }) => (

        <CartItem {...item} />
    )
    return (
        <SafeAreaView className='h-full bg-white p-2'>
            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <View className='w-full flex flex-row justify-end mt-6'>
                            <View className='flex flex-col p-4'>
                                <Text className='font-semibold text-2xl text-blue-200 pl-6 '>Choose Kigali</Text>
                                <Text className='text-2xl font-light text-primary pl-6'>Drinks</Text>
                            </View>
                        </View>
                    )
                }}
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                className='h-[95%] absolute '


                ListFooterComponent={() => {
                    return (
                        <View className='w-full flex flex-col gap-y-2 px-4 pb-20'>
                            <View className='flex flex-row justify-center'>
                                <View className='flex flex-row gap-x-1 items-center'>
                                    <Text className='text-xl text-primary font-bold'>more drinks</Text>
                                    <Ionicons name='arrow-forward' size={16} color={"#f7941d"} />
                                </View>
                            </View>
                            <View className='w-full flex flex-row justify-between'>
                                <Text className='text-blue-200 text-xl font-seimbold'>Total</Text>

                            </View>
                            <View>
                                <CustomButton onPress={() => router.push("/Payment")} text='Proceed to checkout' textStyles='text-white p-2 text-center text-lg' otherStyle='py-8 rounded-2xl' />
                            </View>
                       

                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default CartTab