import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { CATEGORIES } from '../shared/category';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

const renderCategoryItem = ({item, index}) => {
    return(
        <ListItem 
            key={index}
            leftAvatar={{ source: { uri: baseUrl + 'images/category/' + item.image }}}
            title={item.name}
            chevron
            bottomDivider
            button
            onPress={() => console.log('item.title')}
        />
    );
}

class Fitness extends Component {
    render(){
        return(
            <SafeAreaView>
                <FlatList
                    data={CATEGORIES}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id.toString()}
                >
                </FlatList>
            </SafeAreaView>
        )
    }
}

export default Fitness;