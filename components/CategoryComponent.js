import React, { Component } from 'react';
import { TRAININGS } from '../shared/trainings';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

function RenderTrainings(props) {
    const ex = props.ex;

    const renderTrainingItem = ({item, index}) => {
        return(
            <ListItem
                key={index}
                leftAvatar={{ source: { uri: baseUrl + 'images/training_p/' + item.images[0] }}}
                title={item.name}
                chevron
                bottomDivider
                button
                onPress={() => console.log('clicked')}
            />
        );
    }

    return(
        <FlatList 
            data={ex}
            renderItem={renderTrainingItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

class Category extends Component {

    constructor(props){
        super(props);
        this.state = {
            trainings: TRAININGS
        }
    }

    render(){
        const { list } = this.props.route.params;
        return(
            <RenderTrainings ex={this.state.trainings.filter( (e) => list.includes(e.id) ) } />
        );
    }
}

export default Category;