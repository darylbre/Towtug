{!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && 
  <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"
  />
}

{!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && 
  <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"
  />
}