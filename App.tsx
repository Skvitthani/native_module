import {Button, NativeModules, SafeAreaView, StyleSheet, Text, View,NativeEventEmitter} from 'react-native';
import React, { useEffect } from 'react';


const {CustomMethods} = NativeModules
const App = () => {
  useEffect(()=>{
    const YourModule = new NativeEventEmitter(NativeModules.RNEventEmitter)

    const eventListener = YourModule.addListener('onReady',(string:string)=>{
      console.log('string==========',string);
    })

  },[])


  const onPress = () => {
    CustomMethods.MyMethod("Sanket")
  }

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <Button title='Press' onPress={onPress}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
