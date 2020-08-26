import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class Flexbox extends Component {
  render() {
    return (
      <View>
        <Text> Materi Flexbox : </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 60}} />
          <View style={{backgroundColor: 'orange', width: 50, height: 70}} />
          <View style={{backgroundColor: 'red', width: 50, height: 80}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text>Home</Text>
          <Text>Body</Text>
          <Text>Center</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 40}}>
          <Image
            source={{uri: 'http://placeimg.com/100/100/animals'}}
            style={{width: 70, height: 70, borderRadius: 50}}
          />
          <View>
            <Text> Facheul Faathirullah </Text>
            <Text> Coba React Native</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Flexbox;
