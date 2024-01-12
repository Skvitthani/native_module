import {
  Text,
  View,
  Platform,
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
    if (Platform.OS === 'android') {
      const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
      let eventListener = eventEmitter.addListener('BarcodeScanned', event => {
        console.log('event----------', event);
      });
      return () => {
        eventListener.remove();
      };
    }
  }, []);

  return (
    <View style={styles.container}>
      {Platform.OS === 'android' ? (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
          <Text style={styles.textStyle}>
            Click to invoke your native module!
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>Only for android</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#365486',
  },
  textStyle: {
    color: '#fff',
  },
});
