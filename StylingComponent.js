import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import gambar from './gambar.png';

const StylingReactComponent = () => (
  <View>
    <Text style={styles.text}>Styling Component</Text>
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'red',
        margin: 20,
      }}
    />
    <View
      style={{
        margin: 12,
        padding: 12,
        backgroundColor: '#f2f2',
        width: 212,
      }}>
      <Image
        source={gambar}
        style={{width: 188, height: 107, borderRadius: 8}}
      />
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 12}}>
        {' '}
        Kelebihan Jest{' '}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#f2994a',
          marginTop: 12,
        }}>
        {' '}
        Price : 200000
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '300',
          color: 'black',
          marginTop: 6,
        }}>
        {' '}
        Bandung Barat
      </Text>
      <View
        style={{
          backgroundColor: '#6fcf97',
          borderRadius: 25,
          paddingVertical: 6,
          marginTop: 12,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '200',
            color: 'white',
            textAlign: 'center',
          }}>
          {' '}
          BELI
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    margin: 20,
  },
});

export default StylingReactComponent;
