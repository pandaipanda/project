/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import SplashScreen from 'react-native-splash-screen';

import TabBarItem from './widget/TabBarItem'
import color from './widget/color'

import HomeScene from './scene/Home/HomeScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import OrderScene from './scene/Order/OrderScene'
import MineScene from './scene/Mine/MineScene'
import WebScene from './scene/Web/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

type Props = {

}

type State = {

};

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: () => ({
                tabBarLabel: '团购',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_homepage.png')}
                        selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                    />
                )
            })
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: () => ({
                tabBarLabel: '附近',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_merchant.png')}
                        selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                    />
                )
            })
        },
        Order: {
            screen: OrderScene,
            navigationOptions: () => ({
                tabBarLabel: '订单',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_order.png')}
                        selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                    />
                )
            })

        },
        Mine: {
            screen: MineScene,
            navigationOptions: () => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_mine.png')}
                        selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
                    />
                )
            })

        }
    }, {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled:false,
        swipeEnabled:false,
        tabBarOptions: {
            activeTintColor:color.primary,
            inactiveTintColor:color.gray,
            style: {backgroundColor: 'white'}
        }
    }
)

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
        WebScene: {screen: WebScene},
        GroupPurchaseScene: {screen: GroupPurchaseScene},
    },
    {
        navigationOptions: {
            headerTintColor: '#333333',
            headerBackTitle: null,
        }
    }
)

class RootScene extends PureComponent<Props, State> {

    componentDidMount() {
        this.timer = setTimeout(()=>{
            SplashScreen.hide()
        }, 1000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <Navigator />
        )
    }

}

const styles = StyleSheet.create({

})

export default RootScene