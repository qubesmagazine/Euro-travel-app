import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { BestHotels, HeightSpacer } from '../../components';
import { COLORS } from '../../constants/theme';
import AppBar from '../../components/Reusable/AppBar';

const BookHoliday = ({navigation}) => {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for holidays to', destination, 'from', departureDate, 'to', returnDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
<View style={{height: 100}}>
<AppBar
top={50}
left={0}
right={0}
title={'Book Holidays'} color={COLORS.white} icon={'search1'} color1={COLORS.white}
onPress={() => navigation.goBack()}
onPress1={() => navigation.navigate('HotelSearch')}
/>
</View>
      <View style={styles.descriptionContainer}>
        <Image source={require('../../assets/images/groupreading.jpeg')} style={styles.image} />
        <Text style={styles.descriptionText}>
          Booking holidays and reading in groups can be a wonderful way for older people to socialize,
          explore new destinations, and enjoy enriching experiences together. Explore our selection
          of elderly story books with ratings and publication years below.
        </Text>
      </View>

      {/* Form for booking holidays */}
      <Text style={styles.heading}>Book Holidays</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Destination"
          value={destination}
          onChangeText={setDestination}
        />
        <TextInput
          style={styles.input}
          placeholder="Departure Date"
          value={departureDate}
          onChangeText={setDepartureDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Return Date"
          value={returnDate}
          onChangeText={setReturnDate}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <HeightSpacer height={10}/>

<BestHotels/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BookHoliday;
