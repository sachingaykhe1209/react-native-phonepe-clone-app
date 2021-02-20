//Import React
import React from 'react';

//Import all required component
import { View, Image, TouchableOpacity } from 'react-native';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text>Inceptive</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;