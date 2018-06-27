/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import color from './color'

type Props = {
    
}

type State = {

};

class SpacingView extends PureComponent<Props, State> {

    render() {
        return (
            <View style={styles.container}/>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        height:14,
        backgroundColor:color.paper
    }
})

export default SpacingView