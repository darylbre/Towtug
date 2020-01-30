import MapView from 'react-native-maps';

render() 
    return (
      <MapView style={styles.map} initialRegion={{
       latitude:-6.270565,
       longitude:106.759550,
       latitudeDelta: 1,
       longitudeDelta: 1
      }}>
  
      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}

      </MapView>
    );
  


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});