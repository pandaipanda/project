/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import HomeMenuView from './HomeMenuView'
import * as api from '../../api'
import screen from '../../common/screen'

type Props = {

}

type State = {

};

class HomeScene extends PureComponent<Props, State> {

    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
                <Text>搜索</Text>
            </TouchableOpacity>
        ),
        headerLeft: (
            <NavigationItem
                title='定位'
                titleStyle={{color: 'white'}}
            />
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/mine/icon_navigationItem_message_white.png')}
                onPress={()=> {
                    navigation.navigate('WebScene')
                }}
            />
        ),
        headerStyle: {backgroundColor: color.primary},
    })

    render() {
        return (
            <View style={{flex: 1}}>
                <HomeMenuView 
                    menuInfos={api.menuInfos}
                    onMenuSelected={(index) => {
                        alert('test ' + index)
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
})

export default HomeScene