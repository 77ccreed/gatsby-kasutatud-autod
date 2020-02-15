import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class MyMap extends Component {

  render() {
    const { options } = this.props
    const position = [51.505, -0.09]

    if (typeof window !== 'undefined') {
      return (
        <Map center={position} zoom={13}{...options}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2l1ciIsImEiOiJjazY2aXQ5d2oxZTNvM2tvNDUxN2d2YjNmIn0.q8dvIiXadnmD3fpHabyfhA'
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      )
    }
    return null
  }
}