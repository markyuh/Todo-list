import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}> 
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style = {styles.items}>
          {/* this is where the tasks will go */}
          <Task/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  tasksWrapper : {},
  sectionTitle : {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items : {},
});
