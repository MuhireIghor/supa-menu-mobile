import { FC } from "react";
import { KeyboardType, TextInput, View } from "react-native";

interface ICustonFieldProps {
    className?: string;
    handleChange: (e: any) => void;
    icon?: any;
    value: string;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
    placeHolder?: string;

}
const CustomField: FC<ICustonFieldProps> = (prop) => {
    return (
        <View className={`"bg-white w-full border-[0.6px]  border-gray-100 rounded flex-row items-center gap-x-1 my-4 ${prop.className}`}>
            {
                prop.icon && <View className="p-2">{prop.icon}</View>
            }
            <TextInput
                className="p-2"
                onChangeText={prop.handleChange}
                value={prop.value}
                keyboardType={prop.keyboardType}
                secureTextEntry={prop.secureTextEntry}
                placeholder={prop.placeHolder}
                underlineColorAndroid="transparent"
                placeholderTextColor={"#979fb6"}

            />
        </View>
    )

}
export default CustomField;