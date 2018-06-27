/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import HomeGridItem from './HomeGridItem'
import color from '../../widget/color'

type Props = {
    infos: Array<Object>,
    onPress: Function,
}

type State = {

};

class HomeGridView extends PureComponent<Props, State> {

    render() {
        let {infos,onPress} = this.props
        return (
            <View style={styles.container}>
                {infos.map((info,index)=>(
                    <HomeGridItem
                        key={index}
                        info={info}
                        onPress={()=>{
                            onPress(index)
                        }}
                    />
                ))}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
    }
})

export default HomeGridView