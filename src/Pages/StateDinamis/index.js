import React, {useState, Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = ({}) => (
  <View style={styles.container}>
    <Text>Materi State Dinamis</Text>
    <Text>Functional Component (HOOKS)</Text>
    <Counter />
    <Counter />
    <Text>Class Component</Text>
    <CounterClass />
  </View>
);

export default StateDinamis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
