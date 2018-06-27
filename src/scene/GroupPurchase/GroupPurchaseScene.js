/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import color from '../../widget/color'
import {Heading1,Heading2,PageText} from '../../widget/Text'
import NavigationItem from '../../widget/NavigationItem'
import screen from '../../common/screen'
import Button from '../../widget/Button'
import Separator from '../../widget/Separator'

type Props = {

}

type State = {

};

class GroupPurchaseScene extends PureComponent<Props, State> {

	static navigationOptions = ({navigation}) => ({
		headerTitle:'团购详情',
		headerRight: (
            <NavigationItem
                icon={require('../../img/public/icon_navigationItem_share.png')}
            />
        ),
	})

    render() {

    	let {info} = this.props.navigation.state.params
    	let imageUrl = info.imgurl.replace('w.h','480.0')
        return (
 			<View style={styles.container}>
 				<View>
 					<Image
 						source={{uri: imageUrl}}
						style={styles.banner}
 					/>
 					<View style={styles.topContainer}>
 						<Heading2 style={{color: color.primary}}>￥</Heading2>
 						<Heading1 style={{marginBottom: -8}}>{info.price}</Heading1>
 						<PageText style={{marginLeft: 10}}>门市价：￥{parseInt(info.price * 1.1)}</PageText>
 						<View style={{flex:1}} />
 						<Button 
 							title='立即抢购'
 							titleStyle={{color:'white',fotSize:18}}
 							style={styles.buyButton}
						/>
 					</View>
 				</View>
 				<Separator />
 				<View style={styles.tagContainer}>
 					<Image
 						style={{width:20,height:20,marginLeft:10}}
 						source={require('../../img/home/icon_deal_anytime_refund.png')} 
 					/>
 					<PageText style={{color:'#89B24F'}}> 随时退</PageText>
 					<View style={{flex:1}}/>
 					<PageText style={{marginRight:10}}>已售123</PageText>
 				</View>
 			</View>
        )
    }

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: 'white',
	},
	banner:{
		width: screen.width,
		height: screen.width / 2,
	},
	topContainer: {
		padding: 10,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	tagContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buyButton: {
		backgroundColor: '#fc9e28',
		width: 94,
		height: 36,
		borderRadius: 7,
	}
})

export default GroupPurchaseScene