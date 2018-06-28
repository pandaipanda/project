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
import * as api from '../../api'
import screen from '../../common/screen'
import HomeGridView from './HomeGridView'
import SpacingView from '../../widget/SpacingView'
import {Heading3} from '../../widget/Text'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {

}

type State = {
    discounts: Array<Object>,
    dataList: Array<Object>,
    refreshing: boolean,
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
                onPress={() => {

                }}
            />
        ),
        headerStyle: {backgroundColor: color.primary},
    })

    constructor(props: Object) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        this.requestData()
    }

    requestData = async () => {
        this.requestRecommend()
        this.requestDiscount()
    }

    requestRecommend = async () => {
        try {
            this.setState({refreshing: true})

            let response = await fetch(api.recommend)
            let json = await response.json()

            let dataList = json.data.map((info) => ({
                id: info.id,
                imageUrl: info.squareimgurl,
                title: info.mname,
                subtitle: `[${info.range}${info.title}]`,
                price: info.price,
            }))

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            alert('error ' + error)
            this.setState({refreshing: false})
        }
    }

    requestDiscount = async () => {
        try {
            // let response = await fetch(api.discount)
            // let json = await response.json()
            this.setState({discounts: api.discount.data})
        } catch (error) {
            alert('error ' + error)
        }
    }

    onGridSelected = (index) => {
        let discount = this.state.discounts[index]

        if (discount.type == 1) {
            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('WebScene', {url: url})
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
                <HomeGridView infos={this.state.discounts} onGridSelected={this.onGridSelected} />
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    }

    onCellSelected = (info) => {
        this.props.navigation.navigate('GroupPurchaseScene', {info: info})
    }

    renderItem = (rowData) => {
        return (
            <GroupPurchaseCell
                onPress={this.onCellSelected}
                info={rowData.item}
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    ListHeaderComponent={() => this.renderHeader()}

                    data={this.state.dataList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}

                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
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
    },
})

export default HomeScene