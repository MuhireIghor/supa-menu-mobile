import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

interface IButtonProps {
    className?: string;
    onPress: () => void;
    text: string;
    icon?: any;
    textStyles?: string;
}
const CustomButton: FC<IButtonProps> = (prop) => {

    return (
        <TouchableOpacity className={`${prop.className} w-full bg-primary p-2 rounded-lg`} onPress={prop.onPress} >
            <Text className={prop.textStyles}>{prop.text}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton; 