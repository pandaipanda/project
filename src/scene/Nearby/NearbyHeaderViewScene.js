/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import screen from '../../common/screen'
import {PageText} from '../../widget/Text'
import color from '../../widget/color'

type Props = {
	titles:Array<string>,
	selectedIndex:number,
	onSelected:Function,
}

type State = {

};

class NearbyHeaderViewScene extends PureComponent<Props, State> {

    render() {
    	let {titles,selectedIndex,onSelected} = this.props
        return (
            <View style={styles.container}>
	            {titles.map((title,i)=>(
	            	<TouchableOpacity
	            		key={i}
	            		onPress={()=>{
	            			onSelected(i)
            			}}
            			style={[styles.item,{backgroundColor: selectedIndex == i ? '#fe566d':'white'}]}
	            	>
	            		<PageText style={{color: selectedIndex == i ? 'white':'#555555'}}>{title}</PageText>
            		</TouchableOpacity>
	        	))}
            </View>
        )
    }

}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
        flexWrap: 'wrap',
	},
	item:{
		width: screen.width / 4 - 10,
		marginLeft: 8,
		marginTop: 5,
		marginBottom: 5,
		height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: color.border,
        borderWidth: StyleSheet.hairlineWidth,
	}
})

export default NearbyHeaderViewScene