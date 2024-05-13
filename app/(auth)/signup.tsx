import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CustomField from '@/components/Inputs/InputField'
import CustomButton from '@/components/Button'
import { Link } from 'expo-router'
import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons'

const signup = () => {
    const [form, setForm] = useState({
        username: "",
        phoneNumber: "",
        email: ""
    })
    return (
        <View className='w-full px-6 flex flex-col gap-y-2'>
            <Text className='text-blue-100 text-center text-xl font-semibold'>Welcome{" "}...</Text>
            <Text className='text-gray-100 font-medium text-md text-center py-3'>Please fill in the information</Text>
            <View className='flex flex-col pb-2'>
                <CustomField icon={<Ionicons color={"#a6adc0"} name='person' size={20} />} handleChange={(e: any) => setForm({ ...form, username: e })} value={form.username} placeHolder='Full Name' />
                <CustomField icon={<AntDesign color={"#a6adc0"} name='phone' size={20} />} handleChange={(e: any) => setForm({ ...form, phoneNumber: e })} value={form.phoneNumber} placeHolder='Phone Number' keyboardType='phone-pad' />
                <CustomField icon={<FontAwesome5 color={"#a6adc0"} name='envelope' size={20} />} handleChange={(e: any) => setForm({ ...form, email: e })} value={form.email} placeHolder='Your Email' secureTextEntry={true} keyboardType='email-address' />
            </View>
            <CustomButton text='Proceed' textStyles='text-white text-center text-lg font-semibold' className="font-medium  bg-primary rounded-xl w-full" onPress={() => { }} />
            <View className='flex flex-row justify-evenly items-center gap-x-4'>
                <View className='w-[45%] h-[0.7px] bg-gray-200' />
                <Text className='text-gray-200 text-lg font-medium'>OR</Text>
                <View className='w-[45%] h-[0.7px] bg-gray-200' />
            </View>
            <CustomButton text='Sign In' textStyles='text-white text-center text-lg font-semibold' className="font-medium  bg-primary rounded-xl w-full" onPress={() => { }} />
            <Text className='text-center text-gray-100 text-lg'>If you have a PMG account</Text>
            <View className='flex flex-row justify-center gap-x-1'>
                <Text className='text-gray-100 text-lg '>Already have an account?</Text>
                <Link href={"/qrCode"} className='text-primary font-medium text-lg '>Login</Link>
            </View>

        </View>
    )
}

export default signup