import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Network from 'expo-network';

export default function App() {
  useEffect(() => {
    (async () => {
      const ip = await Network.getIpAddressAsync();
      console.log(ip)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Network Module</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
