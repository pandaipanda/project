
import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'

type Props = {

}

type State = {
	
}

class WebScene extends PureComponent<Props,State>{

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>WebScene</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

})

export default WebScene