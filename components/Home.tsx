import * as React from 'react'
import { Text, View } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { BookingCard } from './BookingCard';
import { useQuery } from 'react-query';
import { get } from '../helper/api';
import {Accomodation} from "../Interfaces/Accomodation";

export const Home = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: any) => {
    setSearch(search);
  };

  const { data, isLoading, isError } = useQuery<any[]>
  ('accomodation', () => get<any>('accomodations?populate=*').then(response => response.data), {});

    const accomodations: Accomodation[] | undefined = data?.map(item => ({
        Name: item.attributes.Name,
        Location: item.attributes.Location,
        createdAt: item.attributes.createdAt,
        updatedAt: item.attributes.updatedAt,
        publishedAt: item.attributes.publishedAt,
        Address: item.attributes.address,
        ReviewScore: item.attributes.ReviewScore,
        ReviewsCount: item.attributes.ReviewsCount,
        MainPictureUrl: item.attributes.Pictures.data[0].attributes.url,      
    }));
  
  return (
    <SafeAreaView>
      <Text className="font-workSans text-3xl">Booking app</Text>
      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
      />
      {accomodations?.map((accomodation) => <BookingCard accomodation={accomodation}/>)}

    </SafeAreaView>
  );
}
