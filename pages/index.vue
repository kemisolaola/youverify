<template>
  <div class="relative">
    <NavBar />
    <div class="grid lg:grid-cols-5 h-full bg-lightgrey">
      <SideBar class="col-span-1 hidden lg:block" />
      <div class="grid mt-10 col-span-4 w-full">
        <div class="col-span-1 relative">
          <!--  .-->
          <div
            @click.self="toggleTask"
            class="backdrop transform absolute top-0 left-0 h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            v-if="openTask"
          >
            <TaskView
              class="transform absolute top-0 left-0 w-80 md:w-96 bg-white h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            />
          </div>
          <div
            @click.self="toggleAgent"
            class="backdrop transform absolute top-0 left-0 h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            v-if="agents"
          >
          <AgentView
           
            class="transform absolute top-0 right-0 w-80 md:w-96 bg-white h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          />
          </div>

          <GMap
            class="h-screen relative"
            ref="gMap"
            language="en"
            :cluster="{ options: { styles: clusterStyle } }"
            :center="{ lat: locations[0].lat, lng: locations[0].lng }"
            :options="{ fullscreenControl: false }"
            :zoom="6"
          >
            <div
              @click="toggleTask"
              class="w-10 h-10 bg-black absolute top-0 left-0 text-white text-center flex items-center justify-center"
            >
              <img src="../assets/images/left.svg" alt="" />
            </div>
            <div
              @click="toggleAgent"
              class="w-10 h-10 bg-black absolute top-0 right-0 text-white flex justify-center items-center"
            >
              <img src="../assets/images/right.svg" alt="" />
            </div>
            <GMapMarker
              class="h-full"
              v-for="location in locations"
              :key="location.id"
              :position="{ lat: location.lat, lng: location.lng }"
              :options="{
                icon:
                  location === currentLocation
                    ? pins.selected
                    : pins.notSelected,
              }"
              @click="currentLocation = location"
            >
            </GMapMarker>
            <GMapCircle />
          </GMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      openTask: false,
      agents: false,
      currentLocation: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: '15.9819',
        },
        {
          lat: '45.12',
          lng: '16.21',
        },
      ],
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
  methods: {
    toggleTask() {
      console.log('mlsqknf')
      this.openTask = !this.openTask
    },
    toggleAgent() {
      this.agents = !this.agents
    },
  },
}
</script>
<style>
.backdrop {
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
  } 
</style>
