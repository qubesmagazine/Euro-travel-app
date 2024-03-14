import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import ReusableText from '../../components/Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {AntDesign} from '@expo/vector-icons'
import styles from './home.style'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import { BestHotels, Places, Recommendations } from '../../components'
import AppBar from '../../components/Reusable/AppBar'

const Home = ({navigation}) => {
  return (
<SafeAreaView style={reusable.container}>
<View>
<View style={{height: 50}}>
<AppBar
top={10}
left={0}
right={0}
title={'EuroElder Travel'} color={COLORS.white} icon={'search1'} color1={COLORS.white}
onPress={() => navigation.goBack()}
onPress1={() => navigation.navigate('HotelSearch')}
/>
</View>
<HeightSpacer height={SIZES.large}/>
<ReusableText
          text={'Destinations'}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />


</View>

<HeightSpacer height={5}/>

<Recommendations/>

<HeightSpacer height={30}/>

<BestHotels/>

</SafeAreaView>
  )
}

export default Home
