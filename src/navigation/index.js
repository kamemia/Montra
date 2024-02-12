import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons"

//Screens
import TransactionScreen from "../screens/Transaction/TransactionScreen";
import BudgetScreen from "../screens/Budget/BudgetScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Tab.Screen
                name="Budget"
                component={BudgetScreen}
                options={{ title : 'Home', tabBarIcon:({size,color})=>(<Icon name="information" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen
                name="Transaction"
                component={TransactionScreen}
                options={{ title : 'Transaction', tabBarIcon:({size,color})=>(<Icon name="information" size={size} color={color} />
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
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="TransactionScreen" component={TransactionScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation