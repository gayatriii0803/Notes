import { View, Text, ScrollView } from 'react-native'
import React, { Component } from 'react'
import SubjectCard from '../Cards/SubjectCard';
import firestore from '@react-native-firebase/firestore';
import {Filter} from '@react-native-firebase/firestore/lib/FirestoreFilter.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
      <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
        <ScrollView>
     <View style={{ marginBottom:hp(6)}}>
      <Text style={{fontSize: 30,textAlign: 'center',color:'black'}}>SUBJECTS</Text>
     </View>
     <View style={{marginHorizontal:wp(3)}}>
     
      {this.state.subjects.map(subject=>(
        <SubjectCard name={subject} course={this.state.courseName} sem={this.state.sem}/>
      ))}
     </View>
     </ScrollView>
     </View>
     
     
    );
  }
}

export default SubjectScreen