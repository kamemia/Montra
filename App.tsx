import React from 'react';

import Navigation from './src/navigation';
import { 
  SafeAreaView , 
  StyleSheet
} from 'react-native';

function App(): JSX.Element{
  return(
    <SafeAreaView style={style.root}>
      <Navigation/>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor:'transparent'
  }
})