import { AirbnbRating, Card } from '@rneui/base';
import * as React from 'react'
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export const BookingCard = () => {
    const imageUri = "https://media.routard.com/image/47/9/khao-sok-parc-thailande.1533479.jpeg";
    return (
        <Card containerStyle={tw`rounded-lg`}>
            <Image source={{ uri : imageUri}} style={{width: '100%', height: '50%'}}/>
            <Text style={tw`font-bold text-xl`}>Booking name</Text>
            <Text style={tw`text-gray-400`}>Location</Text>
            <AirbnbRating
                isDisabled
            />
        </Card>
    );
}

