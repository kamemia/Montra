import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import TransactionScreen from "../screens/Transaction/TransactionScreen";
import BudgetScreen from "../screens/Budget/BudgetScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Mwanzo(){
    return(
        <Tab.Navigator initialRouteName="Mwanzo" screenOptions={{headerShown:false}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen
                name="Transaction"
                component={TransactionScreen}
                options={{ title : 'Transaction', tabBarIcon:({size,color})=>(<Icon name="information" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen
                name="Budget"
                component={BudgetScreen}
                options={{ title : 'Budget', tabBarIcon:({size,color})=>(<Icon name="information" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title : 'Profile', tabBarIcon:({size,color})=>(<Icon name="information" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

function Navigation(props) {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Mwanzo" component={Mwanzo}/>
                <Stack.Screen name="TransactionScreen" component={TransactionScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation