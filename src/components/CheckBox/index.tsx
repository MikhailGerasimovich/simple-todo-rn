import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { icons } from '../../constants';
import { CheckBoxType } from './types';

export default function CheckBox({
  state,
  onPress,
}: CheckBoxType): React.JSX.Element {
  const [isCheck, setIsCheck] = useState(false);

  function handleCheck() {
    onPress();
    setIsCheck(prev => !prev);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheck}>
      {isCheck && <Image style={styles.tick} source={icons.tick} />}
    </TouchableOpacity>
  );
}
