import { Slot, Stack } from "expo-router"
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const AuthLayout = () => {
    return (
        <>

            <SafeAreaView className="h-full bg-primary pt-[20%]">
                <View className="bg-white h-full rounded-t-3xl">
                    <View className="flex flex-row gap-x-[1px] justify-center pt-12 pb-6">
                        <Text className="text-black font-extrabold text-4xl">SUPA</Text>
                        <Text className="text-primary font-extrabold text-4xl">MENU</Text>
                    </View>
                    <Slot />
                </View>
                <StatusBar backgroundColor="#f7941d" barStyle={"dark-content"} />
            </SafeAreaView>
        </>
    )
}
export default AuthLayout;
