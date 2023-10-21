import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from './blogcontext/blogContext';


const ShowScreen = ({navigation ,route}) => {
    const {state} = useContext(Context);

    const blogPost= state.find((blogPost)=>blogPost.id === route.params?.id)
  return (
    <View>  
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({})
