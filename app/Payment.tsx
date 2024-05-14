import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const Payment = () => {
    return (
        <SafeAreaView className='h-full bg-white px-2'>
            <View className='flex-1 flex flex-col pt-12 rounded-xl bg-white  h-36'>
                <View className='flex flex-row flex-1  w-full bg-white my-2 pl-4'>
                    <View className='bg-[#f7f7fa] w-10 h-10 rounded-md flex items-center justify-center'>
                        <AntDesign name='arrowleft' size={25} color={"#25d482"} />
                    </View>
                </View>
            </View>
            <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </SafeAreaView>
    )
}

export default Payment