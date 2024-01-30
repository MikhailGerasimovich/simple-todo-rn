import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { PressableTodoType } from './types';
import { styles } from './style';
import CheckBox from '../CheckBox';
import { colors } from '../../constants';

export function TodoItem({
  title,
  description,
  isDone,
  onPress,
  onLongPress,
  onPressCheckBox,
}: PressableTodoType): React.JSX.Element {
  return (
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => onPress(title, description, isDone)}
      onLongPress={() => onLongPress(title, description, isDone)}
      underlayColor={colors.onPressBackground}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox state={isDone} onPress={onPressCheckBox} />
        </View>
      </View>
    </TouchableHighlight>
  );
}
