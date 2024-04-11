/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {name as appName} from './app.json';
import SemesterScreen from './src/screens/SemesterScreen';
import SubjectScreen from './src/screens/SubjectScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
