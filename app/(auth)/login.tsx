import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import CustomButton from '@/components/Button'
import CustomField from '@/components/Inputs/InputField'
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    return (
        <View className='w-full px-6 flex flex-col gap-y-4'>
            <Text className='text-blue-100 text-center text-xl font-semibold'>Welcome{" "}...</Text>
            <Text className='text-gray-100 font-medium text-md text-center py-3'>Please fill in the information</Text>
            <View className='flex flex-col pb-5'>
                <CustomField icon={<Ionicons color={"#a6adc0"} name='chatbox' size={20} />} handleChange={(e: any) => setForm({ ...form, email: e })} value={form.email} placeHolder='Your Email' keyboardType='email-address' />
                <CustomField icon={<Ionicons color={"#a6adc0"} name='lock-closed' size={20} />} handleChange={(e: any) => setForm({ ...form, password: e })} value={form.password} placeHolder='Password' secureTextEntry={true} />
            </View>
            <CustomButton text='Sign In' textStyles='text-white text-center text-lg font-semibold' className="font-medium  bg-primary rounded-xl w-full" onPress={() => { }} />
            <Link href={"/signup"} className='text-primary font-medium text-lg text-center'>Forgot password</Link>
            <View className='flex flex-row justify-center gap-x-1'>
                <Text className='text-gray-100 text-lg '>Don&apos; have an account?</Text>
                <Link href={"/signup"} className='text-primary font-medium text-lg '>Register</Link>
            </View>

        </View>
    )
}

export default Login