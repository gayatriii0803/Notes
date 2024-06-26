import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SemesterCard from '../Cards/SemesterCard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class SemesterScreen extends Component {
    constructor(props){
        super(props)
        this.state={
          semesters: [
            { id: '1', name: 'Semester 1' },
            { id: '2', name: 'Semester 2' },
            { id: '3', name: 'Semester 3' },
            { id: '4', name: 'Semester 4' },
            { id: '5', name: 'Semester 5' },
            { id: '6', name: 'Semester 6' }
          ],
          course: this.props.route.params.courseName,
          }
    }

  
    componentDidMount(){
      console.log('course name',this.state.course)
    }

  render() {
    return (
      <ScrollView style={{flex:1,alignContent:'center',}}>
        <View style={{ marginBottom:hp(6) }}>
        <Text style={{alignSelf:'center',fontSize:25,marginTop:12,color:'black'}}>{this.state.course}</Text>
          <Text style={{fontSize: 30,textAlign: 'center',color:'black'}}>SEMESTERS</Text>
          
        </View>
        <View style={{marginHorizontal:wp(3),marginBottom:30}}>
        {this.state.semesters.map(semester =>(
          <SemesterCard id={semester.id} name={semester.name} course={this.state.course}/>
        ))}
        </View>
      </ScrollView>
    );
  }
}

export default SemesterScreen;
