import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import { HeightSpacer } from '../../components';

const JoinCommunity = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
<View style={{height: 100}}>
<AppBar
top={10}
left={0}
right={0}
title={'Join Community'} color={COLORS.white} icon={'search1'} color1={COLORS.white}
onPress={() => navigation.goBack()}
onPress1={() => navigation.navigate('HotelSearch')}
/>
</View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Community"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

   <HeightSpacer height={10}/>

  
      <View style={styles.featuredPosts}>
        {/* Featured Post 1 */}
        <TouchableOpacity style={styles.featuredPost}>
          <Text style={styles.featuredPostTitle}>10 Must-See Destinations in Europe</Text>
          <Image source={require('../../assets/images/3m.png')} style={styles.featuredPostImage} />
        </TouchableOpacity>
        {/* Featured Post 2 */}
        <TouchableOpacity style={styles.featuredPost}>
          <Text style={styles.featuredPostTitle}>Tips for Traveling Solo as a Senior</Text>
          <Image source={require('../../assets/images/3.png')} style={styles.featuredPostImage} />
        </TouchableOpacity>
        {/* Add more featured posts as needed */}
      </View>

      {/* Recent Activity Feed */}
      <ScrollView>
        {/* Recent Activity Item 1 */}
        <TouchableOpacity style={styles.activityItem}>
          <Text style={styles.activityText}>John Doe commented on your post</Text>
        </TouchableOpacity>
        {/* Recent Activity Item 2 */}
        <TouchableOpacity style={styles.activityItem}>
          <Text style={styles.activityText}>Mary Smith liked your post</Text>
        </TouchableOpacity>
        {/* Add more recent activity items as needed */}
      </ScrollView>

      {/* Create Post Button */}
      <TouchableOpacity style={styles.createPostButton}>
        <Text style={styles.createPostButtonText}>Create Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  featuredPosts: {
    marginBottom: 20,
  },
  featuredPost: {
    marginBottom: 10,
  },
  featuredPostTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredPostImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  activityItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  activityText: {
    fontSize: 16,
  },
  createPostButton: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createPostButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JoinCommunity;
