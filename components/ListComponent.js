import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { EXERCISES } from '../shared/exercises';
import { WORKOUTS } from '../shared/workouts';
import { CHALLENGES } from '../shared/challenges';
import { baseUrl } from '../shared/baseUrl';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            challenges: CHALLENGES,
            workouts: WORKOUTS,
            exercises: EXERCISES
        }
    }

    render(){
        const { wid } = this.props.route.params;
        const { cid } = this.props.route.params;
        const { did } = this.props.route.params;
        
        if(wid === undefined) {
            var challenge = this.state.challenges.filter((e) => e.id === cid);
            var workout = challenge[0].days.filter((e) => e.id === did);
        }
        else {
            var workout = this.state.workouts.filter((e) => e.id === wid);
        }

        function RenderView(props) {
            var parts = props.parts;
            var exercises = props.exercises;
            var rounds = props.rounds;
            if(parts === 'CARDIO') {
                return(
                    <View>
                        <Text style={styles.stitle}>RUN • SPIN • SWIM • CYCLE</Text>
                        <Text style={styles.sdescription}>20 - 40 min of cardiovascular activity is necessary to keep the metabolism roaring and help you burn some extra calories that will lead to fat loss.{"\n\n"}I would recommend doing your cardio first thing in the morning, before breakfast. This way it is out of the way, and it will really boost your energy for a good portion of the day to follow. It is a little tough in the beginning, but after a week, you will feel so good doing it, you will be locked in a routine.{"\n\n"}If there is no way you can do it first thing in the morning, I would do it right after you train with weights or at night after your last meal. Bring a headset with your favourite music to help the time go faster.</Text>
                    </View>
                );
            }
            else if(parts === 'ACTIVE REST DAY') {
                return(
                    <View>
                        <Text style={styles.stitle}>ACTIVE REST DAY • YOGA • PILATES</Text>
                        <Text style={styles.sdescription}>Consistency in exercise is the key to real results and real health benefits. And the more consistently you are exercise, the faster you will see tangible results.{"\n\n"}The progress means more you exercise more powerful the effect on the body. Its a balance over time that helps you maintain a healthy weight. Energy out must equal to or greater than energy in.</Text>
                    </View>
                );
            }
            else {
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
                            <Text style={{ marginLeft: 10, fontSize: 10 }}>{wid === undefined ? challenge[0].duration : workout[0].duration} SECONDS</Text>
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

        function RenderRow(props) {
            var workout = props.workout;

            if(workout.parts === 'CARDIO') {
                return(
                    <View>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>20 - 40 MIN</Text>
                    </View>
                );
            }
            else if(workout.parts === 'ACTIVE REST DAY'){
                return(
                    <View></View>
                );
            }
            else{
                return(
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Icon name='clock' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{workout.time} MIN</Text>
                        </View>
                        <View style={styles.column}>
                            <Icon name='tasks' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{workout.exercises.length} EXERCISES</Text>
                        </View>
                        <View style={styles.column}>
                            <Icon name='burn' type='font-awesome-5' size={16} color='white' /> 
                            <Text style={styles.text}>{workout.kcal} KCAL</Text>
                        </View>
                    </View>
                );
            }
        }
        
        return(
            <View style={{ marginBottom: 160 }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>{wid === undefined ? workout[0].parts : workout[0].name}</Text>
                    <Text style={styles.subheading}>{workout[0].accessories}</Text>
                    <RenderRow workout={workout[0]}/>
                </View>
                <RenderView parts={workout[0].parts} rounds={workout[0].rounds} exercises={this.state.exercises} />
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
    },
    stitle: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginVertical: 20
    },
    sdescription: {
        fontSize: 13,
        paddingHorizontal: 20
    }
})

export default List;