import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
const ChooseDestination = () => {
    const options = [
        "Appetizer", "Starter", "Main", "Desert", "Drink"
    ]
    return (
        <SafeAreaView className='h-full bg-black pt-28'>
            <View className='flex flex-row justify-center items-center'>
                <Text className='text-primary text-2xl font-bold'>Choose Kigali</Text>
            </View>
            <View className='w-full flex flex-row gap-x-4 pt-20 pb-20'>
                <View className='w-[49%] flex flex-col gap-y-6 items-center'>
                    <View className='flex flex-row items-center justify-center gap-x-4'>
                        <MaterialCommunityIcons name="routes" size={40} color="#f7941d" />
                        <Text className='text-xl text-white font-light'>N8</Text>
                    </View>
                    <Text className='text-3xl font-semibold text-white'>Ordered</Text>
                </View>
                <View className='h-28 w-[1px] bg-primary' />
                <View className='w-[49%] flex flex-col gap-y-6 items-center'>
                    <View className='flex flex-row items-center justify-center gap-x-4'>
                        <FontAwesome5 name="toilet-paper" size={40} color="#f7941d" />
                    </View>
                    <Text className='text-2xl text-white font-light'>Call Waiter</Text>
                </View>
            </View>
            <View className='py-4 flex flex-row justify-center'>
                <Text className='text-2xl font-bold text-primary '>Menu</Text>
            </View>
            <View className='px-16 flex justify-center items-center'>
                {options.map((option, index) => {
                    return (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/Cart")} key={index} className='w-full flex flex-row justify-between items-center py-2'>
                            <Text className='text-white text-2xl font-light'>{option}</Text>
                            <Ionicons name='arrow-forward' size={20} color={"#fff"} />
                        </TouchableOpacity>
                    )
                })}
            </View>

        </SafeAreaView>
    )
}

export default ChooseDestination