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
  const {NativeModuleCall} = NativeModules;
  const onPress = async () => {
    try {
      const Data = await NativeModuleCall.createNativeEvent(
        'Click to invoke your native module!',
      );
      console.log('Data----------', Data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModuleCall);
    const eventListener = eventEmitter.addListener('EventReminder', event => {
      console.log('Received event:', event);
    });
    return () => {
      eventListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
          <Text style={styles.textStyle}>
            Click to invoke your native module!
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>Only for iOS</Text>
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
