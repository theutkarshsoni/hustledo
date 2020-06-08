import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        trainings: state.trainings
    };
}

class Category extends Component {
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

        if(this.props.trainings.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.trainings.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.trainings.errMess}</Text>
                </View>
            );
        }
        else {
            return(
                <RenderTrainings ex={this.props.trainings.trainings.filter( (e) => list.includes(e.id) ) } />
            );
        }
    }
}

export default connect(mapStateToProps)(Category);