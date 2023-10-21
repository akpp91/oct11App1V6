import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'

export default  (reducer , actions , initialState) => {

    const Context= React.createContext();
    
    const Provider = ({children})=>{
    
        const [state , dispatch] = useReducer(reducer , initialState);
        
        const bundActions = {}

        for (let key in actions) {
            bundActions[key] =actions[key](dispatch)            
        }
        return  <Context.Provider value={{state, ...bundActions}} >
                {children}
                </Context.Provider>

}

return { Context, Provider}

}



