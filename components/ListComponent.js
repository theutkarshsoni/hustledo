import React, { Component } from 'react';
import { View, Text } from 'react-native';

class List extends Component {
    render(){
        const { exercises } = this.props.route.params;
        return(
            <View>
                <Text>{exercises}</Text>
            </View>
        );
    }
}

export default List;