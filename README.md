Screen Navigation and pass data from One screen to Other screen

1. Run the cammand 

    npm install  react-navigation --save

2. Then you can quickly create an app with a home screen and a profile screen as see in Project


3. Add code in App.js

   
	import React, {Component} from 'react';
	import HomeScreen from './screen/HomeScreen'
	import Profile from './screen/Profile'
	import {createStackNavigator, createAppContainer} from 'react-navigation';

	type Props = {};
	export default class App extends Component<Props> {
	  render() {
 	   return (
	      <NavigationScreenContainer/>
	    )
	  }
	}

	const MainNavigator = createStackNavigator({
	  Home: {screen: HomeScreen},
	  Profile :{screen:Profile}
	});

	const NavigationScreenContainer = createAppContainer(MainNavigator);


4. Now when you run the project you will get the Gesture Handler error. To resolve this error install the 'react-native-gesture-handler' lib
    
   npm install  react-native-gesture-handler --save

5. Run react-native linking cammand
  
    react-native  react-native-gesture-handler --save

Note :  After run the linking command you will get an error of path slash. To resolve this open the android/settings.gradle and change the backward slash to Forward slash.


