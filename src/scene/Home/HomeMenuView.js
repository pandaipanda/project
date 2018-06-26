/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native'
import PageControl from 'react-native-page-control'
import screen from '../../common/screen'
import HomeMenuItem from './HomeMenuItem'
import color from '../../widget/color'

type Props = {
    menuInfos: Array<Object>,
    onMenuSelected?: Function,
}

type State = {
    currentPage: number,
};

class HomeMenuView extends PureComponent<Props, State> {

    constructor(props: Object) {
        super(props)

        this.state = {
            currentPage: 0,
        }
    }

    onScroll = (e) => {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / screen.width)

        if (this.state.currentPage != currentPage) {
            this.setState({currentPage: currentPage})
        }
    }

    render() {
        let {menuInfos, onMenuSelected} = this.props

        let pageCount = Math.ceil(menuInfos.length / 10)

        let menuElements = menuInfos.map((info, index) => (
            <HomeMenuItem
                key={index}
                title={info.title}
                icon={info.icon}
                onPress={() => {
                    onMenuSelected && onMenuSelected(index)
                }}
            />
        ))
        let menuViews = []

        for (let i = 0; i < pageCount; i++) {
            let elementsPerPage = menuElements.slice(i * 10, i * 10 + 10)
            let menuView = (
                <View key={i} style={styles.itemsView}>
                    {elementsPerPage}
                </View>
            )
            menuViews.push(menuView)
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.onScroll}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={color.primary}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screen.width,
    },
    pageControl: {
        margin: 10,
    }
})

export default HomeMenuView