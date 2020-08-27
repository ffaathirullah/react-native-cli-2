import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './Pages/SampleComponent';
import StylingComponent from './Pages/StylingComponent';
import Flexbox from './Pages/Flexbox';
import Position from './Pages/Position';
const App = () => (
  <View>
    <ScrollView>
      {/*<SampleComponent />
      <StylingComponent />
      <Flexbox />*/}
      <Position />
    </ScrollView>
  </View>
);

export default App;
