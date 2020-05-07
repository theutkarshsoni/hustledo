import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { CHALLENGES } from '../shared/challenges';

class Day extends Component {

    constructor(props) {
        super(props);
        this.state = {
            challenges: CHALLENGES
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { cid } = this.props.route.params;

        function RenderDay(props) {
            var day = props.day;
            return(
                <TouchableOpacity onPress={() => navigate('List', { name: 'DAY ' + (parseInt(day.id, 10) + 1), cid: cid, did: day.id })}>
                    <ImageBackground source={{ uri: baseUrl + 'images/challenges/' + day.image }} style={styles.image}>
                        <View style={styles.textContainter}>
                            <Text style={styles.heading}>DAY {day.id + 1}</Text>
                            <Text style={styles.subheading}>{day.parts}</Text>
                            <RenderRow day={day}/>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            );
        }

        function RenderRow(props) {
            var day = props.day;

            if(day.parts === 'CARDIO') {
                return(
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.text}>20 - 40 MIN</Text>
                        </View>
                    </View>
                );
            }
            else if(day.parts === 'ACTIVE REST DAY'){
                return(
                    <View></View>
                );
            }
            else{
                return(
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Icon name='clock' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{day.time} MIN</Text>
                        </View>
                        <View style={styles.column}>
                            <Icon name='tasks' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{day.exercises.length} EXERCISES</Text>
                        </View>
                        <View style={styles.column}>
                            <Icon name='burn' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{day.kcal} KCAL</Text>
                        </View>
                    </View>
                );
            }
        }

        return(
            <ScrollView>
                <RenderDay day={this.state.challenges[cid].days[0]}/>
                <RenderDay day={this.state.challenges[cid].days[1]}/>
                <RenderDay day={this.state.challenges[cid].days[2]}/>
                <RenderDay day={this.state.challenges[cid].days[3]}/>
                <RenderDay day={this.state.challenges[cid].days[4]}/>
                <RenderDay day={this.state.challenges[cid].days[5]}/>
                <RenderDay day={this.state.challenges[cid].days[6]}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover'
    },
    textContainter: {
        paddingVertical: 25,
        backgroundColor: 'rgba(87, 162, 204, 0.5)'
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 15,
        textAlign: 'center'
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 30,
        textAlign: 'center'
    },
    row:{ 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10, 
        color: 'white'
    }
})

export default Day;