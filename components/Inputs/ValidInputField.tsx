import { FC } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { KeyboardType, TextInput, View } from "react-native";

interface ICustomValidationFieldProps {
    className?: string;
    icon?: any;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
    placeHolder?: string;
    register: UseFormRegisterReturn;

}
const CustomFieldWithValidation: FC<ICustomValidationFieldProps> = (prop) => {
    const { register, icon, className, keyboardType, secureTextEntry, placeHolder } = prop;
    return (
        <View className={`"bg-white w-full border-[0.6px]   border-gray-100 rounded flex-row items-center gap-x-1 my-1 ${className}`}>
            {
            icon && <View className="p-2">{icon}</View>
            }
            <TextInput
                className="p-2 "
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                underlineColorAndroid="transparent"
                placeholderTextColor={"#979fb6"}
                {...register}

            />
        </View>
    )
}
export default CustomFieldWithValidation;