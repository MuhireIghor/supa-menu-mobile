import { View, Text, TextInput, KeyboardType } from 'react-native'
import React, { FC } from 'react'

interface ICustomSearchFieldProps {
    className?: string;
    handleChange: (e: any) => void;
    icon?: any;
    value: string;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
    placeHolder?: string;

}
const SearchComponent: FC<ICustomSearchFieldProps> = (prop) => {
    return (
        <View className='w-full'>

            <TextInput
                className="p-1"
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

export default SearchComponent