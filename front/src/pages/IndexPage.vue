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
        v-for="dancer in dancers"
        :lat-lng="[dancer.latitud, dancer.longitud]"
        style="background: red"
        :key="dancer.id"
      >
        <l-icon
          :icon-url="'data:image/png;base64,' + dancer.image"
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
        color: 'orange'
      },
      moveMarker (dancer) {
        const currentPosition = dancer.position
        console.log('currentPosition', currentPosition)
        const nextLatLng = dataLine[currentPosition + 1]
        if (nextLatLng) {
          dancer.latitud = nextLatLng[0]
          dancer.longitud = nextLatLng[1]
          dancer.position += 1

          // Llama a moveMarker recursivamente después de la duración calculada
          setTimeout(() => {
            this.moveMarker(dancer)
          }, (1 / parseFloat(dancer.velocity)) * 1000)
        }
      }
    }
  },
  async mounted () {
    await api.get('dancers').then((res) => {
      this.dancers = res.data
    })

    // Inicializa la propiedad lastUpdateTime para cada bailarín
    // this.dancers.forEach((dancer) => {
    //   dancer.lastUpdateTime = new Date()
    // })

    // Llama a moveMarker para el primer bailarín
    this.dancers.forEach((dancer) => {
      if (dancer.position !== 0) {
        this.moveMarker(dancer)
      }
    })
  }
}
</script>
