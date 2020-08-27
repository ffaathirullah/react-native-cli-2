import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import cart from '../../assets/icons/cart.jpg';

const Position = ({}) => (
  <View style={styles.wrapper}>
    <View style={styles.cartWrapper}>
      <Image source={cart} style={styles.iconCart} />
      <Text style={styles.notif}>10</Text>
    </View>
    <Text>Keranjang Belanja</Text>
  </View>
);

export default Position;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    width: 93,
    height: 93,
    borderRadius: 92 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 23,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
