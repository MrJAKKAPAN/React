import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
               <View style={style.container}>
                   <View style={{with:50, height: 50, background: "blue" ,flex: 1}}/>
                   <View style={{with:50, height: 50, background: "green" ,flex: 1}}/>
                   <View style={{with:50, height: 50, background: "red" ,flex: 1}}/>   
                </View> 
            </div>
        )
    }
}

const style = StyleSheet.create({
    container:{
        background: "pink"
        flex: 1,
        paddingTop: Platform.OS == "ios" ? 25:0,
    }
})
