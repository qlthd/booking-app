import * as React from 'react'
import { Text, View } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { BookingCard } from './BookingCard';
import { useQuery } from 'react-query';
import { get } from '../helper/api';

export const Home = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: any) => {
    setSearch(search);
  };

  const { data: accomodations, isLoading, isError } = useQuery<any[]>
  ('accomodation', () => get<any>('accomodations?populate=*').then(response => response.data), {});
  
  
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
