import { View, Text } from 'react-native'
import React, { Component } from 'react'
import SubjectCard from '../Cards/SubjectCard';

class SubjectScreen extends Component{
  constructor(props){
    super(props)
    this.state={
  subjects:[
    {id:1,name:'C language'},
    {id:2,name:'DLA'},
    {id:3, name:'CLDS'},
    {id:4,name:"CS"},
    {id:5,name:'DBMS'}
    ]

    }
  }
  render() {
    return (
      <View style={{flex:1}}>
     <View style={{alignItems:'center'}}>
      <Text style={{fontSize:20}}>Subjects</Text>
     </View>
     <View>
      {this.state.subjects.map(subject=>(
        <SubjectCard id={subject.id} name={subject.name}/>
      ))}
     </View>
     </View>
     
     
    );
  }
}

export default SubjectScreen