/**
 * Copyright (c) 2017-present, Daniel
 * All rights reserved.
 *
 * @flow
 */

import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text, WebView, InteractionManager} from 'react-native'

type Props = {

}

type State = {

};

class WebScene extends PureComponent<Props, State> {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    })

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.props.navigation.setParams({title: '加载中'})
        })
    }

    onLoadEnd = (e) => {
        let title = e.nativeEvent.title
        if(title.length>0){
            this.props.navigation.setParams({title: title})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView 
                    style={styles.WebView}
                    source={{uri: this.props.navigation.state.params.url}}
                    onLoadEnd={this.onLoadEnd}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    WebView:{
        flex: 1,
    }
})

export default WebScene