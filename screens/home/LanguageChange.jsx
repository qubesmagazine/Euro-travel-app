import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo icons
import { useTranslation } from 'react-i18next';
import i18next from '../../services/i18next';
import languagesList from '../../services/languagesList.json'
import {languageResources} from '../../services/i18next';
import { useNavigation } from '@react-navigation/native';
import { HeightSpacer } from '../../components';


const LanguageChange = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false)
   const {t} = useTranslation();

   const changeLng = lng => {
i18next.changeLanguage(lng);
setVisible(false)
   };


  return (
    <View style={styles.container}>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.languageList}>
        <FlatList data={Object.keys(languageResources)} renderItem={({item}) => (
  <TouchableOpacity style={styles.languageButton} onPress={() => changeLng(item)}>
    <Text style={styles.lngName}>{languagesList[item].nativeName}</Text>
  </TouchableOpacity>
)} />
        </View>

      </Modal>
         {/* Button */}
         <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('Change-Language')}</Text>
      </TouchableOpacity>
      {/* Box 1 */}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Bottom')}>
        <Text style={styles.text}>{t('Explore')}</Text>
        <Ionicons name="ios-apps" size={24} color="white" />
      </TouchableOpacity>
      
      {/* Box 2 */}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('InspireMe')}>
        <Text style={styles.text}>{t('Inspire-me')}</Text>
        <Ionicons name="ios-bulb" size={24} color="white" />
      </TouchableOpacity>

      {/* Box 3 */}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('BookHoliday')}>
        <Text style={styles.text}>{t('Book-Holiday')}</Text>
        <Ionicons name="ios-book" size={24} color="white" />
      </TouchableOpacity>

      {/* Box 4 */}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('TravelPartners')}>
        <Text style={styles.text}>{t('Travel-partners')}</Text>
        <Ionicons name="ios-people" size={24} color="white" />
      </TouchableOpacity>

      {/* Box 5 */}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('JoinCommunity')}>
        <Text style={styles.text}>{t('Community')}</Text>
        <Ionicons name="ios-people" size={24} color="white" />
      </TouchableOpacity>

      {/* Box 6 */}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AboutRove')}>
        <Text style={styles.text}>{t('About EuroElder-Travel')}</Text>
        <Ionicons name="ios-information-circle" size={24} color="white" />
      </TouchableOpacity>

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  box: {
    width: '100%',
    height: 80,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

    
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#cd5c5c',
    padding: 10,
    borderRadius: 20,
  
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  languageList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'skyblue',
    },
    languageButton: {
      padding: 10,
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
    
      },
      
      lngName: {
      fontSize: 16,
      color: 'white',
      marginTop: 70,
      
      }
});

export default LanguageChange ;


