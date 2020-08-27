import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Story = (props) => {
  return (
    <View style={{flexDirection: 'row', margin: 40}}>
      <Image
        source={{uri: 'http://placeimg.com/100/100/animals'}}
        style={{width: 70, height: 70, borderRadius: 50}}
      />
      <Text>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = ({}) => (
  <View style={styles.container}>
    <Story title="ini judul 1" />
    <Story title="ini judul 2" />
    <Story title="ini judul 3" />
    <Story />
  </View>
);

export default PropsDinamis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
