/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {Heading3,PageText} from '../../widget/Text'

type Props = {
    
}

type State = {
    
};

class NearbyScene extends PureComponent<Props, State> {

	static navigationOptions = ({navigation}) => ({
		headerTitle: (
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center', padding:10}}>
                <Image 
                	source={require('../../img/public/icon_food_merchant_address.png')} 
                	style={{width:13,height:16,marginRight:5}} 
                />
                <Heading3>福州</Heading3>
            </TouchableOpacity>
        ),
	})

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Nearby</Text>
            </View>
        )
     }

}

const styles = StyleSheet.create({
    
})

export default NearbyScene