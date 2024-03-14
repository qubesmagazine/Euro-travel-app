import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, TEXT } from "../../constants/theme";
import { HeightSpacer, Places, ReusableText } from "../../components";

const TravelPartners = ({ navigation }) => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [partners, setPartners] = useState([]);

  const handleSearch = () => {
    console.log(
      "Searching for travel partners to",
      destination,
      "from",
      departureDate,
      "to",
      returnDate
    );
    const dummyPartners = [
      {
        id: 1,
        name: "John",
        age: 65,
        interests: ["Hiking", "Sightseeing"],
        availability: "Flexible",
      },
      {
        id: 2,
        name: "Mary",
        age: 70,
        interests: ["Cultural Tours", "Photography"],
        availability: "Weekends",
      },
    ];
    setPartners(dummyPartners);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 50}}>
      <AppBar
          top={20}
          left={0}
          right={0}
          title={"Travel Partners"}
          color={COLORS.white}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />

      </View>

      <HeightSpacer height={50} />
      <View>
        <ReusableText
          text={"Destinations"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />
      </View>

      <HeightSpacer height={50} />
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

      <FlatList
        data={partners}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.partnerItem}
            onPress={() => console.log(`View profile of ${item.name}`)}
          >
            <Text style={styles.partnerName}>
              {item.name}, {item.age}
            </Text>
            <Text style={styles.partnerInfo}>
              Interests: {item.interests.join(", ")}
            </Text>
            <Text style={styles.partnerInfo}>
              Availability: {item.availability}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  partnerItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  partnerName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  partnerInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TravelPartners;
