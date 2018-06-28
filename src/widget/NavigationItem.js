/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, ViewPropsTypes, TouchableOpacity} from 'react-native'

type Props = {
    title?: string,
    titleStyle?: ViewPropsTypes.styles,

    icon?: any,
    iconStyle?: ViewPropsTypes.styles,

    onPress?: Function,
}

type State = {

}

class NavigationItem extends PureComponent<Props, State> {

    render() {
        let titleElement = this.props.title && (
            <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
        )

        let iconElement = this.props.icon && (
            <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon} />
        )

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                {iconElement}
                {titleElement}
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 27,
        height: 27,
        margin: 8,
    },
    title: {
        fontSize: 15,
        color: '#333333',
        margin: 8,
    }
})

export default NavigationItem