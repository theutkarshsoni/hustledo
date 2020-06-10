import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        nutritions: state.nutritions
    };
}

class Meal extends Component {
    render() {
        if(this.props.nutritions.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.nutritions.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.nutritions.errMess}</Text>
                </View>
            );
        }
        else {
            const { id } = this.props.route.params;
            const data = this.props.nutritions.nutritions.filter(e => e.id === id)[0];
            return(
                <ScrollView>
                    <Image source={{ uri: baseUrl + 'images/nutrition/' + data.image }} style={styles.dishImage} />
                    <Text style={styles.dishName}>{data.name}</Text>
                    <Text style={styles.dishHead}>Ingredients</Text>
                    <View style={styles.dishText}>
                    {
                        data.ingredients.map((item, i) => (
                            <View key={i} style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#57A2CC' }}>{'\u2022'}</Text>
                                <Text style={styles.dishIngredient}>{item}</Text>
                            </View>
                        ))
                    }
                    </View>
                    <Text style={styles.dishHead}>Steps</Text>
                    <View style={styles.dishText}>
                    {
                        data.steps.replace(/[.]/g, '.#').split('# ').map((item, i) => (
                            <View key={i} style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text>Step {i+1}: </Text>
                                </View>
                                <View style={{ flex: 5 }}>
                                    <Text>{item}</Text>
                                </View>
                            </View>
                        ))
                    }
                    </View>
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    dishImage: {
        width: '100%',
        height: 250,
        marginBottom: 15
    },
    dishName:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },  
    dishHead:{
        backgroundColor: "#57A2CC",
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    dishIngredient: {
        textTransform: 'capitalize', 
        flex: 1, 
        paddingLeft: 5
    },
    dishText: {
        padding: 10
    }
});

export default connect(mapStateToProps)(Meal);