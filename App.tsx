import {
  Text,
  View,
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
