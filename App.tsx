import {
  Text,
  View,
  Platform,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  const {CalendarModule} = NativeModules;
  const onPress = () => {
    CalendarModule.createCalendarEvent(
      'Click to invoke your native module!',
      '#11235A',
      '#EEF5FF',
    );
  };
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
