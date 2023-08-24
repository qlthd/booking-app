import * as React from 'react'
import { Text, View } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { BookingCard } from './BookingCard';

export const Home = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: any) => {
    setSearch(search);
  };
  
  return (
    <SafeAreaView>
      <Text className="font-workSans text-3xl">Booking app</Text>
      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
      />
      <BookingCard/>
    </SafeAreaView>
  );
}
