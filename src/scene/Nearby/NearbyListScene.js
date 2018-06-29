/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import NearbyHeaderView from './NearbyHeaderView'
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'
import * as api from '../../api'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {

}

type State = {
    typeIndex: number,
    data: Array<Object>,
    refreshState: number,
};

class NearbyListScene extends PureComponent<Props, State> {

    constructor(props: Object) {
        super(props)

        this.state = {
            typeIndex: 0,
            data: [],
            refreshState: RefreshState.Idle,
        }

    }

    componentDidMount() {
        this.requestFirstPage()
    }

    reqeustData = async () => {
        let response = await fetch(api.recommend)
        let json = await response.json()

        let dataList = json.data.map((info) => ({
            id: info.id,
            imageUrl: info.squareimgurl,
            title: info.mname,
            subtitle: `[${info.range}${info.title}]`,
            price: info.price,
        }))

        dataList.sort(() => (0.5 - Math.random()))

        return dataList
    }

    requestFirstPage = async () => {
        try {
            this.setState({refreshState: RefreshState.HeaderRefreshing})
            let dataList = await this.reqeustData()

            this.setState({
                data: dataList,
                refreshState: RefreshState.Idle,
            })
        } catch (error) {
            this.setState({refreshState: RefreshState.Failure})
        }
    }

    requestNextPage = async () => {
        try {
            this.setState({refreshState: RefreshState.FooterRefreshing})
            let dataList = await this.reqeustData()

            this.setState({
                data: [...this.state.data, ...dataList],
                refreshState: this.state.data.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        } catch (error) {
            this.setState({refreshState: RefreshState.Failure})
        }
    }

    renderHeader = () => {
        return (
            <NearbyHeaderView
                titles={this.props.types}
                selectedIndex={this.state.typeIndex}
                onSelected={(index) => {
                    if (index != this.state.typeIndex) {
                        this.setState({typeIndex: index})
                        this.requestFirstPage()
                    }
                }}
            />
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
            <RefreshListView
                ListHeaderComponent={this.renderHeader}

                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                refreshState={this.state.refreshState}
                onHeaderRefresh={this.requestFirstPage}
                onFooterRefresh={this.requestNextPage}
            />
        )
    }

}

const styles = StyleSheet.create({

})

export default NearbyListScene