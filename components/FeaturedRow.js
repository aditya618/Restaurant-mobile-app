import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowSmallRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestuarantCard from './RestuarantCard'
import sanityClient from '../sanity';

const FeaturedRow = ({title, description, id}) => {

    const [restuarants, setRestuarants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'featured' && _id == $id] {
            ...,
            restuarants[] -> {
              ...,
              dishes[] ->,
            }
          }[0]
        `,{id}).then(data => {
            setRestuarants(data?.restuarants)
        }).catch(e => console.error(e));
    }, []);

  return (
    <View>
        <View className="flex-row mt-4 px-4 justify-between items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowSmallRightIcon color={"#00CCBB"}/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView 
        horizontal 
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
            {/* Restuarant Card */}
            {restuarants.map(restuarant => {
                return <RestuarantCard  
                id={restuarant._id}
                key={restuarant._id}
                imgUrl={restuarant.image}
                title={restuarant.name}
                rating={restuarant.rating}
                genre={restuarant.type?.name}
                address={restuarant.address}
                short_description={restuarant.short_description}
                dishes={restuarant.dishes}
                long={restuarant.lon}
                lat={restuarant.lat}
            />
            })}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow