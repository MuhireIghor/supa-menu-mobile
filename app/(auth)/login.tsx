import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import CustomButton from '@/components/Button'
import CustomField from '@/components/Inputs/InputField'
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Controller, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/services/auth.service';
import Toast from 'react-native-toast-message';

const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const validationSchema = Yup.object({
        email: Yup.string().email("Please provide a valid email").required("Email is required"),
        password: Yup.string().matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/, { message: "Password must have at least 6 characters, one symbol, one number, and one uppercase letter." }).required("Passowrd is required")
    })
    type loginInput = {
        email: string,
        password: string
    }
    const {
        control, handleSubmit, formState: { errors }
    } = useForm<loginInput>(
        {
            resolver: yupResolver(validationSchema) as Resolver<loginInput, any>,
            mode: "onBlur"
        }
    )
    const onSubmit: SubmitHandler<loginInput> = async (data) => {
        try {
            await loginUser(dispatch, setLoading, { email: data.email, password: data.password });
            Toast.show(
                {
                    type: "success",
                    text1: "User logged in successfully",
                    autoHide: true

                }
            )
            router.push("/(tabs)/Notification")
        }
        catch (err) {
            Toast.show({

                type: "error",
                text1: "Error occured during login!",
                text2: "Check your credentials and input valid inputs"
            })
            console.log(err)
        }

    }
    return (
        <View className='w-full px-6 flex flex-col gap-y-4'>
            <Text className='text-blue-100 text-center text-xl font-semibold'>Welcome{" "}...</Text>
            <Text className='text-gray-100 font-medium text-md text-center py-3'>Please fill in the information</Text>
            <View className='flex flex-col pb-5'>

                <View className={`"bg-white w-full border-[0.6px]   border-gray-100 rounded flex-row items-center gap-x-1 my-1 `}>
                    {
                        <View className="p-2">
                            <FontAwesome5 color={"#a6adc0"} name='envelope' size={20} />
                        </View>
                    }
                    <Controller
                        control={control}
                        name="email"
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className="p-2 "
                                    keyboardType={"email-address"}
                                    secureTextEntry={false}
                                    placeholder={"Your email"}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor={"#979fb6"}
                                    onChangeText={value => onChange(value)}
                                    onBlur={onBlur}
                                    value={value}
                                    autoCapitalize='none'

                                />


                            )
                        }

                    />

                </View>
                {errors.email &&
                    <Text className='text-red-500 font-light text-sm'>{errors.email?.message}</Text>}
                <View className={`"bg-white w-full border-[0.6px]   border-gray-100 rounded flex-row items-center gap-x-1 my-1`}>
                    {/* {
                        icon && <View className="p-2">{icon}</View>
                    } */}
                    <View className="p-2">
                        <FontAwesome5 color={"#a6adc0"} name='envelope' size={20} />
                    </View>
                    <Controller
                        control={control}
                        name="password"
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextInput
                                    className="p-2 "
                                    keyboardType={'default'}
                                    secureTextEntry={true}
                                    placeholder={'Your password'}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor={"#979fb6"}
                                    onChangeText={value => onChange(value)}
                                    onBlur={onBlur}
                                    value={value}

                                />


                            )
                        }

                    />

                </View>
                {errors.password &&
                    <Text className='text-red-500 font-light text-sm'>{errors.password?.message}</Text>
                }


            </View>
            <CustomButton onPress={handleSubmit(onSubmit)} text='Sign In' textStyles='text-white text-center text-lg font-semibold' otherStyle="font-medium  bg-primary rounded-xl w-full" />
            <Link href={"/signup"} className='text-primary font-medium text-lg text-center'>Forgot password</Link>
            <View className='flex flex-row justify-center gap-x-1'>
                <Text className='text-gray-100 text-lg '>Don&apos; have an account?</Text>
                <Link href={"/signup"} className='text-primary font-medium text-lg '>Register</Link>
            </View>

        </View>
    )
}

export default Login