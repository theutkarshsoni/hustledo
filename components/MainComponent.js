import React, { Component } from 'react';
import Home from './HomeComponent';
import Fitness from './FitnessComponent';
import More from './MoreComponent';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeNavigator = createStackNavigator();
const FitnessNavigator = createStackNavigator();
const MoreNavigaotr = createStackNavigator();
const MainNavigator = createDrawerNavigator();

function getHomeNavigator({ navigation }) {
    return(
        <HomeNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#57A2CC',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: "#fff"
                },
                headerLeft: () => <Icon name='bars' type='font-awesome' color='white' containerStyle={{ paddingLeft: 15 }} onPress={() => navigation.toggleDrawer()} />
            }}
        >
            <HomeNavigator.Screen name="Welcome, Hustler!" component={Home} />
        </HomeNavigator.Navigator>
    );
}

function getFitnessNavigator({ navigation }) {
    return(
        <FitnessNavigator.Navigator
            initialRouteName="ListOfCategories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#57A2CC',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: "#fff"
                },
                headerLeft: () => <Icon name='bars' type='font-awesome' color='white' containerStyle={{ paddingLeft: 15 }} onPress={() => navigation.toggleDrawer()} />
            }}
        >
            <FitnessNavigator.Screen name="Choose a category" component={Fitness} />
        </FitnessNavigator.Navigator>
    );
}

function getMoreNavigator({ navigation }) {
    return(
        <MoreNavigaotr.Navigator
            initialRouteName="More"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#57A2CC',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: "#fff"
                },
                headerLeft: () => <Icon name='bars' type='font-awesome' color='white' containerStyle={{ paddingLeft: 15 }} onPress={() => navigation.toggleDrawer()} />
            }}
        >
            <MoreNavigaotr.Screen name="More" component={More} />
        </MoreNavigaotr.Navigator>
    );
}

class Main extends Component {
    render(){
        return(
            <NavigationContainer>
                <MainNavigator.Navigator 
                    drawerStyle={{ 
                        backgroundColor: '#57A2CC'
                    }} 
                    drawerContentOptions={{
                        labelStyle:{
                            color: '#fff',
                            fontSize: 16
                        },
                        style:{
                            paddingTop: 20
                        }
                    }}>
                    <MainNavigator.Screen name="Home" component={getHomeNavigator} 
                        options={{ drawerLabel: 'Home', drawerIcon: () => <Icon name='home' type='font-awesome' color='white' />}}></MainNavigator.Screen>
                    <MainNavigator.Screen name="ListOfCategories" component={getFitnessNavigator} 
                        options={{ drawerLabel: 'Fitness', drawerIcon: () => <Icon name='dumbbell' type='font-awesome-5' size={18} color='white' />}}></MainNavigator.Screen>
                    <MainNavigator.Screen name="More" component={getMoreNavigator} 
                        options={{ drawerLabel: 'More', drawerIcon: () => <Icon name='plus' type='font-awesome' color='white' />}}></MainNavigator.Screen>
                </MainNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;