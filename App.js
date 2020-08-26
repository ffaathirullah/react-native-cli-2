import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactComponent from './StylingComponent';

const App = () => (
  <View>
    <ScrollView>
      <SampleComponent />
      <StylingReactComponent />
    </ScrollView>
  </View>
);

export default App;
