/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {name as appName} from './app.json';
import SemesterScreen from './src/screens/SemesterScreen';
import SubjectScreen from './src/screens/SubjectScreen';
import App from './App';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import PdfViewer from './src/screens/PdfViewer';


AppRegistry.registerComponent(appName, () =>App );
