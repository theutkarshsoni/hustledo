import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tile, Icon } from 'react-native-elements';
import { CHALLENGES } from '../shared/challenges';
import { baseUrl } from '../shared/baseUrl';

class Challenges extends Component {

    constructor(props){
        super(props);
        this.state = {
            challenges: CHALLENGES
        }
    }

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
                        onPress={() => navigate('Poses', { name: 'Alphabetically Poses'})}
                    />
                </View>
            );
        }

        return(
            <ScrollView>
                <RenderChallenge challenge={this.state.challenges[0]}/>
                <RenderChallenge challenge={this.state.challenges[1]}/>
                <RenderChallenge challenge={this.state.challenges[2]}/>
                <RenderChallenge challenge={this.state.challenges[3]}/>
            </ScrollView>
        );
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

export default Challenges;