import { Button, Card, Icon } from '@rneui/base';
import * as React from 'react'
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Rating } from 'react-native-ratings';
import { CardImage } from '@rneui/base/dist/Card/Card.Image';
import { AntDesign } from "@expo/vector-icons";
import { AccommodationListResponseDataItem } from '../strapi-client';

export const BookingCard = ({ accomodation } : { accomodation: AccommodationListResponseDataItem }) => {
    const imageUri = `http://localhost:1337${accomodation.attributes?.pictures?.data?.[0]?.attributes?.url}`;
    
    return (
        <Card containerStyle={tw`rounded-lg p-0`}>
            <CardImage source={{ uri : imageUri}} style={tw`rounded-t-lg`}/>
            <View style={tw`p-4`}>
                <View style={tw`flex flex-row justify-between`}>
                    <View>
                        <Text style={tw`font-bold text-xl mt-2`}>{accomodation.attributes?.name}</Text>
                        <Text style={tw`text-gray-400`}>{accomodation.attributes?.location}</Text>
                    </View>
                    <AntDesign name="hearto" size={24} color="black" style={tw`mt-2`} />
                </View>
                
                <View style={tw`flex flex-row justify-between`}>
                    <View style={tw`flex flex-row my-2`}>
                        <Rating
                            imageSize={24}
                            startingValue={4.5}
                            readonly
                        />
                        <Text style={tw`font-bold text-lg my-auto mx-2`}>{accomodation.attributes?.reviewScore}</Text>
                    </View>
                    <Text style={tw`text-gray-400 text-lg my-auto ml-2`}>{accomodation.attributes?.reviewsCount} reviews</Text>
                </View>
            </View>
        </Card>
    );
}

