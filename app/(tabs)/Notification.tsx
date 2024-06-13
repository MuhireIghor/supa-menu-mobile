import { View, Text, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native';
import { getUserProfile } from '@/services/role.service';
import AntDesign from '@expo/vector-icons/AntDesign';
import { logout } from '@/redux/slices/userSlice';

const NotificationTab = () => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});
    const [error, setEror] = useState("");
    const user = useSelector((state: any) => state.users.user);
    useEffect(() => {
        const getProfile = async () => {
            try {
                const userProfile = await getUserProfile(user.id);
                setProfile(userProfile.data);
                console.log(userProfile, "user profile")
            }
            catch (err: any) {
                setEror(err.message)
            }

        }
        getProfile()

    }, [user])
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <SafeAreaView className='h-[87%] '>
            <View className='w-full shadow-md rounded-md flex-1 bg-white h-full pt-20 px-4'>
                <View className='w-full flex  items-center'>
                    <View className='w-16 h-16 rounded-full bg-primary flex justify-center items-center'>
                        <Text className='text-3xl'>{(user.email as unknown as string).substring(0, 1).toUpperCase()}{(user.email as unknown as string).substring(2, 3).toUpperCase()}</Text>
                    </View>
                </View>
                <View className='w-full flex flex-col px-6 py-4 bg-white shadow-md shadow-gray-100 mt-6'>
                    <View className='flex flex-row gap-x-8'>
                        <Text className='text-lg font-semibold'>Username:</Text>
                        <Text className='text-black text-lg'>{(profile as unknown as any).username}</Text>
                    </View>
                    <View className='flex flex-row gap-x-8'>
                        <Text className='text-lg font-semibold'>Email:</Text>
                        <Text className='text-black text-lg'>{(profile as unknown as any).email}</Text>
                    </View>
                    <View className='flex flex-row gap-x-8'>
                        <Text className='text-lg font-semibold'>Role:</Text>
                        <Text className='text-black text-lg'>{(profile as unknown as any).role?.name??"No role"}</Text>
                    </View>

                </View>
                <View className='w-full flex items-center'>
                    <Pressable onPress={handleLogout} className='flex justify-center items-center bg-red-500 rounded-lg p-4'>
                        <AntDesign name="logout" size={24} color="black" />
                    </Pressable>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default NotificationTab