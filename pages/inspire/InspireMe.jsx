import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS } from '../../constants/theme';

const InspireMe = ({navigation}) => {
  // Dummy data for travel destinations
  const destinations = [
    {
      id: 1,
      name: 'Prague, Czech Republic',
      description: 'Discover the charming capital city of the Czech Republic.',
      image: require('../../assets/images/Destination1.jpeg'),
    },
    {
      id: 2,
      name: 'Athens, Greece',
      description: 'Explore the birthplace of democracy and ancient wonders.',
      image: require('../../assets/images/Destination2.webp'),
    },
    {
      id: 3,
      name: 'Barcelona, Spain',
      description: 'Experience vibrant culture, stunning architecture, and beautiful beaches.',
      image: require('../../assets/images/Destination3.jpeg'),
    },
    {
      id: 4,
      name: 'Paris, France',
      description: 'Immerse yourself in art, fashion, and culinary delights in the City of Light.',
      image: require('../../assets/images/Destination4.jpeg'),
    },
    {
      id: 5,
      name: 'Florence, Italy',
      description: 'Marvel at Renaissance art and architecture in this historic city.',
      image: require('../../assets/images/Destination5.webp'),
    },
    {
      id: 6,
      name: 'Vienna, Austria',
      description: 'Experience classical music, imperial palaces, and rich history.',
      image: require('../../assets/images/Destination6.webp'),
    },
    {
      id: 7,
      name: 'Amsterdam, Netherlands',
      description: 'Explore picturesque canals, historic buildings, and vibrant nightlife.',
      image: require('../../assets/images/Destination8.jpeg'),
    },
    {
      id: 8,
      name: 'Dublin, Ireland',
      description: 'Discover charming pubs, lively music, and stunning natural landscapes.',
      image: require('../../assets/images/Destination1.jpeg'),
    },
    // Add more destinations as needed
  ];
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{height: 50}}>
<AppBar
top={0}
left={0}
right={0}
title={'Inspire Me'} color={COLORS.white} icon={'search1'} color1={COLORS.white}
onPress={() => navigation.goBack()}
onPress1={() => navigation.navigate('HotelSearch')}
/>
</View>
      {destinations.map((destination) => (
        <TouchableOpacity
          key={destination.id}
          style={styles.destinationContainer}
        >
          <Image source={destination.image} style={styles.destinationImage} />
          <View style={styles.destinationInfo}>
            <Text style={styles.destinationName}>{destination.name}</Text>
            <Text style={styles.destinationDescription}>{destination.description}</Text>
            <TouchableOpacity style={styles.exploreButton}
               onPress={() => navigation.navigate('HotelsDetails')}
            >
              <Text style={styles.exploreButtonText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  destinationImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  destinationInfo: {
    flex: 1,
    padding: 10,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  destinationDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  exploreButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  exploreButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InspireMe;
