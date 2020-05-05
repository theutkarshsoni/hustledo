import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { YOGAS } from '../shared/yogas';

class Poses extends Component{

    constructor(props){
        super(props);
        this.state = {
            yogas: YOGAS
        }
    }

    render() {

        const renderPose = ({ item, index }) => {
            return(
                <ListItem
                    key={index}
                    leftAvatar={{ source: { uri: baseUrl + 'images/poses/' + item.images[0] }}}
                    title={item.name}
                    chevron
                    bottomDivider
                />
            );
        }

        return(
            <FlatList
                data={this.state.yogas}
                renderItem={renderPose}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Poses;