import { FC } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface IProps {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const IconButton: FC<IProps> = ({ onPress, style, icon, color = '#fff' }) => (
  <View style={ [styles.container, style] }>
    <Pressable onPress={ onPress }>
      <Ionicons name={ icon } size={ 24 } color={ color } />
    </Pressable>
  </View>
);