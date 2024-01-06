<template>
  <q-page>
    <l-map v-model:zoom="zoom" :center="[-17.969, -67.112]" :use-global-leaflet="false" style="height: calc(100vh - 107px)" :min-zoom="12">
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
      <l-marker
        :lat-lng="[-17.969, -67.112]"
        style="background: red"
      >
        <l-icon
          :icon-url="url+'/uploads/incas.png'"
          :icon-size="[40, 40]"
          :icon-anchor="[16, 40]"
        />
      </l-marker>
      <l-control-layers
        position="topright"
        :collapsed="true"
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
import { LMap, LTileLayer, LControl, LControlLayers, LPolyline, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import dataLine from 'src/pages/line.json'
const tileProviders = [
  {
    name: 'Mapa',
    visible: true,
    url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps'
  },
  {
    name: 'Satelite',
    visible: false,
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps'
  }
]
import { io } from 'socket.io-client'
import { api, url } from 'boot/axios'
export default {
  components: {
    LIcon,
    LMap,
    LTileLayer,
    LControl,
    LControlLayers,
    LPolyline,
    LMarker
  },
  data () {
    return {
      socket: io(url),
      tileProviders,
      visibleMap: true,
      zoom: 15,
      url,
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
    console.log(url + 'uploads/incas.png')
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
