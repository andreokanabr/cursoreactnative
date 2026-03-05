import { StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import { Colors } from '../../themes/utilites/Colors';
import Feather from '@react-native-vector-icons/feather';
import Icon from '@react-native-vector-icons/fontawesome6';

export default function navegacao() {
  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      <Feather name="users" size={45} color="#FF0000" />

      <TouchableOpacity>
        <Feather name="video" size={45} color="#FF0000" />
      </TouchableOpacity>

      <Icon iconStyle="solid" name="users" size={45} color="#000" />
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
