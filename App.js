import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const [txtFieldText, setTextFieldText] = useState('');
  const [setOfGoals, setSetOfGoals] = useState([]);

function buttonAction(){

  setSetOfGoals((currentGoals) => [...currentGoals, txtFieldText]);

};


function txtFieldAction(enteredText){

  setTextFieldText(enteredText);
};

  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Set Your Goal!..' onChangeText={txtFieldAction}></TextInput>
        <Button title='Add Goal' onPress={buttonAction}/>
      </View>
      <View style = {styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {setOfGoals.map((goalList) => 
            <View style = {styles.goalItems} key={goalList}>
            <Text >
            {goalList}
          </Text>
        </View>)}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer:{
    flex: 4
  },
  goalItems:{
    margin: 8,
    borderRadius: 6,
    padding: 8,
  }
});
