import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TRAININGS } from '../shared/trainings';
import { EXERCISES } from '../shared/exercises';
import { YOGAS } from '../shared/yogas';
import { SliderBox } from 'react-native-image-slider-box';
import { baseUrl } from '../shared/baseUrl';
import { Icon } from 'react-native-elements';

class Exercise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trainings: TRAININGS,
            exercises: EXERCISES,
            yogas: YOGAS
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { tag } = this.props.route.params;
        const { eid } = this.props.route.params;

        if(tag === 'Fitness') {
            var data = this.state.trainings.filter((e) => e.id === eid)[0];
            var ilink = baseUrl + 'images/trainings/';
            var vlink = baseUrl + 'videos/trainings/';
        }

        if(tag === 'Workouts') {
            var data = this.state.exercises.filter((e) => e.id === eid)[0];
            var ilink = baseUrl + 'images/exercises/';
            var vlink = baseUrl + 'videos/exercises/';
        }

        if(tag === 'Yoga') {
            var data = this.state.yogas.filter((e) => e.id === eid)[0];
            var ilink = baseUrl + 'images/poses/';
            var vlink = baseUrl + 'videos/poses/';
        }
        
        var images = [];
        var i = 0;
        while(i < data.images.length) {
            images.push(ilink + data.images[i]);
            i++;
        }

        return(
            <ScrollView>
                <SliderBox
                    images={images}
                    sliderBoxHeight={400}
                    imageLoadingColor="#57A2CC"
                    dotColor="#57A2CC"
                    inactiveDotColor="#000"
                    resize="cover"
                    circleLoop={true}
                />
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={styles.muscle}>{tag === 'Yoga' ? 'Click on play button for video': 'Muscle: ' + data.muscle}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Icon name='play-circle' type='font-awesome-5' color='#57A2CC' size={50} onPress={() => navigate('Preview', { name: data.name, link: (vlink + data.video) }) }  />
                        </View>
                    </View>
                    <Text style={styles.steps}>Steps</Text>
                    <Text>{data.description}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },
    muscle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    steps:{
        backgroundColor: "#57A2CC",
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default Exercise;