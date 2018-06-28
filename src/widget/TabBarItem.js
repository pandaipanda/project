/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

type Props = {
    tintColor: any,
    normalImage: any,
    selectedImage: any,
    focused: boolean,
}

class TabBarItem extends PureComponent<Props> {

    render() {
        let {focused, selectedImage, normalImage, tintColor} = this.props
        return (
            <Image
                source={focused ? selectedImage : normalImage}
                style={{tintColor: tintColor, width: 25, height: 25}}
            />
        )
    }

}

const styles = StyleSheet.create({

})

export default TabBarItem