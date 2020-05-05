import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { baseUrl } from '../shared/baseUrl';
import { Icon } from 'react-native-elements';

class Classes extends Component{
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('Level', { selectedClass: 'Balance' })}>
                    <View style={styles.row}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: baseUrl + 'images/classes/balance.png' }} style={styles.image} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Balance</Text>
                            <Text>Different yoga styles are combined that are focused to improve your balance.</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name='chevron-right' type='font-awesome-5' size={16} color='#57A2CC' />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('Level', { selectedClass: 'Strength' })}>
                    <View style={styles.row}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: baseUrl + 'images/classes/strength.png' }} style={styles.image} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Strength</Text>
                            <Text>A combination of power yoga poses that will help you to build your body strength.</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name='chevron-right' type='font-awesome-5' size={16} color='#57A2CC' />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('Level', { selectedClass: 'Flexibility' })}>
                    <View style={styles.row}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: baseUrl + 'images/classes/flexibility.png' }} style={styles.image}  />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Flexibility</Text>
                            <Text>Fit yoga into a busy day with a sequence that is both grounding and energizing.</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name='chevron-right' type='font-awesome-5' size={16} color='#57A2CC' />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 0.2
    },
    imageContainer: {
        flex: 6,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },
    image: {
        width: 120,
        height: 120
    },
    textContainer: {
        flex: 10,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5
    },
    iconContainer:{
        flex: 1, 
        justifyContent: 'center',
        paddingRight: 10
    }
});

export default Classes;