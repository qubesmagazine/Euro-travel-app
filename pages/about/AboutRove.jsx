import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { COLORS } from '../../constants/theme';
import AppBar from '../../components/Reusable/AppBar';

const AboutApp = ({ navigation }) => {
  return (
    <SafeAreaView >
      <View style={{ height: 100 }}>
        <AppBar
          top={30}
          left={10}
          right={10}
          title={'About'}
          color={COLORS.white}
          icon={'search1'}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate('HotelSearch')}
        />
      </View>

      <View style={styles.container}>
      <Text style={styles.description}>
        Welcome to EuroElder Travel, your go-to app for adventurous travel experiences designed for older adults.
        Explore unique destinations, connect with fellow travelers, and create unforgettable memories.
      </Text>

      {/* Features */}
      <Text style={styles.sectionTitle}>Key Features</Text>
      <View style={styles.featureList}>
        <Text style={styles.feature}>Discover exciting travel destinations</Text>
        <Text style={styles.feature}>Connect with like-minded travelers</Text>
        <Text style={styles.feature}>Book accommodations and activities</Text>
        <Text style={styles.feature}>Join community discussions and events</Text>
        <Text style={styles.feature}>Receive personalized travel recommendations</Text>
      </View>

      {/* About Us */}
      <Text style={styles.sectionTitle}>About Us</Text>
      <Text style={styles.description}>
        EuroElder Travel is dedicated to providing safe, enjoyable, and enriching travel experiences for older adults.
        Our team consists of passionate travelers and experienced professionals committed to making travel accessible
        and enjoyable for seniors.
      </Text>

      {/* Contact Information */}
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <Text style={styles.contactInfo}>Email: okwudilionyido@icloud.com</Text>
      <Text style={styles.contactInfo}>Phone: +234 906 756 1649</Text>
      <Text style={styles.contactInfo}>Address: 123 Travel Street, City, Country</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureList: {
    marginBottom: 20,
  },
  feature: {
    fontSize: 16,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutApp;
