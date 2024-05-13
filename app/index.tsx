import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = ()=>{
  useEffect(() => {
    setTimeout(() => {
      // console.log("wow")
      router.replace("/login")
    }, 3000);
  },[])
  return (
<SafeAreaView  className="h-full bg-primary flex items-center justify-center" >
  <View className="flex flex-row gap-x-[1px] ">
    <Text className="text-black font-extrabold text-4xl">SUPA</Text>
    <Text className="text-white font-extrabold text-4xl">MENU</Text>
  </View>
<StatusBar backgroundColor="#000000" barStyle={"light-content"}/>
</SafeAreaView>
  )
}
export default SplashScreen;
