import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { EXERCISES } from '../shared/exercises';
import { WORKOUTS } from '../shared/workouts';
import { baseUrl } from '../shared/baseUrl';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            workouts: WORKOUTS,
            exercises: EXERCISES
        }
    }

    render(){
        const { wid } = this.props.route.params;
        
        var workout = this.state.workouts.filter((e) => e.id === wid);

        function RenderView(props) {
            var exercises = props.exercises;
            var rounds = props.rounds;
            var lists = [];
            var i = 1;
            while(i <= rounds){
                lists.push(
                    <View key={i}>
                        <Text style={styles.round}>ROUND {i}</Text>
                        <RenderRounds exercises={exercises}/>
                    </View>
                );
                i++;
            }
            return(
                <ScrollView>
                    {lists}
                </ScrollView>
            );
        }

        function RenderRounds(props){

            const exercises = props.exercises;

            return(
                <FlatList
                    data={exercises.filter((e) => workout[0].exercises.includes(e.id))}
                    renderItem={renderExerciseItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }

        const renderExerciseItem = ({ item, index }) => {
            return(
                <ListItem
                    key={index}
                    leftAvatar={{ source: { uri: baseUrl + 'images/exercises_p/' + item.images[0] } }}
                    title={item.name}
                    subtitle={
                        <View style={styles.column}>
                            <Icon name='clock' type='font-awesome-5' size={12}  /> 
                            <Text style={{ marginLeft: 10, fontSize: 10 }}>{workout[0].duration} SECONDS</Text>
                        </View>
                    }
                    titleStyle={{
                        fontSize: 14,
                        marginBottom: 5
                    }}
                    chevron
                    bottomDivider
                />
            );
        }
        
        return(
            <View style={{ marginBottom: 160 }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>{workout[0].name}</Text>
                    <Text style={styles.subheading}>{workout[0].accessories}</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Icon name='clock' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{workout[0].time} MIN</Text>
                        </View>
                        <View style={styles.column}>
                            <Icon name='tasks' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{workout[0].exercises.length} EXERCISES</Text>
                        </View>
                        <View style={styles.column}>
                            <Icon name='burn' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{workout[0].kcal} KCAL</Text>
                        </View>
                    </View>
                </View>
                <RenderView rounds={workout[0].rounds} exercises={this.state.exercises} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(87, 162, 204, 0.5)',
        padding: 20
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
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        marginLeft: 10, 
        color: 'white'
    },
    round: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
    }
})

export default List;