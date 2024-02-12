import React from 'react';

import {Text, View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import {
  Avatar
} from 'react-native-elements'

function App() {
  return (
    <SafeAreaView>
      <View>
        <Avatar rounded title="MD" />
          <Text>Hello, User</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  
})
