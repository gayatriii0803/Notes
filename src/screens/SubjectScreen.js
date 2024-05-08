import { View, Text } from 'react-native'
import React, { Component } from 'react'
import SubjectCard from '../Cards/SubjectCard';
import firestore from '@react-native-firebase/firestore';
import {Filter} from '@react-native-firebase/firestore/lib/FirestoreFilter.js';


class SubjectScreen extends Component{
  constructor(props){
    super(props)
    this.state={
    subjects:[],
    sem:this.props.route.params.semName,
    courseName:this.props.route.params.course
    }
  }
  componentDidMount(){
    console.log('sem name',this.state.sem)
    console.log('course name',this.state.courseName)
    this.getSubjectDetails()
  }

  getSubjectDetails = (a) => {
  firestore()
  .collection('SUBJECTS')
  .where(Filter.and(Filter('COURSE', '==', this.state.courseName), Filter('SEM', '==',this.state.sem)))
  .get()
  .then(querySnapshot => {
    // console.log('SUBJECT NAME: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapshot => {
      this.setState(prevState => ({
        subjects: [...prevState.subjects, documentSnapshot.data().SUBJECT_NAME],
      }));  
      console.log('SUBJECT NAME: ',documentSnapshot.data().SUBJECT_NAME);
    });
  });


  }

  render() {
    return (
      <View style={{flex:1}}>
     <View style={{alignItems:'center'}}>
      <Text style={{fontSize:20}}>Subjects</Text>
     </View>
     <View>
      {this.state.subjects.map(subject=>(
        <SubjectCard name={subject}/>
      ))}
     </View>
     </View>
     
     
    );
  }
}

export default SubjectScreen