

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'
import CameraDialog from './app/components/CameraDialog';
import PictureList from './app/components/PictureList';


export default class App extends Component{
  state = {
      pictureList:[

        {id:'1', url: 'https://www.xgrupos.com/img-400.400.30-309590a1885f0dc95646e0b48610a1ac.jpg'},
        {id:'2', url: 'https://www.xgrupos.com/img-400.400.30-309590a1885f0dc95646e0b48610a1ac.jpg'},
        {id:'3', url: 'https://www.xgrupos.com/img-400.400.30-309590a1885f0dc95646e0b48610a1ac.jpg'},
        {id:'4', url: 'https://www.xgrupos.com/img-400.400.30-309590a1885f0dc95646e0b48610a1ac.jpg'},


      ],
      isModalOpen: false
  }

  onPictureSelect = (item) => {}
  openModal = () => {
    this.setState({isModalOpen: true})
  }
  closeModal = (response) => {
    this.setState({isModalOpen:false})
  }
  
render(){

  const {state} = this;
  return(

    <View style={styles.container}>
      <PictureList list={state.pictureList} onClick={this.onPictureSelect}/>
    <View style={styles.footer}>
      <Button 
        onPress={this.openModal}
        title="Nova Foto"
        color="#0062ac"
      />
    </View>
    <CameraDialog isOpen={state.isModalOpen} onClose={this.closeModal}/>
    </View>
    
  

    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
    },
    footer:{
      padding: 15,
      backgroundColor:'#999',
      width:'100%',
      textAlign:'center'

    }
  })
