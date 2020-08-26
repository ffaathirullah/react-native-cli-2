import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactComponent from './StylingComponent';
import MateriFlexbox from './MateriFlexbox';
const App = () => (
  <View>
    <ScrollView>
      <SampleComponent />
      <StylingReactComponent />
      <MateriFlexbox />
    </ScrollView>
  </View>
);

export default App;
