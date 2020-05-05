import React, { Component } from 'react';
import Home from './HomeComponent';
import Fitness from './FitnessComponent';
import Category from './CategoryComponent';
import Workouts from './WorkoutsComponent';
import Yoga from './YogaComponent';
import Poses from './PosesComponent';
import Classes from './ClassesComponent';
import Level from './LevelComponent';
import Nutrition from './NutritionComponent';
import More from './MoreComponent';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const HomeNavigator = createStackNavigator();
const FitnessNavigator = createStackNavigator();
const WorkoutsNavigator = createStackNavigator();
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
            <HomeNavigator.Screen name="Home" component={Home} 
                options={ ({ navigation }) => ({ 
                        title: 'Welcome, Hustler!',
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
            <FitnessNavigator.Screen name="Fitness" component={Fitness} 
                options={ ({ navigation }) => ({
                        title: 'Choose a category',
                        headerLeft: () =>  <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    })
                } 
            />
            <FitnessNavigator.Screen name="Category" component={Category} options={({ route }) => ({ title: route.params.name })} />
        </FitnessNavigator.Navigator>
    );
}

function getWorkoutsNavigator() {
    return(
        <WorkoutsNavigator.Navigator
            initialRouteName="Workouts"
            screenOptions={HeaderOptions}
        >
            <WorkoutsNavigator.Screen name="Workouts" component={Workouts} 
                options={ ({ navigation }) => ({
                        title: 'Go for a workout',
                        headerLeft: () => <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    })
                }
            />
        </WorkoutsNavigator.Navigator>
    );
}

function getYogaNavigator() {
    return(
        <YogaNavigator.Navigator
            initialRouteName="Yoga"
            screenOptions={HeaderOptions}
        >
            <YogaNavigator.Screen name="Yoga" component={Yoga} 
                options={ ({ navigation }) => ({
                    title: 'All or Categorized?',
                    headerLeft: () => <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                }) }
            />
            <YogaNavigator.Screen name="Poses" component={Poses} options={({ route }) => ({ title: route.params.name })} />
            <YogaNavigator.Screen name="Classes" component={Classes} options={{ title: 'Select a class' }}  />
            <YogaNavigator.Screen name="Level" component={Level} options={{ title: 'Pick a level' }} />
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
                        title: 'Meals as per goal',
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
                        title:'Help us grow',
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
                    <MainNavigator.Screen name="Workouts" component={getWorkoutsNavigator}
                        options={{ drawerLabel: 'Workouts', drawerIcon: () => <Icon name='fire-alt' type='font-awesome-5' color='white' /> }}
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