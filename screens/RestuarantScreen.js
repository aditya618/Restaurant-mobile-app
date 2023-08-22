import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { StarIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import Currency from 'react-currency-formatter';
import { setRestuarant } from '../features/resturarantSlice';

const RestuarantScreen = () => {

  const {params: {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
  }} = useRoute();

  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  });

  useEffect(() => {
    dispatch(setRestuarant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    }))
  }, []);

  return (
    <>
    {items.length > 0 && <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>
          <Currency quantity={basketTotal} currency='GBP' />
        </Text>
      </TouchableOpacity>
    </View>}


    <ScrollView >
      <View className="relative">
        <Image source={{
          uri: urlFor(imgUrl).url()
        }} 
        className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>
        
      <View className="bg-white">
        <View className='px-4 pt-4'>
          <Text className='text-3xl font-bold'>{title}</Text>
          <View className='flex-row space-x-2 my-1'>

            <View className='flex-row items-center space-x-1'>
              <StarIcon color={'green'} opacity={0.5} size={22} />
              <Text className='text-xs text-gray-500'>
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <MapPinIcon color={'gray'} opacity={0.4} size={22} />
              <Text className='text-xs text-gray-500'>
                <Text className="text-gray-500">Nearby · {address}</Text>
              </Text>
            </View>
          </View>
          <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>

        </View>
        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
          <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
          <Text className='pl-2 flex-1 text-md font-bold'>
            Have a food allergy?
          </Text>
          <ChevronRightIcon color={'#00CCBB'}/>
        </TouchableOpacity>
        
      </View>

      <View className='pb-36'>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

        {dishes.map((dish) => {
          return <DishRow 
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        })}
      </View>
    </ScrollView>
    </>
  )
}

export default RestuarantScreen