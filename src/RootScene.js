
import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation'
import TabBarltem from './wigdet/TabBarltem'
import color from './wigdet/color'
import HomeScene from './scene/Home/HomeScene'
import MineScene from './scene/Mine/MineScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import OrderScene from './scene/Order/OrderScene'
import WebScene from './scene/Web/WebScene'

class RootScene extends PureComponent<>{

    render(){
        return(
            <Navigator/>
        )
    }

}

const Tab = TabNavigator({
	Home:{
		screen:HomeScene,
		navigationOptions:()=>({
			tabBarLabel:'团购',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarltem
					tintColor={tintColor}
					focused={focused}
					normalImage={require('./img/tabbar/tabbar_homepage.png')}
					selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
				/>
			)
		})
	},
	Nearby:{
		screen:NearbyScene,
		navigationOptions:()=>({
			tabBarLabel:'附近',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarltem
					tintColor={tintColor}
					focused={focused}
					normalImage={require('./img/tabbar/tabbar_merchant.png')}
					selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
				/>
			)
		})
	},
	Order:{
		screen:OrderScene,
		navigationOptions:()=>({
			tabBarLabel:'订单',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarltem
					tintColor={tintColor}
					focused={focused}
					normalImage={require('./img/tabbar/tabbar_order.png')}
					selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
				/>
			)
		})
	},
	Mine:{
		screen:MineScene,
		navigationOptions:()=>({
			tabBarLabel:'我的',
			tabBarIcon:({focused,tintColor})=>(
				<TabBarltem
					tintColor={tintColor}
					focused={focused}
					normalImage={require('./img/tabbar/tabbar_mine.png')}
					selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
				/>
			)
		})
	}
}, {
	tabBarComponent:TabBarBottom,
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //初始化是否加载所有页面
    lazy: true,
    //设置Tab标签的属性
    tabBarOptions: {
    	//是否显示图标
        showIcon: true,
        //label和icon的前景色 活跃状态下（选中）
        activeTintColor: color.primary,
        //label和icon的前景色 活跃状态下（未选中）
        inactiveTintColor: color.gray,
        //TabNavigator背景颜色
        style:{backgroundColor:'white'}
    }
})

const Navigator = StackNavigator({
	WebScene:{screen:HomeScene},
})

const styles = StyleSheet.create({

})

export default RootScene