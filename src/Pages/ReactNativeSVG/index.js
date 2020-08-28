/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
// import IllustrationMySVG from '../../assets/images/illustration.svg';
import Logo from './logo.svg';

const ReactNativeSVG = () => (
  <View style={styles.container}>
    {/* <IllustrationMySVG width={244} height={200} />
   */}
    <Logo width={120} height={40} />
  </View>
);

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
