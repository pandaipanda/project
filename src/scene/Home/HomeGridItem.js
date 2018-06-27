/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'
import {Heading2,Heading3} from '../../widget/Text'

type Props = {
    info: Object,
    onPress: Function,
}

type State = {

};

class HomeGridItem extends PureComponent<Props, State> {

    render() {
        let {info,onPress} = this.props

        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h','120.0')

        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View>
                    <Heading2 style={{color:color,marginBottom:10}}>{title}</Heading2>
                    <Heading3>{subtitle}</Heading3>
                </View>
                <Image style={styles.icon} source={{uri: imageUrl}} />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:screen.width / 2 - StyleSheet.hairlineWidth,
        height:screen.width / 4,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon:{
        width:screen.width / 5,
        height:screen.width / 5,
        marginLeft: 10,
    }
})

export default HomeGridItem