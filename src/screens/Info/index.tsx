import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import { config } from './config';

export default function Info() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {config.map(item => (
          <View style={styles.topicContainer} key={item.topic}>
            <View style={styles.pointContainer}>
              <View style={styles.point}></View>
            </View>
            <Text style={styles.topicText}>{item.topic}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
