import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch'




const Popularjobs = () => {
  const { data, isLoading, error, refetch } = useFetch('search', 'React developer')
  const router = useRouter()



  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.cardsContainer}>
        {
          isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />)
            :
            error ? (
              <Text>Something went wrong {error.message}</Text>
            )
              :
              (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <PopularJobCard item={item} handlePressCard={() => router.push(`/job-details/${job}`)} />
                  )}
                  keyExtractor={item => item?.job_id}
                  contentContainerStyle={{ columnGap: SIZES.medium }}
                  horizontal
                />
              )
        }
      </View>



    </View>
  )
}

export default Popularjobs