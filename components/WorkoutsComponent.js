import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { WORKOUTS } from '../shared/workouts';

class Workouts extends Component {

    constructor(props){
        super(props);
        this.state = {
            workouts: WORKOUTS
        }
    }
    
    render(){

        const { navigate } = this.props.navigation;

        const renderWorkoutItem = ({ item, index }) => {
            return(
                <ListItem
                    key={index}
                    leftAvatar={{ source: { uri: baseUrl + 'images/workouts/' + item.image }, overlayContainerStyle: { borderRadius: 0, width: 100 }, containerStyle: { height: 75 } }}
                    title={item.name}
                    subtitle={item.time + ' MIN, ' + item.exercises.length + ' EXERCISES, ' + item.kcal + ' KCAL' }
                    chevron
                    bottomDivider
                    titleStyle={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingLeft: 75
                    }}
                    subtitleStyle={{
                        fontSize: 10,
                        paddingLeft: 75
                    }}
                    onPress={() => navigate('List', { name: item.name, exercises: item.exercises })}
                />
            );
        }

        return(
            <FlatList
                data={this.state.workouts}
                renderItem={renderWorkoutItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Workouts;