/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
import {Heading3,PageText} from '../../widget/Text'
import screen from '../../common/screen'
import color from '../../widget/color'
import NearbyListScene from './NearbyListScene'

type Props = {
    
}

type State = {
    
};

class NearbyScene extends PureComponent<Props, State> {

	static navigationOptions = ({navigation}) => ({
		headerTitle: (
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center', padding:10}}>
                <Image 
                	source={require('../../img/public/icon_food_merchant_address.png')} 
                	style={{width:13,height:16,marginRight:5}} 
                />
                <Heading3>福建 鼓楼</Heading3>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon}/>
                <PageText>找附近的吃喝玩乐</PageText>
            </TouchableOpacity>
        )
	})

    render() {
        let titles = ['享美食','住酒店','爱玩乐','全部']
        let types = [
            ['热门','面包甜点','小吃快餐','川菜','日本料理','韩国料理','台湾菜','东北菜'],
            ['热门','商务出行','情侣住宿','情侣专属','高兴特惠'],
            ['热门','KTV','足浴按摩','洗浴汗蒸','电影院','美发','美甲'],
            []
        ]
        return (
            <ScrollableTabView 
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
                {titles.map((title,i)=>(
                    <NearbyListScene
                        tabLabel={title}
                        key={i}
                        types={types[i]}
                        navigation={this.props.navigation}
                    />
                ))}
            </ScrollableTabView>
        )
     }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.paper,
    },
    tabBarText:{
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline:{
        backgroundColor: '#FE566D'
    },
    searchBar:{
        flexDirection: 'row',
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        backgroundColor: '#eeeeee',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
})

export default NearbyScene