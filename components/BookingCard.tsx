import { Card } from '@rneui/base';
import * as React from 'react'
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Rating } from 'react-native-ratings';


export const BookingCard = () => {
    const imageUri = "https://media.routard.com/image/47/9/khao-sok-parc-thailande.1533479.jpeg";

    return (
        <Card containerStyle={tw`rounded-lg`}>
            <Image source={{ uri : imageUri}} style={{width: '100%', height: '50%'}}/>
            <Text style={tw`font-bold text-xl mt-2`}>Booking name</Text>
            <Text style={tw`text-gray-400`}>Location</Text>
            <View>
                <View style={tw`flex flex-row my-2`}>
                    <Rating
                        imageSize={24}
                        readonly
                    />
                    <Text style={tw`font-bold text-lg my-auto mx-2`}>3.1</Text>
                </View>
                <Text style={tw`text-gray-400`}>300 reviews</Text>
            </View>
        </Card>
    );
}

