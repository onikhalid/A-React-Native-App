import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import useFetch from '../../../hook/useFetch'




const Nearbyjobs = () => {
  const { data, isLoading, error, refetch } = useFetch('search', 'React developer')
  const router = useRouter()




  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
                data?.map((job, index) => (
                  <NearbyJobCard
                    key={`nearby-job-${job?.job_id}`}
                    job={job}
                    handleNavigate={() => router.push(`/job-details/${job}`)}
                  />
                ))
              )
        }
      </View>



    </View>
  )
}

export default Nearbyjobs