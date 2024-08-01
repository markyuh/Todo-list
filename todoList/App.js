import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}> 
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style = {styles.items}>
          {/* this is where the tasks will go */}
          <Task text={'task 1'} />
          <Task text={'task 2'} />
        </View>
      </View>

      {/* write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder='Write a task...'/>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  items : {
    marginTop: 30,
  },
  writeTaskWrapper:{
    left: 15,
    position:'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius:60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,    
  },
  addWrapper:{
    left: 2,
    width:60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{},
});
