import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tile } from 'react-native-elements';

class Yoga extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return(
            <View style={{ flex: 1}}>
                <View style={{ flex: 1, borderBottomWidth: 3, borderColor: "white" }}>
                    <Tile
                        imageSrc={require('../assets/home_yoga_1.webp')}
                        title='POSES'
                        caption='FREEDOM TO PRACTICE WHATEVER YOU WANT'
                        featured
                        titleStyle={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                        captionStyle={{
                            fontSize: 12
                        }}
                        imageContainerStyle={{
                            backgroundColor: 'rgba(87, 162, 204, 0.5)'
                        }}
                        onPress={() => navigate('Poses', { name: 'Alphabetically Poses'})}
                    />
                </View>
                <View style={{ flex: 1, borderTopWidth: 3, borderColor: "white" }}>
                    <Tile
                        imageSrc={require('../assets/home_yoga_2.webp')}
                        title='CLASSES'
                        caption='FOCUS ON FLEXIBILITY, STRENGTH AND BALANCE'
                        featured
                        titleStyle={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                        captionStyle={{
                            fontSize: 12
                        }}
                        imageContainerStyle={{
                            backgroundColor: 'rgba(87, 162, 204, 0.5)'
                        }}
                        onPress={() => navigate('Classes', {})}
                    />
                </View>
            </View>
        );
    }
}

export default Yoga;