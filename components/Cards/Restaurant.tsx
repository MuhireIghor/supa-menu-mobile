import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { router } from 'expo-router';
export interface IRestaurantCardProp {
    id: string;
    image: ImageSourcePropType;
    location: string;
    category: string[]
}

const RestaurantCard: FC<IRestaurantCardProp> = (prop) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => { router.push("/chooseDestination") }} className='w-[95%] flex flex-row gap-x-4 items-center bg-gray-300 rounded-xl p-2 my-2 mx-auto'>
            <Image source={prop.image} className='w-20 h-20 rounded-xl' resizeMode='contain' />
            <View className='flex flex-col '>
                <Text className='text-gray-200 font-semibold text-md'>Choose {prop.location}</Text>
                <View className='flex flex-row'>
                    {prop.category.map((category, index) => {
                        return (
                            <Text key={index} className=''>{category}{index + 1 != prop.category.length && <Text>, </Text>} </Text>
                        )
                    })}
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard