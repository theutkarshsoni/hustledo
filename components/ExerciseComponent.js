import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        trainings: state.trainings,
        exercises: state.exercises,
        yogas: state.yogas
    };
}

class Exercise extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { tag } = this.props.route.params;
        const { eid } = this.props.route.params;

        if(tag === 'Fitness') {
            var data = this.props.trainings.trainings.filter((e) => e.id === eid)[0];
            var ilink = baseUrl + 'images/trainings/';
            var vlink = baseUrl + 'videos/trainings/';
        }

        if(tag === 'Workouts') {
            var data = this.props.exercises.exercises.filter((e) => e.id === eid)[0];
            var ilink = baseUrl + 'images/exercises/';
            var vlink = baseUrl + 'videos/exercises/';
        }

        if(tag === 'Yoga') {
            var data = this.props.yogas.yogas.filter((e) => e.id === eid)[0];
            var ilink = baseUrl + 'images/poses/';
            var vlink = baseUrl + 'videos/poses/';
        }
        
        var images = [];
        var i = 0;
        while(i < data.images.length) {
            images.push(ilink + data.images[i]);
            i++;
        }

        if(this.props.trainings.isLoading || this.props.exercises.isLoading || this.props.yogas.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.trainings.errMess || this.props.exercises.errMess || this.props.yogas.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.trainings.errMess || this.props.exercises.errMess || this.props.yogas.errMess}</Text>
                </View>
            );
        }
        else {
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

export default connect(mapStateToProps)(Exercise);