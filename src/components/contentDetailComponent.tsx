//sys
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { useSelector, useDispatch } from 'react-redux';
//usr

const ContentDetails = () => {
  return (
    <View>
      <Text style={{ color: 'white', marginTop: 20 }}>Content</Text>
    </View>
  );
};

export default ContentDetails;
