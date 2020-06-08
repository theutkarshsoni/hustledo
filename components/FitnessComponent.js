import React, { Component } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        categories: state.categories
    };
}

class Fitness extends Component {
    render(){
        const { navigate } = this.props.navigation;

        const renderCategoryItem = ({item, index}) => {
            return(
                <ListItem 
                    key={index}
                    leftAvatar={{ source: { uri: baseUrl + 'images/category/' + item.image }}}
                    title={item.name}
                    chevron
                    bottomDivider
                    button
                    onPress={() => navigate('Category', { list: item.trainings, name: item.name })}
                />
            );
        }

        if(this.props.categories.isLoading) {
            return(
                <Loading />
            );
        }
        else if(this.props.categories.errMess) {
            return(
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.categories.errMess}</Text>
                </View>
            );
        }
        else {
            return(
                <SafeAreaView>
                    <FlatList
                        data={this.props.categories.categories}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id.toString()}
                    >
                    </FlatList>
                </SafeAreaView>
            );
        }
    }
}

export default connect(mapStateToProps)(Fitness);