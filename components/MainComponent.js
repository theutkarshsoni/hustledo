import React, { Component } from 'react';
import Home from './HomeComponent';
import Fitness from './FitnessComponent';
import Category from './CategoryComponent';
import Yoga from './YogaComponent';
import Nutrition from './NutritionComponent';
import More from './MoreComponent';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const HomeNavigator = createStackNavigator();
const FitnessNavigator = createStackNavigator();
const NutritionNavigator = createStackNavigator();
const YogaNavigator = createStackNavigator();
const MoreNavigaotr = createStackNavigator();
const MainNavigator = createDrawerNavigator();

const HeaderOptions = {
    headerStyle: {
        backgroundColor: '#57A2CC',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: "#fff"
    }
};

function getHomeNavigator() {
    return(
        <HomeNavigator.Navigator
            initialRouteName="Home"
            screenOptions={HeaderOptions}
        >
            <HomeNavigator.Screen name="Welcome, Hustler!" component={Home} 
                options={ ({ navigation }) => ({ 
                        headerLeft: () =>  <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    })
                } 
            />
        </HomeNavigator.Navigator>
    );
}

function getFitnessNavigator() {
    return(
        <FitnessNavigator.Navigator
            initialRouteName="Fitness"
            screenOptions={HeaderOptions}
        >
            <FitnessNavigator.Screen name="Choose a category" component={Fitness} 
                options={ ({ navigation }) => ({ 
                        headerLeft: () =>  <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    })
                } 
            />
            <FitnessNavigator.Screen name="Category" component={Category} options={({ route }) => ({ title: route.params.name })} />
        </FitnessNavigator.Navigator>
    );
}

function getYogaNavigator() {
    return(
        <YogaNavigator.Navigator
            initialRouteName="Yoga"
            screenOptions={HeaderOptions}
        >
            <YogaNavigator.Screen name="All or Categorized ?" component={Yoga} 
                options={ ({ navigation }) => ({
                    headerLeft: () => <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                }) }
            />
        </YogaNavigator.Navigator>
    );
}

function getNutritionNavigator() {
    return(
        <NutritionNavigator.Navigator
            initialRouteName="Nutrition"
            screenOptions={HeaderOptions}
        >
            <NutritionNavigator.Screen name="Nutrition" component={Nutrition} 
                options={ ({ navigation }) => ({ 
                        headerLeft: () => <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    })
                }
            />
        </NutritionNavigator.Navigator>
    );
}

function getMoreNavigator() {
    return(
        <MoreNavigaotr.Navigator
            initialRouteName="More"
            screenOptions={HeaderOptions}
        >
            <MoreNavigaotr.Screen name="More" component={More} 
                options={ ({ navigation }) => ({ 
                        headerLeft: () =>  <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    })
                } 
            />
        </MoreNavigaotr.Navigator>
    );
}

function CustomDrawerContent(props) {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <Image source={require('../assets/logo.png')} style={styles.drawerImage} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
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
                    }}
                    drawerContent={CustomDrawerContent}
                >
                    <MainNavigator.Screen name="Home" component={getHomeNavigator} 
                        options={{ drawerLabel: 'Home', drawerIcon: () => <Icon name='home' type='font-awesome-5' color='white' />}} 
                    />
                    <MainNavigator.Screen name="Fitness" component={getFitnessNavigator} 
                        options={{ drawerLabel: 'Fitness', drawerIcon: () => <Icon name='dumbbell' type='font-awesome-5' color='white' />}}
                    />
                    <MainNavigator.Screen name="Yoga" component={getYogaNavigator}
                        options={{ drawerLabel: 'Yoga', drawerIcon: () => <Icon name='om' type='font-awesome-5' color='white' /> }}
                    />
                    <MainNavigator.Screen name="Nutrition" component={getNutritionNavigator}
                        options={{ drawerLabel: 'Nutrition', drawerIcon: () => <Icon name='utensils' type='font-awesome-5' color='white' /> }}
                    />
                    <MainNavigator.Screen name="More" component={getMoreNavigator} 
                        options={{ drawerLabel: 'More', drawerIcon: () => <Icon name='plus-circle' type='font-awesome-5' color='white' />}}
                    />
                </MainNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    drawerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerImage: {
        width: 150,
        height: 150,
        marginBottom: 50
    }
})

export default Main;