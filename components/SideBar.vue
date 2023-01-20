<template>
  <aside class="w-full font-Sonoma bg-primary" aria-label="Sidebar">
    <div class="pb-4 overflow-y-auto bg-primary">
      <div class="bg-secondary py-4 pl-8 pr-10">
        <p class="text-light text-xl font-bold">Cheta And Daughters Limited</p>
        <p class="text-light text-md font-light font-Euclid">RC123456789</p>
      </div>
      <ul class="space-y-2 bg-primary py-9">
        <li
          
          class=" py-2"
        >
          <nuxt-link
            to="/"
            class="flex items-center p-2 cursor-pointer border-l-2 border-l-transparent text-light"
            active-class="font-semibold border-l-2 border-l-white bg-tetiary text-white"
          >
            <img src="dashboard.png" alt="" class="ml-5" />
            <span class="ml-3 text-lg  font-thin">Dashboard</span>
          </nuxt-link>
        </li>
        <li
          
          class=" py-2"
        >
          <nuxt-link
            to="/agents"
            class="flex items-center p-2 cursor-pointer border-l-2 border-l-transparent text-light"
            active-class="font-semibold border-l-2 border-l-white bg-tetiary text-white"
          >
            <img src="agent.png" alt="" class="ml-5" />
            <span class="ml-3 text-lg  font-thin">Agents</span>
          </nuxt-link>
        </li>
        <li
          
          class=" py-2"
        >
          <nuxt-link
            to="/task"
            class="flex items-center p-2 cursor-pointer border-l-2 border-l-transparent text-light"
            active-class="font-semibold border-l-2 border-l-white bg-tetiary text-white"
          >
            <img src="doc.png" alt="" class="ml-5" />
            <span class="ml-3 text-lg  font-thin">Task</span>
          </nuxt-link>
        </li>
        <li
          
          class=" py-2"
        >
          <nuxt-link
            to="/teams"
            class="flex items-center p-2 cursor-pointer border-l-2 border-l-transparent text-light"
            active-class="font-semibold border-l-2 border-l-white bg-tetiary text-white"
          >
            <img src="shield.png" alt="" class="ml-5" />
            <span class="ml-3 text-lg  font-thin">Teams</span>
          </nuxt-link>
        </li>
        <li
          
          class=" py-2"
        >
          <nuxt-link
            to="/users"
            class="flex items-center p-2 cursor-pointer border-l-2 border-l-transparent text-light"
            active-class="font-semibold border-l-2 border-l-white bg-tetiary text-white"
          >
            <img src="users.png" alt="" class="ml-5" />
            <span class="ml-3 text-lg  font-thin">Users</span>
          </nuxt-link>
        </li>
        <li
          
          class=" py-2"
        >
          <nuxt-link
            to="/settings"
            class="flex items-center p-2 cursor-pointer border-l-2 border-l-transparent text-light"
            active-class="font-semibold border-l-2 border-l-white bg-tetiary text-white"
          >
            <img src="setting.svg" alt="" class="ml-5" />
            <span class="ml-3 text-lg  font-thin">Settings</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style></style>
