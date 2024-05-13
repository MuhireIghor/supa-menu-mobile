import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchComponent from '@/components/SearchField'
import { router } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const QrCodeComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        setTimeout(() => {
            router.push("/home")
        }, 3000)
    }, [])
    return (
        <SafeAreaView className='h-full bg-primary pt-32 px-8'>
            <View className='bg-white rounded-2xl px-4 flex flex-row items-center'>
                <AntDesign name='search1' size={22} className='text-primary' color={"#f7941d"} />
                <SearchComponent value={searchQuery} handleChange={(e: any) => setSearchQuery(e)} placeHolder='Search for your preferred restaurant' />
            </View>
            <View className='w-full h-[30%] flex items-center justify-center'>
                <Text className='text-blue-200 text-3xl font-semibold'>or</Text>
            </View>
            <View className='flex justify-start h-[30%] items-center py-10'>
                <Ionicons name='qr-code' size={100} />
            </View>
            <View className='flex-1 flex-row justify-center'>
                <Text className='text-blue-200 text-2xl leading-10 font-semibold'>Scan, Pay & Enjoy!</Text>
            </View>

            <StatusBar backgroundColor={"#f7941d"} barStyle={"dark-content"} />
        </SafeAreaView>
    )
}

export default QrCodeComponent