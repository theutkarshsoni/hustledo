import React, { Component } from 'react';
import Home from './HomeComponent';
import Fitness from './FitnessComponent';
import Category from './CategoryComponent';
import Workouts from './WorkoutsComponent';
import List from './ListComponent';
import Exercise from './ExerciseComponent';
import Preview from './PreviewComponent';
import Challenges from './ChallengesComponent';
import Day from './DayComponent';
import Yoga from './YogaComponent';
import Poses from './PosesComponent';
import Classes from './ClassesComponent';
import Level from './LevelComponent';
import Nutrition from './NutritionComponent';
import More from './MoreComponent';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { fetchCategories, fetchTrainings, fetchWorkouts, fetchChallenges,  fetchExercises, fetchYogas, fetchNutritions } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        categories: state.categories,
        trainings: state.trainings,
        workouts: state.workouts,
        challenges: state.challenges,
        exercises: state.exercises,
        yogas: state.yogas,
        nutritions: state.nutritions
    };
}

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()), 
    fetchTrainings: () => dispatch(fetchTrainings()), 
    fetchWorkouts: () => dispatch(fetchWorkouts()), 
    fetchChallenges: () => dispatch(fetchChallenges()),  
    fetchExercises: () => dispatch(fetchExercises()), 
    fetchYogas: () => dispatch(fetchYogas()), 
    fetchNutritions: () => dispatch(fetchNutritions())
})

const HomeNavigator = createStackNavigator();
const FitnessNavigator = createStackNavigator();
const WorkoutsNavigator = createStackNavigator();
const ChallengesNavigator = createStackNavigator();
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
            <FitnessNavigator.Screen name="Exercise" component={Exercise} options={ ({ route }) => ({ title: route.params.name }) } />
            <FitnessNavigator.Screen name="Preview" component={Preview} options={ ({ route }) => ({ title: route.params.name }) } />
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
            <WorkoutsNavigator.Screen name="List" component={List} options={ ({ route }) => ({ title: route.params.name }) } />
            <WorkoutsNavigator.Screen name="Exercise" component={Exercise} options={ ({ route }) => ({ title: route.params.name }) } />
            <WorkoutsNavigator.Screen name="Preview" component={Preview} options={ ({ route }) => ({ title: route.params.name }) } />
        </WorkoutsNavigator.Navigator>
    );
}

function getChallengesNavigator() {
    return(
        <ChallengesNavigator.Navigator
            initialRouteName="Challenges"
            screenOptions={HeaderOptions}
        >
            <ChallengesNavigator.Screen name="Challenges" component={Challenges}
                options={ ({ navigation }) => ({
                        title: 'Take a challenge',
                        headerLeft: () => <Icon name='bars' type='font-awesome-5' color='white' containerStyle={{ paddingLeft: 20 }} onPress={() => navigation.toggleDrawer()} />
                    }) 
                }
            />
            <ChallengesNavigator.Screen name="Day" component={Day} options={ ({ route }) => ({ title: route.params.name })} />
            <ChallengesNavigator.Screen name="List" component={List} options={ ({ route }) => ({ title: route.params.name }) } />
            <ChallengesNavigator.Screen name="Exercise" component={Exercise} options={ ({ route }) => ({ title: route.params.name }) } />
            <ChallengesNavigator.Screen name="Preview" component={Preview} options={ ({ route }) => ({ title: route.params.name }) } />
        </ChallengesNavigator.Navigator>
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
            <YogaNavigator.Screen name="Exercise" component={Exercise} options={ ({ route }) => ({ title: route.params.name }) } />
            <YogaNavigator.Screen name="Preview" component={Preview} options={ ({ route }) => ({ title: route.params.name }) } />
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
            <Text style={styles.line}>Developed with ❤️ by Utkarsh Soni</Text>
        </DrawerContentScrollView>
    );
}

class Main extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchTrainings();
        this.props.fetchWorkouts();
        this.props.fetchChallenges();
        this.props.fetchExercises();
        this.props.fetchYogas();
        this.props.fetchNutritions();
    }

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
                        }
                    }}
                    drawerContent={CustomDrawerContent}
                >
                    <MainNavigator.Screen name="Home" component={getHomeNavigator} 
                        options={{ drawerLabel: 'Home', drawerIcon: () => <Icon name='home' type='font-awesome-5' color='white' size={20} />}} 
                    />
                    <MainNavigator.Screen name="Fitness" component={getFitnessNavigator} 
                        options={{ drawerLabel: 'Fitness', drawerIcon: () => <Icon name='dumbbell' type='font-awesome-5' color='white' size={18} />}}
                    />
                    <MainNavigator.Screen name="Workouts" component={getWorkoutsNavigator}
                        options={{ drawerLabel: 'Workouts', drawerIcon: () => <Icon name='fire-alt' type='font-awesome-5' color='white' size={26} /> }}
                    />
                    <MainNavigator.Screen name="Challenges" component={getChallengesNavigator}
                        options={{ drawerLabel: 'Challenges', drawerIcon: () => <Icon name='trophy' type='font-awesome' color='white' size={26} /> }}
                    />
                    <MainNavigator.Screen name="Yoga" component={getYogaNavigator}
                        options={{ drawerLabel: 'Yoga', drawerIcon: () => <Icon name='om' type='font-awesome-5' color='white' /> }}
                    />
                    <MainNavigator.Screen name="Nutrition" component={getNutritionNavigator}
                        options={{ drawerLabel: 'Nutrition', drawerIcon: () => <Icon name='hamburger' type='font-awesome-5' color='white' /> }}
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
        marginBottom: 30
    },
    line: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
        marginTop: 20 
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);