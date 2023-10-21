import { Button, FlatList, FlatListComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from './blogcontext/blogContext'
import Icon from 'react-native-vector-icons/MaterialIcons';

const IndexScreen = ({navigation}) => {
const {state ,addBlogPost, deleteBlogPost , getBlogPosts }=useContext(Context)

useEffect(()=>{ 
  getBlogPosts();

  const unsubscribe=navigation.addListener('focus', ()=> {
    getBlogPosts();
  });

  return unsubscribe;
}
,[])

return (
    <View>
      


      <FlatList
      data={state}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({item})=>{
        return <TouchableOpacity onPress={() => {navigation.navigate('ShowScreen', {id: item.id})}}>
        <View style ={styles.row}>   
          <Text style ={styles.title}> {item.title} - {item.id}</Text>
          <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
          <Icon style ={styles.Icon} name="delete" size={30}/>
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      }}
      />

    </View>
  )
}


IndexScreen.navigationOptions=()=>{
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
        <Icon name="add" size={30}/>
      </TouchableOpacity>)
    
  };
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
justifyContent:"space-between",
paddingVertical:24,
borderTopWidth:1,
paddingHorizontal:10,
borderColor:'gray'
  },
title:{
  fontSize:18
},
Icon:{
  fontSize:24
}
})
export default IndexScreen
