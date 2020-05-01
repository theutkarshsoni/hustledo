import React, { Component } from 'react';
import { Share, Linking, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
    {
        id: 0,
        title: 'Rate Us',
        icon: 'star',
        type: 'font-awesome'
    },
    {
        id: 1,
        title: 'Send Feedback',
        icon: 'comments',
        type: 'font-awesome'
    },
    {
        id: 2,
        title: 'Inform app on Whatsapp',
        icon: 'whatsapp',
        type: 'font-awesome'
    },
    {
        id: 3,
        title: 'Post app on Facebook',
        icon: 'facebook-square',
        type: 'font-awesome'
    },
    {
        id: 4,
        title: 'Share app on Instagram',
        icon: 'instagram',
        type: 'font-awesome'
    },
    {
        id: 5,
        title: 'Tweet app on Twitter',
        icon: 'twitter',
        type: 'font-awesome'
    }
];

const shareToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=Description of app \nFor android user: https://playstore.com \nFor iOs user: https://appstore.com`);
}

const shareToFacebook = () => {
    Share.share({
        message: `Description of app \nFor android user: \nhttps://playstore.com \nFor iOs user: \nhttps://appstore.com`,
    });
}

const shareToTwitter = () => {
    Linking.openURL(`twitter://post?message=Description of app \nFor android user: \nhttps://playstore.com \nFor iOs user: \nhttps://appstore.com`);
}

const shareToInstagram = () => {
    Share.share({
        message: `Description of app \nFor android user: \nhttps://playstore.com \nFor iOs user: \nhttps://appstore.com`,
    });
}


const renderListItem = ({item, index}) => {
    return(
        <TouchableHighlight onPress={() => {
            switch(item.icon){
                case 'star': 
                    rateUs();
                    break;
                case 'comments': 
                    sendFeedback();
                    break;
                case 'whatsapp': 
                    shareToWhatsApp();
                    break;
                case 'facebook-square': 
                    shareToFacebook();
                    break;
                case 'instagram': 
                    shareToInstagram();
                    break;
                case 'twitter': 
                    shareToTwitter();
                    break;                    
            }
        }}>
            <ListItem
                key={index}
                title={item.title}
                leftIcon={{ name: item.icon, type: item.type }}
                bottomDivider
                chevron
            />
        </TouchableHighlight>
    );
}

class More extends Component {
    render(){
        return(
            <SafeAreaView>
                <FlatList 
                    data={list}
                    renderItem={renderListItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

export default More;