import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Video } from 'expo-av';

class Preview extends Component {

    render() {
        const { link } = this.props.route.params;
        const { width } = Dimensions.get('window');
        const { height } = Dimensions.get('window');
        return(
            <View style={{ backgroundColor: '#fff' }}>
                <Video
                    source={{ uri: link }}
                    isLooping={true}
                    shouldPlay
                    resizeMode="contain"
                    style={{ width, height }}
                />
            </View>
        );
    }
}

export default Preview;