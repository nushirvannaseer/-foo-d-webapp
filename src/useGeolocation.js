import { onUnmounted, onMounted, ref } from "vue";

export function useGeolocation() {
  const coords = ref({ latitude: 0, longitude: 0 });
  console.log("BNWSKJB", coords);
  //   const isSupported = "navigator" in window && "geolocation" in navigator;

  let watcher = null;

  onMounted(() => {
    // if (isSupported) {
    watcher = navigator.geolocation.watchPosition(
      (position) => (coords.value = position.coords)
    );
    console.log("COORDS", coords);
    // }
  });

  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });

  return { coords };
}
