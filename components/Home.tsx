import * as React from 'react'
import { Text, View } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { BookingCard } from './BookingCard';
import tw from "twrnc";
import { AccommodationApi, AccommodationListResponseDataItem, Configuration } from '../strapi-client';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const [search, setSearch] = useState("");
  const [accommodations, setAccommodations] = useState<AccommodationListResponseDataItem[]>();

  const updateSearch = (search: any) => {
    setSearch(search);
  };

const configuration = new Configuration({
  basePath: 'http://localhost:1337/api',
  
});

const api = new AccommodationApi(configuration);



useEffect(() => {
  api.getAccommodations({ populate: "*", filters: search ? { Name : { $startsWithi : search}} : {}}).then((response) => {
    setAccommodations(response.data);
  });
}, [search]);
  
  return (
    <SafeAreaView>
      <Text style={tw`text-3xl font-bold text-center my-2`}>Booking app</Text>
      <SearchBar
        placeholder="Enter a destination"
        onChangeText={updateSearch}
        lightTheme
        value={search}
      />
      {accommodations?.map((value, index) => <BookingCard accomodation={value} key={index}/>)}

    </SafeAreaView>
  );
}
