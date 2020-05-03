import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { CATEGORIES } from '../shared/categories';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Fitness extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories: CATEGORIES
        }
    }

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
                    onPress={() => navigate('Category', { trainings: item.trainings, name: item.name })}
                />
            );
        }
        
        return(
            <SafeAreaView>
                <FlatList
                    data={this.state.categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id.toString()}
                >
                </FlatList>
            </SafeAreaView>
        )
    }
}

export default Fitness;