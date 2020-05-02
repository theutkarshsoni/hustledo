import React, { Component } from 'react';
import { SafeAreaView, FlatList, TouchableHighlight, Platform, Linking, Share } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

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
        icon: 'comment',
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
        title: 'Tweet app on Twitter',
        icon: 'twitter',
        type: 'font-awesome'
    },
    {
        id: 5,
        title: 'Share app on other app',
        icon: 'th',
        type: 'font-awesome'
    }
];

const rateUs = () => {
    var androidAppID = 'com.biglaundry';
    var iosAppID = 'com.biglaundry';
    if(Platform.OS == 'android'){
        Linking.openURL('market://details?id=' + androidAppID);
    }
    else if(Platform.OS == 'ios'){
        Linking.openURL('itms-apps://itunes.apple.com/us/app/apple-store/' + iosAppID + '?mt=8');
    }
}

const sendFeedback = () => {
    MailComposer.composeAsync({
        recipients: ['hustlehutteam@gmail.com'],
        subject: 'Feedback for Hustle Hut',
        body: 'Hello, Hustle Hut Team\n\n'
    });
}

var shareMessage = `Description of app \nFor android user: https://playstore.com \nFor iOs user: https://appstore.com`;

const shareToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=`+ shareMessage);
}

const shareToFacebook = () => {
    Linking.openURL(`fb://feed?message=` + shareMessage);
}

const shareToTwitter = () => {
    Linking.openURL(`twitter://post?message=` + shareMessage);
}

const shareToOtherApp = () => {
    Share.share({
        message: shareMessage,
    });
}


const renderListItem = ({item, index}) => {
    return(
        <TouchableHighlight onPress={() => {
            switch(item.icon){
                case 'star': 
                    rateUs();
                    break;
                case 'comment': 
                    sendFeedback();
                    break;
                case 'whatsapp': 
                    shareToWhatsApp();
                    break;
                case 'facebook-square': 
                    shareToFacebook();
                    break;
                case 'twitter': 
                    shareToTwitter();
                    break;
                case 'th': 
                    shareToOtherApp();
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