
import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import {TabNavigator,TabBarBottom} from 'react-navigation'
import HomeScene from './scene/Home/HomeScene'
import MineScene from './scene/Mine/MineScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import OrderScene from './scene/Order/OrderScene'

class RootScene extends PureComponent<{}>{

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>RootScene</Text>
            </View>
        )
    }

}

const Tab = TabNavigator({
	Home:{
		screen:HomeScene
	},
	Nearby:{
		screen:NearbyScene
	},
	Order{
		screen:OrderScene
	},
	Mine:{
		screen:MineScene
	}
})

const styles = StyleSheet.create({

})

export default RootScene