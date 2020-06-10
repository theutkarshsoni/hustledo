import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView, Modal, Image, Dimensions, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        nutritions: state.nutritions
    };
}

const { width: screenWidth } = Dimensions.get('window');

const TabNavigator = createMaterialTopTabNavigator();

class Nutrition extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    // }
    
    // UNSAFE_componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    //     console.log('1');
    // }
    
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    //     console.log('2');
    // }
    
    // handleBackButtonClick() {
    //     console.log('3');
    //     this.props.navigation.goBack(null);
    //     return true;
    // }

    render() {
        const { navigate } = this.props.navigation;
        var isLoading = this.props.nutritions.isLoading;
        var errMess = this.props.nutritions.errMess;
        var nutritions = this.props.nutritions.nutritions;
        
        class MusleTab extends Component {
            render() {
                const RenderCarousel = (props) => {
                    const min = props.min;
                    const max = props.max;
                    return(
                        <Carousel
                            sliderWidth={screenWidth}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 60}
                            data={nutritions.filter((e) => e.id >= min  && e.id < max )}
                            renderItem={RenderCarouselItem}
                            hasParallaxImages={true}
                        />
                    );
                }
                
                const RenderCarouselItem = ({item, index}, parallaxProps) => {
                    return (
                        <TouchableOpacity onPress={() => navigate('Meal', {id: item.id})}>
                            <View style={styles.item} key={index}>
                                <ParallaxImage
                                    source={{ uri: baseUrl + 'images/nutrition/' + item.image }}
                                    containerStyle={styles.imageContainer}
                                    style={styles.image}
                                    parallaxFactor={0.4}
                                    {...parallaxProps}
                                />
                                <Text style={styles.title} numberOfLines={2}>
                                    { item.name }
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
                
                if(isLoading) {
                    return(
                        <Loading />
                    );
                }
                else if(errMess) {
                    return(
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>{errMess}</Text>
                        </View>
                    );
                }
                else {
                    return(
                        <ScrollView>
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 1</Text>
                            </View>
                            <RenderCarousel min={0} max={6} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 2</Text>
                            </View>
                            <RenderCarousel min={6} max={12} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 3</Text>
                            </View>
                            <RenderCarousel min={12} max={18} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 4</Text>
                            </View>
                            <RenderCarousel min={18} max={24} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 5</Text>
                            </View>
                            <RenderCarousel min={24} max={30} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 6</Text>
                            </View>
                            <RenderCarousel min={30} max={36} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 7</Text>
                            </View>
                            <RenderCarousel min={36} max={42} />
                            <View style={{ marginBottom: 50 }}></View>
                        </ScrollView>
                    );
                }
            }
        }
        
        class LeanTab extends Component {
            render() {        
                const RenderCarousel = (props) => {
                    const min = props.min;
                    const max = props.max;
                    return(
                        <Carousel
                            sliderWidth={screenWidth}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 60}
                            data={nutritions.filter((e) => e.id >= min  && e.id < max )}
                            renderItem={RenderCarouselItem}
                            hasParallaxImages={true}
                        />
                    );
                }
                
                const RenderCarouselItem = ({item, index}, parallaxProps) => {
                    return (
                        <TouchableOpacity onPress={() => navigate('Meal', {id: item.id})}>
                            <View style={styles.item} key={index}>
                                <ParallaxImage
                                    source={{ uri: baseUrl + 'images/nutrition/' + item.image }}
                                    containerStyle={styles.imageContainer}
                                    style={styles.image}
                                    parallaxFactor={0.4}
                                    {...parallaxProps}
                                />
                                <Text style={styles.title} numberOfLines={2}>
                                    { item.name }
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
                   
                if(isLoading) {
                    return(
                        <Loading />
                    );
                }
                else if(errMess) {
                    return(
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>{errMess}</Text>
                        </View>
                    );
                }
                else {
                    return(
                        <ScrollView>
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 1</Text>
                            </View>
                            <RenderCarousel min={42} max={47} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 2</Text>
                            </View>
                            <RenderCarousel min={47} max={52} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 3</Text>
                            </View>
                            <RenderCarousel min={52} max={57} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 4</Text>
                            </View>
                            <RenderCarousel min={57} max={62} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 5</Text>
                            </View>
                            <RenderCarousel min={62} max={67} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 6</Text>
                            </View>
                            <RenderCarousel min={67} max={72} />
                            <View style={styles.dayContainer}>
                                <Text style={styles.day}>Day 7</Text>
                            </View>
                            <RenderCarousel min={72} max={77} />
                            <View style={{ marginBottom: 50 }}></View>
                        </ScrollView>
                    );
                }
            }
        }

        return(
            <NavigationContainer independent={true}>
                <TabNavigator.Navigator
                    initialRouteName="Build Musle"
                    swipeEnabled={false}
                    tabBarOptions={{
                        activeTintColor: "#57A2CC",
                        inactiveTintColor: "#000",
                        indicatorStyle: {
                            backgroundColor: "#57A2CC"
                        },
                        labelStyle:{
                            fontWeight: "bold"
                        },
                        scrollEnabled: false
                    }}
                >
                    <TabNavigator.Screen name="Build Musle" component={MusleTab}/>
                    <TabNavigator.Screen name="Lean Body" component={LeanTab} />
                </TabNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    dayContainer:{
        marginVertical: 30,
        marginLeft: 30
    },
    day:{
        backgroundColor: "#57A2CC",
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold"
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 100,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    title:{
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center'
    }
});

export default connect(mapStateToProps)(Nutrition);