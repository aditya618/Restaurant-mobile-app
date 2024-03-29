import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
  MagnifyingGlassIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCatagories, setFeaturedCatagories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == 'featured'] {
      ...,
      restuarants[] -> {
        ...,
        dishes[] ->,
      }
    }
    `).then(data => {
      setFeaturedCatagories(data);
    }).catch(e => console.error(e));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <Text className="text-red-500">HomeScreen</Text> */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color={"grey"} />
          <TextInput placeholder='Restuarants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>


      {/* Body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{
        paddingBottom: 150
      }}>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}

        {featuredCatagories?.map(catagory => {
          return <FeaturedRow 
            key={catagory._id}
            id={catagory._id}
            title={catagory.name}
            description={catagory.short_description} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen