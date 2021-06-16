<template>
  <p>Your Current Location on the Map</p>
  <div ref="mapDiv" style="width: 100%; height:80vh"></div>
</template>

<script>
/* eslint-disable */
import { computed, onMounted, ref } from "vue";
import { useGeolocation } from "../useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = "AIzaSyBLWiq2enLwOii4yEnBAnDcnIMJEXNuNyo";

export default {
  setup() {
    const { coords } = useGeolocation();
    console.log("COORDS", coords);

    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader({ apiKey: API_KEY });
    const mapDiv = ref(null);
    onMounted(async () => {
      await loader.load();
      const map = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 18,
      });
      new google.maps.Marker({ position: currPos.value, map });
    });
    return { currPos, mapDiv };
  },
};
</script>
