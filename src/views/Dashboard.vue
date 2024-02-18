<script setup lang="ts">
import { useContractStore } from "@/stores/contract";
import { useUserStore } from "@/stores/user";

const user = useUserStore();
const contract = useContractStore();

function register() {
  user.register({
    email: "ensieh.hassanzadeh@gmail.com",
    first_name: "Test",
    last_name: "Testi",
    password: "12345",
    phone_number: "+989923180528",
    username: "Test",
    ver_code: 1111111,
    ver_id: 24,
  });
}

async function contractList() {
  const result = await contract.list();
  console.log(result);
}
</script>

<template>
  <div>
    <router-link to="/login">
      <Button label="Login" class="m-2" />
    </router-link>
    <Button label="Register" class="m-2" @click="register" />
    <router-link to="/change-password">
      <Button label="Change Password" class="m-2" />
    </router-link>
    <Button label="Contract List" class="m-2" @click="contractList" />
  </div>
</template>
