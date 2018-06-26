
import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'

class HomeScene extends PureComponent<{}>{

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>HomeScene</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

})

export default HomeScene