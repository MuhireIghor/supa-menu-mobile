// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Entypo, Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export enum TabBarIconType {
  ANT_DESIGN = "antDesign",
  Ionicons = "Ionicons",
  ENTYPO = "entypo",
  FONTAWESOME = "fontawesome"

}
export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']> | any) {
  if (rest.designCategory === TabBarIconType.ANT_DESIGN) {
    return <AntDesign size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }
  if (rest.designCategory === TabBarIconType.ENTYPO) {
    return <Entypo size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }
  if (rest.designCategory === TabBarIconType.FONTAWESOME) {
    return <FontAwesome5 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
