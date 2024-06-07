// import {
//   Text,
//   View,
//   Platform,
//   StyleSheet,
//   NativeModules,
//   TouchableOpacity,
//   NativeEventEmitter,
// } from 'react-native';
// import React, {useEffect} from 'react';

// const App = () => {
//   const {CalendarModule} = NativeModules;
//   const onPress = async () => {
//     try {
//       const Data = await CalendarModule.addEvent(
//         'Click to invoke your native module!',
//       );
//       console.log('Data----------', Data);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     if (Platform.OS === 'ios') {
//       const eventEmitter = new NativeEventEmitter(CalendarModule);
//       const eventListener = eventEmitter.addListener('EventReminder', event => {
//         console.log('Received event:', event);
//       });
//       return () => {
//         eventListener.remove();
//       };
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//       {Platform.OS === 'ios' ? (
//         <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
//           <Text style={styles.textStyle}>
//             Click to invoke your native module!
//           </Text>
//         </TouchableOpacity>
//       ) : (
//         <Text>Only for iOS</Text>
//       )}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     justifyContent: 'center',
//   },
//   buttonStyle: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#365486',
//   },
//   textStyle: {
//     color: '#fff',
//   },
// });



import { Alert, Button, NativeEventEmitter, NativeModules, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const { CalendarModule } = NativeModules;

const calendarEventEmitter = new NativeEventEmitter(CalendarModule);

 const addEvent = (name) => {
  return CalendarModule.addEvent(name);
};

 const addEventReminderListener = (callback) => {
  const subscription = calendarEventEmitter.addListener('EventReminder', callback);
  return () => subscription.remove();
};

const App = () => {
  useEffect(() => {
    const unsubscribe = addEventReminderListener(event => {
      console.log('Event reminder received:', event);
      Alert.alert(`Event reminder received: ${event.name}`);
    });

    return () => unsubscribe();
  }, []);

  const handleAddEvent = () => {
    addEvent('My Sanket Vitthani')
      // .then(() => {
      //   console.log('Event added successfully');
      // })
      // .catch(error => {
      //   console.error('Error adding event:', error);
      // });
  };


  return (
    <View>
      <SafeAreaView/>
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})