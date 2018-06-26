/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

type Props = {
    
}

type State = {
    
}

class NearbyScene extends PureComponent<Props, State> {

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