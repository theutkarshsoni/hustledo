import React, { Component } from 'react';
import { TRAININGS } from '../shared/trainings';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Category extends Component {

    constructor(props){
        super(props);
        this.state = {
            trainings: TRAININGS
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        const { list } = this.props.route.params;

        const RenderTrainings = (props) => {
            const ex = props.ex;
        
            const renderTrainingItem = ({item, index}) => {
                return(
                    <ListItem
                        key={index}
                        leftAvatar={{ source: { uri: baseUrl + 'images/trainings/' + item.images[0] }}}
                        title={item.name}
                        chevron
                        bottomDivider
                        button
                        onPress={() => navigate('Exercise', { name: item.name, tag: 'Fitness', eid: item.id })}
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

        return(
            <RenderTrainings ex={this.state.trainings.filter( (e) => list.includes(e.id) ) } />
        );
    }
}

export default Category;