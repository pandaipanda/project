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

class MineScene extends PureComponent<Props, State> {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Mine</Text>
            </View>
        )
     }

}

const styles = StyleSheet.create({
    
})

export default MineScene