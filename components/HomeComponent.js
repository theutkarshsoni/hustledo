import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

class Home extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_workouts.webp')} style={styles.container}>
                            <Text style={styles.text}>Workouts</Text>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1, borderLeftWidth: 0.5, borderBottomWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_challenges.webp')} style={styles.container}>
                            <Text style={styles.text}>Challenges</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, borderRightWidth: 0.5, borderTopWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_yoga.webp')} style={styles.container}>
                            <Text style={styles.text}>Yoga</Text>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1, borderLeftWidth: 0.5, borderTopWidth: 0.5, borderColor: "white"}}>
                        <ImageBackground source={require('../assets/home_nutrition.webp')} style={styles.container}>
                            <Text style={styles.text}>Nutrition</Text>
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
    text:{
      color: "white",
      fontSize: 25,
      fontWeight: "bold"
    }
  });

export default Home;