/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import color from './color'
import screen from '../common/screen'

class Separator extends PureComponent<Props> {

    render() {
        return (
        	<View style={{width: screen.width, height: StyleSheet.hairlineWidth, backgroundColor: color.border}} />
        )
    }

}

const styles = StyleSheet.create({

})

export default Separator