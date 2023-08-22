import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestuarantCard = ({
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
}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => {
        navigation.navigate('Restuarant', {
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
        })
    }}
    className="bg-white mr-3 shadow-sm">
        <Image source={{uri: urlFor(imgUrl).url()}} className="h-36 w-64 rounded-sm" />

        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color={'green'} opacity={0.5} size={22} />
                <Text className="text-gray-500 text-xs">
                    <Text className="text-green-500">{rating}</Text> · {genre}
                </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
                <MapPinIcon size={22} color={'gray'} opacity={0.4} />
                <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default RestuarantCard