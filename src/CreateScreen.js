import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from './blogcontext/blogContext';
import { useNavigation } from '@react-navigation/native';
import BlogPost from './BlogPost';


const CreateScreen = ({navigation}) => {

    

      const {addBlogPost}=useContext(Context);

      return<BlogPost onSubmit={
        (title ,content)=>{
addBlogPost(title,content,()=>navigation.navigate('IndexScreen'))
        }
      }/>
  
}

export default CreateScreen

const styles = StyleSheet.create({
  
})