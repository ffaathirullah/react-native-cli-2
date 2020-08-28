import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import gambar from '../../assets/images/gambar.png';

const Product = (props) => (
  <View style={styles.wrapper}>
    <Image
      source={gambar}
      style={styles.image}
    />
    <Text style={styles.text1}>
      Kelebihan Jest
    </Text>
    <Text
      style={styles.text2}
    >
      Price : 200000
    </Text>
    <Text
      style={styles.text3}
    >
      Bandung Barat
    </Text>

    <TouchableOpacity onPress={props.onButtonPress}>
      <View
        style={styles.view}
      >
        <Text
          style={styles.text4}
        >
          BELI
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    margin: 12,
    padding: 12,
    backgroundColor: '#f2f2',
    width: 212,
  },
  image: { width: 188, height: 107, borderRadius: 8 },
  text1: { fontSize: 14, fontWeight: 'bold', marginTop: 12 },
  text2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12,
  },
  text3: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
    marginTop: 6,
  },
  view: {
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 12,
  },
  text4: {
    fontSize: 14,
    fontWeight: '200',
    color: 'white',
    textAlign: 'center',
  },

});
