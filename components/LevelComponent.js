import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class Level extends Component{
    render() {
        const { navigate } = this.props.navigation;
        const { selectedClass } = this.props.route.params; 
        
        return(
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('Poses', { name: selectedClass + ' Beginner'})}>
                    <View style={styles.row}>
                        <View style={styles.starContainer}>
                            <Icon name='star-o' type='font-awesome' size={40} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Beginner</Text>
                            <Text>Focuses on building strength and endurance by creating a firm foundation.</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name='chevron-right' type='font-awesome-5' size={16} color='#57A2CC' />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('Poses', { name: selectedClass + ' Intermediate'})}>
                    <View style={styles.row}>
                        <View style={styles.starContainer}>
                            <Icon name='star-half' type='font-awesome' size={40} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Intermediate</Text>
                            <Text>This is for those who have strong practice and prior yoga experience.</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name='chevron-right' type='font-awesome-5' size={16} color='#57A2CC' />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('Poses', { name: selectedClass + ' Advanced'})}>
                    <View style={styles.row}>
                        <View style={styles.starContainer}>
                            <Icon name='star' type='font-awesome' size={40} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Advanced</Text>
                            <Text>This is for dedicated and very committed who have strong practice to participate.</Text>
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
    starContainer: {
        flex: 6,
        paddingHorizontal: 5,
        justifyContent: 'center'
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

export default Level;