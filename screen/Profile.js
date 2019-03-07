import React from 'react';
import {View,Text} from 'react-native'

export default class Profile extends React.Component{



   render(){
   const name =  this.props.navigation.getParam('name', 'Akash')
    return(
        <View style={{justifyContent: 'center'}}> 
            <Text >Name :  Akash</Text>
        </View>
    )

   }

}