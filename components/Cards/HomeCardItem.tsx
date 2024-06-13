import { View, Text, Image, ImageSourcePropType, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { router } from 'expo-router';
import { AntDesign, Entypo } from '@expo/vector-icons';
export interface IRestaurantCardProp {
    id: string;
    image: ImageSourcePropType;
    location: string;
    category: string[]
}

const HomeCardItem: FC<IRestaurantCardProp> = (prop) => {
    const [count, setCount] = useState<number>(1);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isInCart, setIsIncart] = useState<boolean>(false);

    return (
        <TouchableOpacity style={{ elevation: 1 }} activeOpacity={0.8} onPress={() => { }} className='w-[97%] rounded-2xl border border-[#fff6f7] left-3 flex flex-col shadow-2xl  pb-2 my-2 mx-auto bg-[#fff6f7]'>
            <Image source={prop.image} className='w-[100%] h-44 rounded-2xl flex' resizeMode='cover' />
            <View className='flex flex-col gap-y-3 pb-4 px-2 mt-4'>
                <Text className='text-gray-200 font-semibold text-md'>Choose {prop.location}</Text>
                <View className='flex flex-row'>
                    {prop.category.map((category, index) => {
                        return (
                            <Text key={index} className=''>{category}{index + 1 != prop.category.length && <Text>, </Text>} </Text>
                        )
                    })}
                </View>

                <View className='w-full flex flex-row justify-between'>
                    <Text className='text-gray-200 flex-1'>Located Rwanda</Text>
                    <View className="flex-1  flex-row gap-x-2 justify-center">
                        {[1, 2, 3, 4, 5].map((item: any, index: any) => {
                            return (
                                <Pressable onPress={() => setCount(index + 1)} key={index}>
                                    {index >= count ?
                                        <Entypo color={"#f7941d"} name={'star-outlined'} size={15} />
                                        :
                                        <AntDesign color={"#f7941d"} name={'star'} size={15} />


                                    }

                                </Pressable>
                            )
                        })}
                    </View>
                </View>
                <View className='w-full flex flex-row justify-end '>
                    <View className='w-1/2 flex flex-row justify-between px-10'>
                        <TouchableOpacity onPress={() => setIsIncart((prev) => !prev)}>
                            {

                                <AntDesign name='shoppingcart' color={"#f7941d"} style={{ color: `${isInCart ? "#f7941d" : "#000000"}` }} size={25} />

                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsLiked((prev) => !prev)}>
                            {
                                isLiked ?
                                    <AntDesign name='heart' color={"#f7941d"} size={25} />

                                    :
                                    <Entypo name='heart-outlined' color={"#f7941d"} size={25} />

                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeCardItem;