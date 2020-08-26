import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './Pages/SampleComponent';
import StylingComponent from './Pages/StylingComponent';
import Flexbox from './Pages/Flexbox';
const App = () => (
  <View>
    <ScrollView>
      <SampleComponent />
      <StylingComponent />
      <Flexbox />
    </ScrollView>
  </View>
);

export default App;
