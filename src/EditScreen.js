import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from './blogcontext/blogContext'
import BlogPost from './BlogPost'

const EditScreen = ({navigation, route}) => {
  
    const {state , editBlogPost} = useContext(Context);

    const blogPost =state.find((blogPost) => blogPost.id === route.params?.id);


    return (
        <BlogPost
          initialValues={{ title: blogPost.title, content: blogPost.content }}
          onSubmit={(title, content) => {
            editBlogPost(blogPost.id, title, content, ()=>navigation.navigate('IndexScreen'));
          }}
        />
      );
      
}

export default EditScreen

const styles = StyleSheet.create({})