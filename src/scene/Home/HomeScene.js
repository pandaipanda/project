
import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity,Dimensions} from 'react-native'
import color from '../../wigdet/color'
import Navigationltem from '../../wigdet/Navigationltem'

class HomeScene extends PureComponent<>{

	static navigationOptions = () => ({
		headerStyle:{backgroundColor:color.primary},
		headerTitle:(
			<TouchableOpacity style={styles.searchBar} >
				<Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
				<Text style={{fontSize:14}}>搜索</Text>
			</TouchableOpacity>
		),
		headerLeft:(
			<Navigationltem title='定位' titleStytle={{color:'white'}} onPress={()=>{
				alert('dsfsd')
			}}/>
		),
		headerRight:(
			<Navigationltem icon={require('../../img/mine/icon_navigationItem_message_white@2x.png')}/>
		)
    })

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            	<Text>HomeScene</Text>		
            </View>
        )
    }

}

const styles = StyleSheet.create({
	searchBar:{
		flexDirection:'row',
		width: Dimensions.get('window').width * 0.7,
		height:30,
		borderRadius:19,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white',
	},
	searchIcon:{
		width:20,
		height:20,
		margin:5,
	}
})

export default HomeScene