/* @flow weak */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Cart from '../../Components/Cart';
import Product from '../../Components/Product';

const Comunication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
      <Cart quantity={totalProduct} />
    </View>
  );
};

export default Comunication;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
