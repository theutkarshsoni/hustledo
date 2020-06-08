import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        yogas: state.yogas
    };
}

class Poses extends Component{
    render() {
        const { navigate } = this.props.navigation;
        const { name } = this.props.route.params;

        if(name === 'Alphabetically Poses') {
            var list = this.props.yogas.yogas;
        }
        else {
            var list = this.props.yogas.yogas.filter((e) => e.classLevel.includes(name));
        }

        const HeaderContent = () => {
            switch(name){
                case 'Balance Beginner': var time = 9; var num = 14; break;
                case 'Balance Intermediate': var time = 13; var num = 21; break;
                case 'Balance Advanced': var time = 23; var num = 33; break;
                case 'Strength Beginner': var time = 10; var num = 19; break;
                case 'Strength Intermediate': var time = 17; var num = 22; break;
                case 'Strength Advanced': var time = 24; var num = 27; break;
                case 'Flexibility Beginner': var time = 15; var num = 28; break;
                case 'Flexibility Intermediate': var time = 21; var num = 29; break;
                case 'Flexibility Advanced': var time = 27; var num = 23; break;
                default: var time = 0; var num = 0;
            }
            if(name === 'Alphabetically Poses') {
                return(
                    <View></View>
                );
            }
            else{
                return(
                    <View style={{ paddingVertical: 20, backgroundColor: 'rgba(87, 162, 204, 0.5)' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='clock' type='font-awesome-5' size={20} color='white' /> 
                                <Text style={{ marginLeft: 10, color: 'white' }}>{time} min</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='tasks' type='font-awesome-5' size={20} color='white' /> 
                                <Text style={{ marginLeft: 10, color: 'white' }}>{num} poses</Text>
                            </View>
                        </View>
                    </View>
                );
            }
        }

        const renderPose = ({ item, index }) => {
            return(
                <ListItem
                    key={index}
                    leftAvatar={{ source: { uri: baseUrl + 'images/poses/' + item.images[0] }}}
                    title={item.name}
                    chevron
                    bottomDivider
                    onPress={() => navigate('Exercise', { name: item.name, tag: 'Yoga', eid: item.id })}
                />
            );
        }

        if(this.props.yogas.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.yogas.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.yogas.errMess}</Text>
                </View>
            );
        }
        else {
            return(
                <SafeAreaView>
                    <HeaderContent />
                    <FlatList
                        data={list}
                        renderItem={renderPose}
                        keyExtractor={item => item.id.toString()}
                        contentContainerStyle= {{ 
                            paddingBottom: 60
                        }}
                    />
                </SafeAreaView>
            );
        }
    }
}

export default connect(mapStateToProps)(Poses);