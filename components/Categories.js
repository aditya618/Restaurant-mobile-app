import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity';
import { urlFor } from '../sanity';

const Categories = () => {

  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == 'category'] {
      _id,
      title,
      image
    }
    `).then(data => setCatagories(data)).catch(e => console.error(e))
  }, []);

  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}>
        {/* CategoryCard */}

      {catagories.map(catogery => {
        return <CategoryCard key={catogery._id} imgUrl={urlFor(catogery.image).url()} title={catogery.title} />
      })}

      {/* <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 2" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 3" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 2" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 3" /> */}
    </ScrollView>
  )
}

export default Categories