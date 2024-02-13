import React from 'react'
import { SafeAreaView , Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'
import { Avatar } from '@react-native-material/core'
import Icon from 'react-native-ionicons'
function ProfileScreen() {
  return (
    <SafeAreaView style={style.root}>
        <View style={style.acc}>
            <Avatar style={style.avatar} label="Iriana Saliha" size={80}/>
            {/* <Text style={style.username}>Username</Text> */}
            <Text style={style.user}>Iriana Saliha</Text>
        </View>
        <View style={style.container}>
            <TouchableOpacity>
                <View style={style.content}>
                    <Icon name='add'/>
                    <Text style={style.list}>Account</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.content}>
                    {/* <Icon ... /> */}
                    <Text style={style.list}>Settings</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.content}>
                    {/* <Icon ... /> */}
                    <Text style={style.list}>Export Data</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.content}>
                    {/* <Icon ... /> */}
                    <Text style={style.logout}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    root:{
        flex:4,
        backgroundColor:'#F6F6F6'
    },
    avatar:{
        marginHorizontal:20,
        marginVertical:20,
        paddingRight:30,
        paddingBottom:20
    },
    acc:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        paddingTop:20
    },
    username:{
        fontSize:22,
        textAlign:'center',
        marginBottom:10
    },
    container:{
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        padding:10,
        marginHorizontal:30
    },
    user:{
        fontSize:22,
        textAlign:'center',
        fontWeight:'bold',
        color:'black',
        marginTop:20
    },
    content:{
        padding:20,
        alignContent:'stretch',
        borderBottomWidth:0.2,
        borderBottomColor:'grey',
        flexDirection:'row'
    },
    logout:{
        fontWeight:'bold',
        color:'red',
        fontSize:18
    },
    list:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    }
})
export default ProfileScreen