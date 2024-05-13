import { router } from "expo-router";
import { FC, useState } from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export interface ICartItemProp {
    id: string;
    ingredients: string[];
    itemName: string;
    unitPrice: number;
    image: ImageSourcePropType;
}

const CartItem: FC<ICartItemProp> = (prop) => {
    const [quantity, setQuantity] = useState<number>(0);
    const handleIncrease = () => {
        setQuantity((prev) => prev + 1)
    }
    const handleDecrease = () => {
        setQuantity((prev) => prev - 1)
    }
    return (
        <SafeAreaView>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { router.push("/chooseDestination") }} className=' w-full flex flex-row gap-x-4 items-center bg-gray-300 rounded-xl p-2 my-2 mx-auto '>
                <Image source={prop.image} className='w-20 h-20 rounded-xl' resizeMode='contain' />
                <View className='flex flex-col w-full'>
                    <View className='w-[90%]overflow-x-scroll flex flex-row '>
                        {prop.ingredients.map((ingredient, index) => {
                            return (
                                <Text key={index} className=''>{ingredient}{index + 1 != prop.ingredients.length && <Text>, </Text>} </Text>
                            )
                        })}
                    </View>
                    <View className="flex flex-row gap-x-1">
                        <Text className="font-medium text-black">{prop.itemName} -</Text>
                        <Text className="font-medium text-black">{prop.unitPrice}</Text>
                    </View>
                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-primary text-lg font-semibold">Frw {prop.unitPrice * quantity}</Text>
                        <View className="bg-[red] p-3  rounded-md flex flex-row justify-around items-center">
                            <TouchableOpacity onPress={handleDecrease} ><Text className="text-primary text-lg">-</Text></TouchableOpacity>
                            <Text className="text-lg text-black font-semibold">{quantity}</Text>
                            <TouchableOpacity onPress={handleIncrease} ><Text className="text-primary text-lg">+</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>
            </TouchableOpacity> 
        </SafeAreaView>
    )

}
export default CartItem;