import React from 'react';

import { Text, TouchableHighlight, View } from 'react-native';

import { styles } from './style';
import { ButtonType } from './types';

export default function Button({ children, onPress }: ButtonType) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor={'#292829'}>
      <View style={styles.buttonLabel}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}
