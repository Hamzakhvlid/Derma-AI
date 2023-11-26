import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ margin: 'auto', padding: 10, maxWidth: '100%' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <View style={{ maxWidth: '100%', paddingRight: 5 }}>
              <Text style={{ marginTop: 24, marginBottom: 6, fontSize: 40, fontWeight: '300', color: 'blue' }}>
                Meet your {'\n'}
                <Text style={{ borderBottomWidth: 8, borderBottomColor: 'blue', fontWeight: 'bold', color: 'blue' }}>
                  Dermatologist
                </Text>
              </Text>
              <Text style={{ fontSize: 16, color: 'gray' }}>
                Elevating Skin Wellness, Crafting Confidence – Derma AI, Your Path to Radiant Beauty and Vibrant Living!
              </Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  marginBottom: 3,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'blue',
                  padding: 6,
                  borderRadius: 8,
                }}
                onPress={() => console.log('Book Appointment Pressed')}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Book Appointment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => console.log('Get Started Pressed')}
              >
                <Text style={{ fontSize: 16, color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline' }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', maxWidth: '40%', paddingRight: 4 }}>
              
                <Text style={{ flexShrink: 1, paddingLeft: 4, fontSize: 12, color: 'gray' }}>
                  We are dedicated to providing comprehensive, quality skin care
                </Text>
              </View>
              <View style={{ flexDirection: 'row', maxWidth: '40%', paddingLeft: 4 }}>
               
                <Text style={{ flexShrink: 1, paddingLeft: 4, fontSize: 12, color: 'blue' }}>
                  Leading platform in tele-health
                </Text>
              </View>
            </View>
          </View>
          <View style={{ display: 'none' }}>
            {/* Placeholder for your hidden content */}
          </View>
        </View>
        <Fade>
         
        </Fade>
      </View>
    </ScrollView>
  );
};

export default Hero;
