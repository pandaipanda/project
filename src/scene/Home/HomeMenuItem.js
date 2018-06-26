/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import screen from '../../common/screen'

type Props = {
    title: string,
    icon: any,
    onPress: Function,
}

type State = {

};

class HomeMenuItem extends PureComponent<Props, State> {

    render() {
        let {title, icon, onPress} = this.props
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Image source={icon} style={styles.icon} />
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 5,
        height: screen.width / 5,
    },
    icon: {
        width: screen.width / 9,
        height: screen.width / 9,
        margin: 5,
    }
})

export default HomeMenuItem