import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import cash from "@/assets/images/cash.jpg"
import CustomButton, { Button } from '@/components/Button'
import MobileProviderComponent, { IMobileProviderProps } from '@/components/Cards/MobileProvider'
import mtn from "@/assets/images/mtn.png";
import airtel from "@/assets/images/airtel.jpg";
import { router } from 'expo-router'


const Payment = () => {
    const [providers, setProviders] = useState<IMobileProviderProps[]>([
        {
            image: mtn,
            serviceProvider: "MTN Mobile Money"
        },
        {
            image: airtel,
            serviceProvider: "Airtel Money"
        },
        {
            image: cash,
            serviceProvider: "Cash"
        }
    ])
    return (
        <SafeAreaView className='bg-white px-2'>
            <View className='flex flex-row flex-1  w-full bg-white my-2  pt-10 pb-8'>
                <View className='bg-[#f7f7fa] w-10 h-10 rounded-md flex items-center justify-center'>
                    <AntDesign name='arrowleft' size={25} color={"#25d482"} />
                </View>
            </View>
            <View className='h-full  shadow-md gap-y-5  shadow-green-100 py-2'>
                <View className='w-full flex flex-row  justify-between items-center'>
                    <View className='flex flex-row  items-center'>
                        <Text className='text-black text-2xl font-bold'>Checkout</Text>
                        <Image source={cash} resizeMode='contain' className='w-16 h-16' />
                    </View>
                    <View className='flex flex-col items-center'>
                        <Text className='text-green-100 text-2xl font-bold'>Frw 16,000</Text>
                        <Text className='text-gray-200 text-md font-light '>Including VAT (18%)</Text>
                    </View>

                </View>
                <View className='w-full flex flex-row items-center'>
                    <Button onPress={() => { }} text='Credit Card' otherStyle='bg-white rounded-xl  p-1 h-[60px] shadow-lg w-1/2 flex justify-center items-center shadow-2xl shadow-green-100' textStyles='text-black text-xl font-medium' />
                    <Button onPress={() => { }} text='Mobile & Cash' otherStyle='bg-green-100 rounded-xl h-[66px] p-1 flex justify-center items-center  w-1/2 -z-20 -left-4' textStyles='text-white text-xl font-medium' />
                </View>
                <View>
                    {
                        providers.map((provider, index) => {
                            return <MobileProviderComponent key={index} {...provider} />
                        })
                    }
                </View>

                <Text className='text-center text-gray-200 text-sm px-[12%]'>We will send you an order details to your email after the successfull payment.</Text>
                <View className='flex flex-1 w-full'>
                    <Button icon={<AntDesign name='lock' color={"#ffffff"} size={25} />} text='Pay for the order' otherStyle='bg-green-100 rounded-lg h-[50px]  flex flex-row justify-center w-full gap-x-2 mx-auto items-center ' onPress={() => router.push("/paymentConfirmation")} textStyles='text-white text-xl font-bold' />
                </View>
            </View>
            <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </SafeAreaView>
    )
}

export default Payment