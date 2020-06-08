import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return(
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color="#57A2CC" />
            <Text style={styles.loadingText}>Loading... Please Wait</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#57A2CC',
        fontSize: 14,
        fontWeight: 'bold'
    }
});