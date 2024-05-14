import { FC } from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

interface IButtonProps {
    otherStyle?: string;
    onPress: () => void;
    text: string;
    icon?: any;
    textStyles?: string;
}
const CustomButton: FC<IButtonProps> = (prop) => {

    return (
        <TouchableOpacity className={`${prop.otherStyle} w-full bg-primary p-2 rounded-lg`} onPress={prop.onPress} >
            <Text className={prop.textStyles}>{prop.text}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton;
export const Button: FC<IButtonProps> = (prop) => {
    return (
        <Pressable className={prop.otherStyle} onPress={prop.onPress} >
            {
                prop.icon
            }
            <Text className={prop.textStyles}>{prop.text}</Text>
        </Pressable >
    )
}