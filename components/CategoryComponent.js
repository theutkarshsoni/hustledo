import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Category extends Component {
    render(){
        const { trainings } = this.props.route.params;
        return(
            <View>
                <Text>{trainings}</Text>
            </View>
        );
    }
}

export default Category;