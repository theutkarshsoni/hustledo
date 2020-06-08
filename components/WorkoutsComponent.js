import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        workouts: state.workouts
    };
}

class Workouts extends Component {   
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
                    onPress={() => navigate('List', { name: item.name, wid: item.id })}
                />
            );
        }

        if(this.props.workouts.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.workouts.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.workouts.errMess}</Text>
                </View>
            );
        }
        else {
            return(
                <FlatList
                    data={this.props.workouts.workouts}
                    renderItem={renderWorkoutItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    }
}

export default connect(mapStateToProps)(Workouts);