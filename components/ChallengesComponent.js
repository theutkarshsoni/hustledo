import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tile, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        challenges: state.challenges
    };
}

class Challenges extends Component {
    render() {

        const { navigate } = this.props.navigation;

        function RenderChallenge(props) {

            var challenge = props.challenge;
            
            return(
                <View style={{ flex: 1, borderBottomWidth: 1, borderColor: "white" }}>
                    <Tile
                        imageSrc={{ uri: baseUrl + 'images/challenges/' + challenge.image }}
                        title={challenge.name}
                        caption={
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Icon name='clock' type='font-awesome-5' size={16} color='white' /> 
                                    <Text style={styles.text}>{challenge.time} MIN</Text>
                                </View>
                                <View style={styles.column}>
                                    <Icon name='tasks' type='font-awesome-5' size={16} color='white' /> 
                                    <Text style={styles.text}>{challenge.workouts} WORKOUTS</Text>
                                </View>
                                <View style={styles.column}>
                                    <Icon name='burn' type='font-awesome-5' size={16} color='white' /> 
                                    <Text style={styles.text}>{challenge.kcal} KCAL</Text>
                                </View>
                            </View>
                        }
                        featured
                        titleStyle={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                        imageContainerStyle={{
                            backgroundColor: 'rgba(87, 162, 204, 0.5)'
                        }}
                        onPress={() => navigate('Day', { name: challenge.name, cid: challenge.id })}
                    />
                </View>
            );
        }
        
        if(this.props.challenges.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.challenges.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.challenges.errMess}</Text>
                </View>
            );
        }
        else {
            return(
                <ScrollView>
                    <RenderChallenge challenge={this.props.challenges.challenges[0]}/>
                    <RenderChallenge challenge={this.props.challenges.challenges[1]}/>
                    <RenderChallenge challenge={this.props.challenges.challenges[2]}/>
                    <RenderChallenge challenge={this.props.challenges.challenges[3]}/>
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    row:{ 
        flexDirection: 'row'
    },
    column: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    text: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: 'white'
    }
});

export default connect(mapStateToProps)(Challenges);