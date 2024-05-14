import { FC } from "react";
import { Image, ImageSourcePropType, Pressable, Text } from "react-native";
export interface IMobileProviderProps {
    image: ImageSourcePropType;
    serviceProvider: string;
}
const MobileProviderComponent: FC<IMobileProviderProps> = (prop) => {
    return (
        <Pressable  className="flex flex-row justify-between items-center py-3 w-3/4 mx-auto">
            <Image className="w-20 h-20" resizeMode="contain" source={prop.image} />
            <Text className="text-black text-md">{prop.serviceProvider}</Text>
        </Pressable>
    )

}
export default MobileProviderComponent;