import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './Pages/SampleComponent';
import StylingComponent from './Pages/StylingComponent';
import Flexbox from './Pages/Flexbox';
import Position from './Pages/Position';
import StateDinamis from './Pages/StateDinamis';
const App = () => (
  <View>
    <ScrollView>
      {/*<SampleComponent />
      <StylingComponent />
      <Flexbox />*/}
      {/* <Position /> */}
      <StateDinamis />
    </ScrollView>
  </View>
);

export default App;
