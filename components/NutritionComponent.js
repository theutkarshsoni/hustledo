import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView, Modal, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
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
    render() {
        var isLoading = this.props.nutritions.isLoading;
        var errMess = this.props.nutritions.errMess;
        var nutritions = this.props.nutritions.nutritions;

        class MusleTab extends Component {

            constructor(props){
                super(props);
                this.state = {
                    showModal: false,
                    activeDishId: 0
                }
            }
        
            toggleModal(dishId) {
                this.setState({ showModal: !this.state.showModal, activeDishId: dishId });
            }
        
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
                        <TouchableOpacity onPress={() => this.toggleModal(item.id)}>
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
        
                const RenderModal = () => {
                    const data = nutritions.filter((e) => e.id === this.state.activeDishId)[0];
                    return(
                        <Modal animationType = {"slide"} transparent = {false} visible = {this.state.showModal}
                            onDismiss = {() => this.toggleModal(this.state.activeDishId) }
                            onRequestClose = {() => this.toggleModal(this.state.activeDishId) }>
                            <ScrollView style={{ position: 'relative' }}>
                                <View style={styles.close}>
                                    <Icon name="times" type="font-awesome-5" size={25} onPress={() => this.toggleModal(this.state.activeDishId) } />
                                </View>
                                <Image source={{ uri: baseUrl + 'images/nutrition/' + data.image }} style={styles.dishImage} />
                                <Text style={styles.dishHead}>Ingredients</Text>
                                <View style={styles.dishText}>
                                {
                                    data.ingredients.map((item, i) => (
                                        <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="square-full" type="font-awesome-5" color="#57A2CC" size={5} style={{ marginRight: 5 }} />
                                            <Text style={{ textTransform: 'capitalize'}}>{item}</Text>
                                        </View>
                                    ))
                                }
                                </View>
                                <Text style={styles.dishHead}>Steps</Text>
                                <View style={styles.dishText}>
                                {
                                    data.steps.replace(/[.]/g, '.#').split('# ').map((item, i) => (
                                        <View key={i} style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text>Step {i+1}: </Text>
                                            </View>
                                            <View style={{ flex: 5 }}>
                                                <Text>{item}</Text>
                                            </View>
                                        </View>
                                    ))
                                }
                                </View>
                            </ScrollView>
                        </Modal>
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
                            <RenderModal />
                        </ScrollView>
                    );
                }
            }
        }
        
        class LeanTab extends Component {
        
            constructor(props){
                super(props);
                this.state = {
                    showModal: false,
                    activeDishId: 0
                }
            }
        
            toggleModal(dishId) {
                this.setState({ showModal: !this.state.showModal, activeDishId: dishId });
            }
        
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
                        <TouchableOpacity onPress={() => this.toggleModal(item.id)}>
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
        
                const RenderModal = () => {
                    const data = nutritions.filter((e) => e.id === this.state.activeDishId)[0];
                    return(
                        <Modal animationType = {"slide"} transparent = {false} visible = {this.state.showModal}
                            onDismiss = {() => this.toggleModal(this.state.activeDishId) }
                            onRequestClose = {() => this.toggleModal(this.state.activeDishId) }>
                            <ScrollView style={{ position: 'relative' }}>
                                <View style={styles.close}>
                                    <Icon name="times" type="font-awesome-5" size={25} onPress={() => this.toggleModal(this.state.activeDishId) } />
                                </View>
                                <Image source={{ uri: baseUrl + 'images/nutrition/' + data.image }} style={styles.dishImage} />
                                <Text style={styles.dishHead}>Ingredients</Text>
                                <View style={styles.dishText}>
                                {
                                    data.ingredients.map((item, i) => (
                                        <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="square-full" type="font-awesome-5" color="#57A2CC" size={5} style={{ marginRight: 5 }} />
                                            <Text>{item}</Text>
                                        </View>
                                    ))
                                }
                                </View>
                                <Text style={styles.dishHead}>Steps</Text>
                                <View style={styles.dishText}>
                                {
                                    data.steps.replace(/[.]/g, '.#').split('#').map((item, i) => (
                                        <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>Step{i+1}: {item}</Text>
                                        </View>
                                    ))
                                }
                                </View>
                            </ScrollView>
                        </Modal>
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
                            <RenderModal />
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
    },
    close: { 
        position: 'absolute',
        top: 5, 
        right: 20,
        zIndex: 9999
    },
    dishImage: {
        width: '100%',
        height: 250,
        marginBottom: 15
    },
    dishHead:{
        backgroundColor: "#57A2CC",
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    dishText: {
        padding: 10
    }
});

export default connect(mapStateToProps)(Nutrition);