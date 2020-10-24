<template>
  <div class="profile-picker-container">
    <profile-picker title="Cliente" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" buttonText="Adquirir servicios" :styleObject="styleObjectClient" userType="client"/>
    <profile-picker title="Estilista" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" buttonText="Ofrecer servicios" :styleObject="styleObjectStylist" userType="stylist"/>
  </div>
</template>

<script src="./ProfilePickerContainer.js"></script>

<style lang="scss">
  @import "ProfilePickerContainer";
</style>