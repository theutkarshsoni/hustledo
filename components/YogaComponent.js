import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tile } from 'react-native-elements';

class Yoga extends Component {
    render() {
        return(
            <View style={{ flex: 1}}>
                <View style={{ flex: 1, borderBottomWidth: 3, borderColor: "white" }}>
                    <Tile
                        imageSrc={require('../assets/home_yoga_1.webp')}
                        title='Poses'
                        caption='Freedom to practice whatever you want'
                        featured
                        titleStyle={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                        imageContainerStyle={{
                            backgroundColor: 'rgba(87, 162, 204, 0.5)'
                        }}
                    />
                </View>
                <View style={{ flex: 1, borderTopWidth: 3, borderColor: "white" }}>
                    <Tile
                        imageSrc={require('../assets/home_yoga_2.webp')}
                        title='Classes'
                        caption='Focus on flexibility, strength and balance'
                        featured
                        titleStyle={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                        imageContainerStyle={{
                            backgroundColor: 'rgba(87, 162, 204, 0.5)'
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default Yoga;