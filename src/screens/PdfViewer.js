/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {Component} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import storage from '@react-native-firebase/storage';

export default class PdfViewer extends Component {
    constructor(props){
        super(props)
        this.state={
            course:this.props.route.params.courseName,
            sem:this.props.route.params.semName,
            subject:this.props.route.params.subjectName,
            uri:''
        }
      }

    componentDidMount(){
        console.log("course",this.state.course)
        console.log("sem",this.state.sem)

        console.log("subject",this.state.subject)

        this.fetchDownloadURL()
    }
    

    fetchDownloadURL = async () => {
        try {
            console.log(`${this.state.course}/${this.state.sem}/${this.state.subject}/${this.state.subject}.pdf`)
          const url = await storage().ref(`${this.state.course}/${this.state.sem}/${this.state.subject}/${this.state.subject}.pdf`).getDownloadURL();
          // this.setState({ downloadURL: url });
          this.setState({uri:url})
          console.log('download url',url)
        } catch (error) {
          console.error('Error fetching download URL:', error);
          // Handle the error as needed
        }
      };
    render() {
        const source = { uri: this.state.uri, cache: true };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

        return (
            <View style={styles.container}>
                <Pdf
                    trustAllCerts={false}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
