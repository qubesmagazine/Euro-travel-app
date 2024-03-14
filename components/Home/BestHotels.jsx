import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import HotelCard from '../Tiles/hotels/HotelCard'


const BestHotels = () => {

    const navigation = useNavigation();

    const hotels = [
        {
            "_id": "1",
            "country_id": "1",
            "title": "Czech Palace",
            "location": "Prague, Republic",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405847/Homestay9_ask2rr.jpg",
            "rating": 4.7,
            "review": "1302 Reviews"
        },
        {
            "_id": "2",
            "country_id": "2",
            "title": "Eiffel Splendor",
            "location": "Paris, France",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405847/Homestay8_hoevjh.webp",
            "rating": 4.6,
            "review": "1486 Reviews"
        },
        {
            "_id": "3",
            "country_id": "3",
            "title": "Polish Palace",
            "location": "Krakow, Poland",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405847/Homestay6_k4r3z7.webp",
            "rating": 4.9,
            "review": "1593 Reviews"
        },
        {
            "_id": "4",
            "country_id": "4",
            "title": "German Heights",
            "location": "Munich, Germany",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405846/Homestay1_jbsybo.jpg",
            "rating": 4.8,
            "review": "1742 Reviews"
        },
        {
            "_id": "5",
            "country_id": "5",
            "title": "Spanish Serenity",
            "location": "Barcelona, Spain",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405846/Homestay10_xmbtqb.webp",
            "rating": 4.5,
            "review": "1389 Reviews"
        },
        {
            "_id": "6",
            "country_id": "6",
            "title": "Italian Charm",
            "location": "Venice, Italy",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405845/Homestay2_ifgiez.jpg",
            "rating": 4.7,
            "review": "1478 Reviews"
        },
        {
            "_id": "7",
            "country_id": "7",
            "title": "Grecian Gem",
            "location": "Athens, Greece",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405845/Homestay5_ceijem.jpg",
            "rating": 4.6,
            "review": "1623 Reviews"
        },
        {
            "_id": "8",
            "country_id": "8",
            "title": "Swedish Splendor",
            "location": "Stockholm, Sweden",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405845/Homestay11_thuenq.webp",
            "rating": 4.9,
            "review": "1798 Reviews"
        },
        {
            "_id": "9",
            "country_id": "9",
            "title": "Norwegian Oasis",
            "location": "Oslo, Norway",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405844/Homestay4_hvtoqt.jpg",
            "rating": 4.8,
            "review": "1605 Reviews"
        },
        {
            "_id": "10",
            "country_id": "10",
            "title": "Portuguese Paradise",
            "location": "Lisbon, Portugal",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405843/Homestay3_y2jb0h.jpg",
            "rating": 4.7,
            "review": "1420 Reviews"
        },
        {
            "_id": "11",
            "country_id": "11",
            "title": "Swiss Sanctuary",
            "location": "Zurich, Switzerland",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1710405842/Homestay12_bzennl.jpg",
            "rating": 4.3,
            "review": "1543 Reviews"
        }
    ];
    

  return (
    <View>
        <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 5}]}>
        <ReusableText
          text={'Nearby HomeStay'}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate('HotelList')
        }>
<Feather
name="list"
size={20}
/>
        </TouchableOpacity>
        </View>

<FlatList
data={hotels}
horizontal
keyExtractor={(item) => item._id}
showsHorizontalScrollIndicator={false}
contentContainerStyle={{columnGap: SIZES.small}}
renderItem={({item}) => (
<HotelCard item={item} margin={5} onPress={() => navigation.navigate('HotelsDetails')}/>


)}

/>


    </View>
  )
}

export default BestHotels

const styles = StyleSheet.create({})