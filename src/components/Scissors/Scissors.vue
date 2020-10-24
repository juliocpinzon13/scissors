<template>
  <div class="scissors">
    <div class="info-container">
      <div class="info-container__title md-display-4">scissors</div>
      <div class="info-container__description md-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <router-link to="profilePicker">
        <md-button class="md-raised md-primary info-container__sign-up">Crear cuenta</md-button>
      </router-link>
      <md-button class="md-primary info-container__log-in" @click="showLogInDialog=true">Ingresar</md-button>
    </div>
    <md-dialog :md-active.sync="showLogInDialog" class="scissors__dialog">
      <md-dialog-title class="dialog-title scissors__log-in-title">Ingresar</md-dialog-title>
      <md-dialog-content class="scissors__dialog-content">
          <div class="scissors__pick-profile-log-in">
            <md-radio v-model="goTo" value="clientHome">Cliente</md-radio>
            <md-radio v-model="goTo" value="stylistHome">Estilista</md-radio>
          </div>
          <md-field :class="['user-field-log-ing', {'md-invalid': inputsErrorsLogIn.email}]">
            <label>Correo*</label>
            <md-input v-model="email"></md-input>
            <span class="md-error">{{inputsErrorsLogIn.email}}</span>
          </md-field>
          <md-field :class="['user-field-log-ing', {'md-invalid': inputsErrorsLogIn.password}]">
            <label>Contraseña*</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error">{{inputsErrorsLogIn.password}}</span>
          </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">Cancelar</md-button>
        <router-link tag="li" :to="goTo">
          <md-button class="md-primary" @click="logIn()">Continuar</md-button>
        </router-link>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script src="./Scissors.js"/>
<style src="./Scissors.scss" lang="scss"/>
