import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
  NativeEventEmitter,
} from 'react-native';
import React, {useEffect} from 'react';

const App = () => {
  const {BarcodeScannerModule} = NativeModules;

  const onPress = async () => {
    const eventId = await BarcodeScannerModule.scanBarcode();
    console.log('eventId----------', eventId);
  };

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
    let eventListener = eventEmitter.addListener('BarcodeScanned', event => {
      console.log('event----------', event);
    });
    return () => {
      eventListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          Click to invoke your native module!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#365486',
  },
  textStyle: {
    color: '#fff',
  },
});
