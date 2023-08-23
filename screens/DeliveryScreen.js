import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestuarant } from '../features/resturarantSlice'
import { useNavigation } from '@react-navigation/core'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress';
import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {

const restuarant = useSelector(selectRestuarant);
const navigation = useNavigation();

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
          <View className='flex-row justify-between items-center p-5'>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <XMarkIcon color={'white'} size={30} />
              </TouchableOpacity>
              <Text className='font-light text-white text-lg'>Order help</Text>
          </View>

          <View className='bg-white mx-5 my-2 rounded-md p-6 shadow-md z-50'>
            <View className='flex-row justify-between'>
              <View>
                <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                <Text className='text-4xl font-bold'>45-55 Minutes</Text>
              </View>
              <Image source={{uri: 'https://links.papareact.com/fls'}} className='h-20 w-20' />
            </View>

            <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />

            <Text className='mt-3 text-gray-500'>
              Your order at {restuarant.title} is being prepared
            </Text>
          </View>
      </SafeAreaView>

      {/* 17.443215,78.479522 */}

      <MapView 
      initialRegion={{
        latitude: restuarant.lat,
        longitude: restuarant.lon,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      className='flex-1 -mt-10 z-0'
      mapType='mutedStandard'
      >
        <Marker 
          coordinate={{
            latitude: restuarant.lat,
            longitude: restuarant.lon,
          }}
          title={restuarant.title}
          description={restuarant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image source={{
          uri:'https://links.papareact.com/wru'
        }}
        className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Aditya J Kulkarni</Text>
          <Text className='text-gray-400'>Your rider</Text>
        </View>
        <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen