
import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity,ViewPropTypes} from 'react-native'

type Props = {
    title:string,
    titleStytle?:ViewPropTypes.style,
    icon:any,
    iconStyle?:ViewPropTypes.style,
    onPress?:Function,
};

type State = {
	
};

class Navigationltem extends PureComponent<Props,State>{

    render(){
        let {title,titleStytle,onPress,icon,iconStyle} = this.props
        let titleElement = title && (
            <Text style={[styles.title,titleStytle]}>{title}</Text>
        )
        let iconElement = icon && (
            <Image source={icon} style{[styles.icon,iconStyle]}/>
        )
        return(
            <TouchableOpacity onPress={onPress} style={styles.container}>
                {titleElement}
                {iconElement}
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:15,
        color:'#333333',
        margin:8,
    },
    icon:{
        width:27,
        height:27,
        margin:8,
    }
})

export default Navigationltem