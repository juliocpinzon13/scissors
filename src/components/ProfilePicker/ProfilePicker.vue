<template>
  <div class="profile-picker-box">
    <div class="profile-picker" :style="styleObject">
      <div class="profile-picker__title md-display-3">{{title}}</div>
      <div class="profile-picker__description md-subheading">{{description}}</div>
      <md-button class="profile-picker__button" @click="showDialog = true">{{buttonText}}</md-button>
    </div>
    <md-dialog :md-active.sync="showDialog" class="profile-picker__dialog">
      <md-dialog-title class="dialog-title">{{this.userType === 'stylist' ? 'Estilista' : 'Cliente'}}</md-dialog-title>
      <md-dialog-content v-if="step === 0">
        <div v-if="userType === 'stylist'" class="dialog-content-text">Agrega tus datos básicos, debes añadir en
          localidades las zonas en que puedes
          prestar tus servicios.
        </div>
        <div v-else class="dialog-content-text">Agrega tus datos básicos.</div>
        <div class="profile-picker__dialog-pick-photo-container">
          <div class="profile-picker__dialog-pick-photo" :style="{backgroundImage: 'url(' + userPhoto + ')'}"/>
          <div class="profile-picker__dialog-pick-photo-text">{{photoSuccessful ? 'Imagen cargada' : 'subir imagen'}}
          </div>
        </div>
        <div class="profile-picker__inputs-container">
          <md-field :class="['user-field', {'md-invalid': inputsErrors.name}]">
            <label>Nombre*</label>
            <md-input v-model="stylistName"></md-input>
            <span class="md-error">{{inputsErrors.name}}</span>
          </md-field>
          <md-field :class="['user-field', {'md-invalid': inputsErrors.email}]">
            <label>Correo*</label>
            <md-input v-model="stylistEmail"></md-input>
            <span class="md-error">{{inputsErrors.email}}</span>
          </md-field>
          <md-field :class="['user-field', {'md-invalid': inputsErrors.phone}]">
            <label>Número de celular*</label>
            <md-input v-model="stylistPhone" type="number"></md-input>
            <span class="md-error">{{inputsErrors.phone}}</span>
          </md-field>
          <md-field :class="['user-field', {'md-invalid': inputsErrors.address}]">
            <label>Dirección de residencia*</label>
            <md-input v-model="stylistAddresses"></md-input>
            <span class="md-error">{{inputsErrors.address}}</span>
          </md-field>
          <template v-if="userType === 'stylist'">
            <md-field :class="['user-field', {'md-invalid': inputsErrors.identifier}]">
              <label>Número de cedula*</label>
              <md-input v-model="stylistIdentifier" type="number"></md-input>
              <span class="md-error">{{inputsErrors.identifier}}</span>
            </md-field>
            <md-field :class="['user-field', {'md-invalid': inputsErrors.typesJob}]">
              <label>Profesión(es)*</label>
              <md-select v-model="selectedTypeJobs" name="typesJobs" id="typesJobs" multiple>
                <md-option v-for="typeJob in typesJobs" :value="typeJob" :key="typeJob">{{typeJob}}</md-option>
              </md-select>
              <span class="md-error">{{inputsErrors.typesJob}}</span>
            </md-field>
            <md-field :class="{'md-invalid': inputsErrors.locations}">
              <label>Localidades*</label>
              <md-select v-model="selectedLocations" name="locations" id="locations" multiple>
                <md-option v-for="location in locations" :value="location" :key="location">{{location}}</md-option>
              </md-select>
              <span class="md-error">{{inputsErrors.locations}}</span>
            </md-field>
          </template>
          <template v-else>
            <md-field :class="['user-field', {'md-invalid': inputsErrors.clientLocation}]">
              <label>Localidad</label>
              <md-select v-model="selectedClientLocation" name="locations" id="client-locations">
                <md-option v-for="location in locations" :value="location">{{location}}</md-option>
              </md-select>
              <span class="md-error">{{inputsErrors.clientLocation}}</span>
            </md-field>
          </template>
          <md-field :class="['user-field', {'md-invalid': inputsErrors.password}]">
            <label>Contraseña*</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error">{{inputsErrors.password}}</span>
          </md-field>
          <md-field :class="['user-field', {'md-invalid': inputsErrors.confirmationPassword}]">
            <label>Confirmación de contraseña*</label>
            <md-input v-model="confirmationPassword" type="password"></md-input>
            <span class="md-error">{{inputsErrors.confirmationPassword}}</span>
          </md-field>
        </div>
      </md-dialog-content>
      <md-dialog-content v-else>
        <div class="dialog-content-text">Selecciona los trabajos en los que te desempeñas y agrega un precio promedio.
        </div>
        <div class="profile-picker__dialog-info-container">
          <md-field v-for="(job, i) in jobsList" :key="job" class="profile-picker__dialog-checkbox-container">
            <div class="profile-picker__dialog-jobs-with-prices-container">
              <md-checkbox v-model="jobsWithPriceArray" :value="job" class="profile-picker__checkbox">{{job}}
              </md-checkbox>
              <md-field class="profile-picker__prices-field">
                <label>Precio</label>
                <md-input v-model="pricesArray[i].price" type="number"></md-input>
              </md-field>
              <input type="file" class="job-image"/>
            </div>
          </md-field>
        </div>
      </md-dialog-content>
      <md-dialog-actions class="optionss">
        <md-button class="md-primary" @click="changeStep(0)">{{step === 0 ? 'Cancelar' : 'Volver'}}</md-button>
        <router-link v-if="userType === 'client'" to="clientHome">
          <md-button class="md-primary" @click="changeStep(1)">Guardar</md-button>
        </router-link>
        <md-button v-if="userType === 'stylist' && step === 0" class="md-primary" @click="changeStep(1)">Continuar
        </md-button>
        <router-link v-if="userType === 'stylist' && step === 1" to="stylistHome">
          <md-button class="md-primary" @click="changeStep(1)">Guardar</md-button>
        </router-link>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script src="./ProfilePicker.js"></script>
<style lang="scss">
  @import "ProfilePicker.css";
</style>