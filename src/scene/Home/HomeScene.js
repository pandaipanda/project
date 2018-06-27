/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'
import * as api from '../../api'
import screen from '../../common/screen'
import SpacingView from '../../widget/SpacingView'
import {Heading3} from '../../widget/Text'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

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
                titleStytle={{color: 'white'}}
            />
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/mine/icon_navigationItem_message_white.png')}
                onPress={()=> {
                    
                }}
            />
        ),
        headerStyle: {backgroundColor: color.primary},
    })

    onWebScene = (index) => {
        let discount = api.discount.data[index]
        if(discount.type == 1){
            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('WebScene',{url: url})
        }
    }

    renderHeader = () => {
        return (
            <View>
                <HomeMenuView 
                    menuInfos={api.menuInfos}
                    onMenuSelected={(index) => {
                        alert('test ' + index)
                    }}
                />
                <SpacingView />
                <HomeGridView infos={api.discount.data} onPress={this.onWebScene}/>
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    }

    onPurchaseCell = (info) => {
        this.props.navigation.navigate('GroupPurchaseScene',{info: info})
    }

    renderItem = (rowData)=>{
        return(
            <GroupPurchaseCell
                info={rowData.item}
                onPress={this.onPurchaseCell}
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    ListHeaderComponent={()=>this.renderHeader()}
                    data={api.recommend.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    onRefresh={()=>{

                    }}
                    refreshing={false}
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
    },
    recommendHeader: {
        height: 35,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white',
    }
})

export default HomeScene