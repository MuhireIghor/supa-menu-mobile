import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const RatingScreen = () => {
    const [count, setCount] = useState<number>(1)

    return (
        <SafeAreaView className="h-full bg-black p-8">
            <View className="flex flex-col gap-y-24 pt-20">
                <View>
                    <Text className="text-primary font-bold text-lg text-center">Yayy!</Text>
                    <Text className="text-primary font-bold text-lg text-center">We value all feedback,</Text>
                    <Text className="text-primary font-bold text-lg text-center">Please rate your experience</Text>
                    <Text className="text-primary font-bold text-lg text-center">below:</Text>
                </View>
                <View className="flex flex-row gap-x-6 justify-center">
                    {[1, 2, 3, 4, 5].map((item: any, index: any) => {
                        return (
                            <Pressable onPress={() => setCount(index + 1)} key={index}>

                                <AntDesign color={index >= count ? '#ffffff':"#f7941d"  } name={'star'} size={25} />

                            </Pressable>
                        )
                    })}
                </View>
                <View>
                    <Text className="text-primary font-bold text-lg text-center">Thank you for helping us</Text>
                    <Text className="text-primary font-bold text-lg text-center">Improve our service !</Text>
                </View>
                <View className="flex flex-row justify-center ">
                    <Text className="text-white font-extrabold text-4xl">SUPA</Text>
                    <Text className="text-primary font-extrabold text-4xl">MENU</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}
export default RatingScreen;