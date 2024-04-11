import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SemesterCard from '../Cards/SemesterCard';

class SemesterScreen extends Component {
    constructor(props){
        super(props)
        this.state={
          semesters: [
            { id: 1, name: 'Semester 1' },
            { id: 2, name: 'Semester 2' },
            { id: 3, name: 'Semester 3' },
            { id: 4, name: 'Semester 4' },
            { id: 5, name: 'Semester 5' },
            { id: 6, name: 'Semester 6' }
          ]
          }
    }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 22 }}>Semesters</Text>
        </View>
        <View style={{justifyContent:'center',flex:1}}>
        {this.state.semesters.map(semester =>(
          <SemesterCard id={semester.id} name={semester.name}/>
        ))}
        </View>
      </View>
    );
  }
}

export default SemesterScreen;
