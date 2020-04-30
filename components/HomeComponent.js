import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

class Home extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_workouts.webp')} style={styles.container}>
                            <View style={styles.BgText}>
                                <Text style={styles.text}>Workouts</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1, borderLeftWidth: 0.5, borderBottomWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_challenges.webp')} style={styles.container}>
                            <View style={styles.BgText}>
                                <Text style={styles.text}>Challenges</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, borderRightWidth: 0.5, borderTopWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_yoga.webp')} style={styles.container}>
                            <View style={styles.BgText}>
                                <Text style={styles.text}>Yoga</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1, borderLeftWidth: 0.5, borderTopWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_nutrition.webp')} style={styles.container}>
                            <View style={styles.BgText}>
                                <Text style={styles.text}>Nutrition</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      resizeMode: "cover",
      justifyContent: "center",
      alignItems:"center"
    },
    BgText:{
        padding: 5,
        backgroundColor: 'rgba(87, 162, 204, 0.5)',
        borderRadius: 5
    },
    text:{
      color: "white",
      fontSize: 25,
      fontWeight: "bold"
    }
  });

export default Home;