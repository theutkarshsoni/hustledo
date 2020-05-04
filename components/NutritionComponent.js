import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView } from 'react-native';
import { NUTRITIONS } from '../shared/nutritions';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet } from 'react-native';
import { baseUrl } from '../shared/baseUrl';

const { width: screenWidth } = Dimensions.get('window');

function RenderTab(props){
    var data = props.data;
    var start = props.start;
    var end = props.end;
    var meal = props.meal;
    var lists = []; 
    var day = 1;
    var i = start;
    while(i < end){
        lists.push(
            <View key={i}>
                <View style={styles.dayContainer}>
                    <Text style={styles.day}>Day {day}</Text>
                </View>
                <RenderCarousel min={i} max={i+6} data={data}/>
            </View>
        );
        i = i + meal;
        day++;
    }
    return(
        <View>
            {lists}
        </View>
    );
}

function RenderCarousel(props) {
    const nutritions = props.data;
    const min = props.min;
    const max = props.max;
    return(
        <Carousel
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={nutritions.filter((e) => e.id >= min  && e.id < max )}
            renderItem={renderCarouselItem}
            hasParallaxImages={true}
        />
    );
}

function renderCarouselItem ({item, index}, parallaxProps) {
    return (
        <View style={styles.item}>
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
    );
}

class MusleTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            nutritions: NUTRITIONS
        }
    }

    render() {
        return(
            <ScrollView>
                <RenderTab data={this.state.nutritions.filter((e) => e.tag === "BM")} start={0} end={42} meal={6} />
                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
        );
    }
}

class LeanTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            nutritions: NUTRITIONS
        }
    }

    render() {
        return(
            <ScrollView>
                <RenderTab data={this.state.nutritions.filter((e) => e.tag === "LB" )} start={42} end={77} meal={5} />
                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
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

const tabNavigator = createMaterialTopTabNavigator();

function Nutrition() {
    return(
        <NavigationContainer independent={true}>
            <tabNavigator.Navigator
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
                <tabNavigator.Screen name="Build Musle" component={MusleTab}/>
                <tabNavigator.Screen name="Lean Body" component={LeanTab} />
            </tabNavigator.Navigator>
        </NavigationContainer>
    );
}

export default Nutrition;