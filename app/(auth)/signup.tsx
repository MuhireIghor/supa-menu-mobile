import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '@/components/Button'
import { Link, router } from 'expo-router'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Resolver, SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signUp } from '@/services/auth.service'
import Toast from 'react-native-toast-message';

const signup = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    type SignInputs = {
        username: string
        phoneNumber: string
        email: string
        password: string


    }

    const validationSchema = Yup.object({
        username: Yup.string().min(5, "Username must be 6 characters at least").required("Username is required please"),
        phoneNumber: Yup.string().required("Phone number is required").matches(/^(\+|00)?\d{1,3}?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, {
            message: "Phone number must have optional 3 digit for country code and 7 to 15 unique number"
        }),
        email: Yup.string().email("This must be a valid email").required("Email is required"),
        password: Yup.string().matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/, { message: "Password must have at least 6 characters, one symbol, one number, and one uppercase letter." }).required("Passowrd is required")


    })
    const { control, handleSubmit, formState: { errors } } = useForm<SignInputs>(
        {
            resolver: yupResolver(validationSchema) as Resolver<SignInputs, any>,
            mode: "onBlur"
        }
    )
    const onSubmit: SubmitHandler<SignInputs> = async (data) => {
        try {
            await signUp(dispatch, setLoading, { email: data.email, password: data.password, phoneNumber: data.phoneNumber, username: data.username });
            Toast.show(
                {
                    type: "success",
                    text1: "User logged in successfully",
                    autoHide: true

                }
            )
            router.push("/login")
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
        <SafeAreaView className='w-full h-full px-6 flex flex-col gap-y-2' >

            <Text className='text-blue-100 text-center text-xl font-semibold'>Welcome{" "}...</Text>
            <Text className='text-gray-100 font-medium text-md text-center py-3'>Please fill in the information</Text>
            <View className='flex flex-col pb-5'>
                <View className={`"bg-white w-full border-[0.6px]   border-gray-100 rounded flex-row items-center gap-x-1 my-1 `}>
                    {
                        <View className="p-2">
                            <Ionicons color={"#a6adc0"} name='person' size={20} />
                        </View>
                    }
                    <Controller

                        control={control}
                        name="username"
                        render={
                            ({ field: { onBlur, value, onChange } }) => (
                                <TextInput
                                    keyboardType={"default"}
                                    secureTextEntry={false}
                                    placeholder={"Full name"}
                                    onChangeText={value => onChange(value)}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor={"#979fb6"}
                                    onBlur={onBlur}
                                    value={value}

                                />
                            )
                        }
                    />
                </View>
                {errors.phoneNumber &&
                    <Text className='text-red-500 font-light text-sm'>{errors.phoneNumber?.message}</Text>}
                <View className={`"bg-white w-full border-[0.6px]   border-gray-100 rounded flex-row items-center gap-x-1 my-1 `}>
                    {
                        <View className="p-2">
                            <AntDesign color={"#a6adc0"} name='phone' size={20} />
                        </View>
                    }
                    <Controller
                        control={control}
                        name="phoneNumber"
                        render={
                            ({ field: { onBlur, value, onChange } }) => (
                                <TextInput
                                    className="p-2 "
                                    keyboardType={"phone-pad"}
                                    secureTextEntry={false}
                                    placeholder={"Phone Number"}
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
                {errors.username &&
                    <Text className='text-red-500 font-light text-sm'>{errors.username?.message}</Text>}
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

                                />


                            )
                        }

                    />

                </View>
                {errors.phoneNumber &&
                    <Text className='text-red-500 font-light text-sm'>{errors.phoneNumber?.message}</Text>}
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
            <CustomButton isLoading={loading} text='Proceed' textStyles='text-white text-center text-lg font-semibold' otherStyle="font-medium  bg-primary rounded-xl w-full" onPress={handleSubmit(onSubmit)} />
            <View className='flex flex-row justify-evenly items-center gap-x-4'>
                <View className='w-[45%] h-[0.7px] bg-gray-200' />
                <Text className='text-gray-200 text-lg font-medium'>OR</Text>
                <View className='w-[45%] h-[0.7px] bg-gray-200' />
            </View>
            <CustomButton text='Sign In' textStyles='text-white text-center text-lg font-semibold' otherStyle="font-medium  bg-primary rounded-xl w-full" onPress={() => { }} />
            <Text className='text-center text-gray-100 text-lg'>If you have a PMG account</Text>
            <View className='flex flex-row justify-center gap-x-1'>
                <Text className='text-gray-100 text-lg '>Already have an account?</Text>
                <Link href={"/qrCode"} className='text-primary font-medium text-lg '>Login</Link>
            </View>


        </SafeAreaView>
    )
}

export default signup