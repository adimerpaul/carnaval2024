<template>
  <q-page>
    <l-map ref="map" v-model:zoom="zoom" :center="[-17.969, -67.112]" :use-global-leaflet="false" style="height: calc(100vh - 107px)" :max-zoom="17" :min-zoom="12">
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
      <l-control-layers
        position="topright"
        :collapsed="false"
        :sort-layers="true"
      />
      <l-polyline
        :lat-lngs="polyline.latlngs"
        :color="polyline.color"
        :opacity="polyline.opacity"
        :weight="polyline.weight"
      />
      <l-control position="topleft">
<!--        <q-btn-->
<!--          dense-->
<!--          no-caps-->
<!--          color="primary"-->
<!--          size="sm"-->
<!--          :icon="visibleMap?'satellite':'map'"-->
<!--          :label="visibleMap?'Sate':'Mapa'"-->
<!--          @click="visibleMap = !visibleMap"-->
<!--        />-->
      </l-control>
    </l-map>
  </q-page>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LControl, LControlLayers, LPolyline } from '@vue-leaflet/vue-leaflet'
import dataLine from 'src/pages/line.json'
const tileProviders = [
  {
    name: 'Mapa',
    visible: true,
    url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
  },
  {
    name: 'Satelite',
    visible: false,
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
  }
]
import { io } from 'socket.io-client'
import { api, url } from 'boot/axios'
export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    LControlLayers,
    LPolyline
  },
  data () {
    return {
      socket: io('http://localhost:3000'),
      tileProviders,
      visibleMap: true,
      zoom: 15,
      dancers: [],
      polyline: {
        opacity: 0.5,
        weight: 10,
        latlngs: dataLine,
        color: 'green'
      }
    }
  },
  mounted () {
    // console.log(dataLine)
    api.get('dancers').then((res) => {
      this.dancers = res.data
      console.log(this.dancers)
      // this.dancers.forEach((d) => {
      //   this.polyline.latlngs.push([d.lat, d.lng])
      // })
    })
  }
}
</script>
