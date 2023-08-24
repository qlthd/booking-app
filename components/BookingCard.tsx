import { Card } from '@rneui/base';
import * as React from 'react'
import { Text, View } from 'react-native';
import tw from 'twrnc';

export const BookingCard = () => {
    
    return (
        <Card containerStyle={tw`rounded-lg`}>
            <Text style={tw`font-bold text-xl`}>Booking name</Text>
            <Text style={tw`text-gray-400`}>Location</Text>

        </Card>
    );
}

