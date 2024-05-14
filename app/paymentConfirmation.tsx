import { Image, Pressable, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import BotAPp from "@/assets/images/botApp.png"
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/Button";
import { router } from "expo-router";

const PaymentConfirmationScreen = () => {
    return (

        <SafeAreaView className="h-full bg-black p-8">
            <ScrollView>

                <Image source={BotAPp} resizeMode="cover" className="w-60 h-52 mx-auto my-8" />
                <View className="flex flex-col gap-y-4 mt-8">

                    <View className="h-auto py-4">
                        <Text className="text-center text-primary text-xl font-bold">Payment Success, Yayy!</Text>
                    </View>
                    <Text className="w-full flex flex-wrap text-white text-lg tracking-wide font-light">We will send order details and invoice in your contact no. and registered email</Text>
                    <View className="w-full flex flex-row  justify-center items-center gap-x-4 py-4 mb-4">
                        <Text className="text-primary-tint text-xl">
                            Check Details
                        </Text>
                        <Ionicons color={"#d98155"} size={20} name="arrow-forward" />
                    </View>
                    <View className="mb-6">
                        <CustomButton textStyles='text-white p-1 text-center text-lg font-bold' text="Download Invoice" onPress={() => router.push("/Rating")} />
                    </View>
                    <View className="flex flex-row justify-center ">
                        <Text className="text-white font-extrabold text-4xl">SUPA</Text>
                        <Text className="text-primary font-extrabold text-4xl">MENU</Text>
                    </View>
                </View>
                <StatusBar backgroundColor="#000000" style="light" />
            </ScrollView>
        </SafeAreaView>
    )

}
export default PaymentConfirmationScreen;