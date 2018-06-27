/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import color from '../../widget/color'
import {Heading2,PageText} from '../../widget/Text'

type Props = {
	info: Array,
	onPress: Function,
}

type State = {

};

class GroupPurchaseCell extends PureComponent<Props, State> {

    render() {
    	let {info,onPress} = this.props
        return (
        	<TouchableOpacity style={styles.container} onPress={()=>{
        		onPress(info)
        	}}>
        		<Image source={{uri:info.squareimgurl.replace('w.h','160.0')}} style={styles.icon}/>

        		<View style={styles.rightContainer}>
        			<Heading2>{info.mname}</Heading2>
        			<PageText numberOfLines={0} style={{marginTop:8}}>{'['+info.range +' '+ info.title+']'}</PageText>
        			<View style={{flex: 1,justifyContent: 'flex-end'}}>
        				<Heading2 style={styles.price}>{info.price}元</Heading2>
        			</View>
        		</View>
        	</TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: color.border,
		backgroundColor: 'white',
	},
	icon: {
		width: 80,
		height: 80,
		borderRadius: 5,
	},
	rightContainer: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 10,
	},
	price: {
		color: color.primary,
	}
})

export default GroupPurchaseCell