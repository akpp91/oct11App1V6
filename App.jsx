

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import IndexScreen from './src/indexScreen';
import { Provider } from './src/blogcontext/blogContext';
import ShowScreen from './src/ShowScreen';
import CreateScreen from './src/CreateScreen';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import EditScreen from './src/EditScreen';



// export type RootStackParamList = {
//   IndexScreen: undefined;
//   Detail: { productId: string };
//   ShowScreen:{productId: string};
//   CreateScreen:{productId: string};
//   };

function App() {
  
  const stack = createNativeStackNavigator()

  
  return (
<Provider>
          <>
            <NavigationContainer>
            <stack.Navigator initialRouteName='IndexScreen'>
            <stack.Screen name='IndexScreen'
            component={IndexScreen}
            options={{
            title:"IndexScreen",
              headerRight: () => {
                const navigation = useNavigation(); // Use useNavigation hook
              return (       
              <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
              <Icon name="add" size={30}/>
              </TouchableOpacity>                
              )
             }
                
            
            }}
            
            />
            
            <stack.Screen name='ShowScreen'
            component={ShowScreen}
            options={({navigation,route}) => ({
              title:"ShowScreen",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('EditScreen',{id: route.params?.id})}>
                <Icon name="edit" size={30}/>
                </TouchableOpacity>                              ),
            })
          }
            />

            <stack.Screen name='CreateScreen'
            component={CreateScreen}
            options={{
            title:"CreateScreen"
            }}/>

            <stack.Screen name='EditScreen'
            component={EditScreen}
            options={{
            title:"EditScreen"
            }}/>
            </stack.Navigator>
            </NavigationContainer>
            </>
</Provider>
);
}

export default App;
