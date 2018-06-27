/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import screen from '../../common/screen'
import NearbyHeaderViewScene from './NearbyHeaderViewScene'

type Props = {

}

type State = {
    typeIndex:number,
};

class NearbyListScene extends PureComponent<Props, State> {

    constructor(props:Object){
        super(props)
        this.state = {
            typeIndex:0,
        }
    }

    render() {
        return (
            <NearbyHeaderViewScene
                titles={this.props.types}
                selectedIndex={this.state.typeIndex}
                onSelected={(index)=>{
                    if(index != this.state.typeIndex){
                        this.setState({typeIndex:index})
                    }
                }}
            />
        )
    }

}

const styles = StyleSheet.create({

})

export default NearbyListScene