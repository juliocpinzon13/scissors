<template>
  <div class="stylist-home">
    <div class="stylist-home__top-bar">
      <div class="stylist-home__top-bar-title">Scissors
        <span class="stylist-home__top-bar-sub-title">El mejor talento a tu servicio</span>
      </div>
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          <img class="client-home__top-bar-menu" src="/images/menu.png" alt="menu"/>
        </md-button>
        <md-menu-content>
          <router-link to="/">
            <md-menu-item class="close-session">Cerrar sesión</md-menu-item>
          </router-link>
        </md-menu-content>
      </md-menu>
    </div>
    <div class="stylist-home__main-info">
      <md-card class="stylist-home__card">
        <md-card-header class="stylist-home__stylist-header">
          <div class="stylist-home__stylist-info-result">
            <img class="stylist-home__stylist-image"
                 :src="stylist.photo"
                 alt="imagen perfil"/>
            <div class="stylist-home__stylist-name">{{stylist.name}}</div>
            <div class="stylist-home__stylist-jobs-container" v-for="(job, i) in stylist.typeJobs" :value="job"
                 :key="job + i">
              <img class="stylist-home__stylist-job-icon" src="/images/chulo.png" alt="chulo"/>
              <div class="stylist-home__stylist-job">{{job}}</div>
            </div>
            <div class="stylist-home__stylist-prices" @click="showPricesDialog = true">Ver tabla de precios</div>
          </div>
        </md-card-header>
        <md-card-content>
          <div class="stylist-home__stylist-work-title">Localidades en las que trabajas</div>
          <div v-for="(location, i) in stylist.locations" :value="location" :key="location + i"
               class="stylist-home__stylist-work-location-container">
            <div class="stylist-home__circle"/>
            <div class="stylist-home__location-name">{{location}}</div>
          </div>
          <div class="stylist-home__stylist-work-title stylist-home__jobs-title">Trabajos realizados</div>
          <md-card class="stylist-home__stylist-work">
            <md-card-content>
              <div class="stylist-home__stylist-work-container">
                <div class="stylist-home__work-container" v-for="(job, i) in stylist.jobsExamples" :value="job"
                     :key="job + i">
                  <img class="stylist-home__work-image"
                       :src="job.photo"
                       alt="Trabajo"/>
                  <div class="stylist-home__work-title">{{job.description}}</div>
                  <div class="stylist-home__work-price">{{'$' + job.price}}</div>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-raised md-primary" @click="showDialog = true">Agregar trabajo</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <md-dialog :md-active.sync="showDialog" class="stylist-home__stylist-new-work-title">
      <md-dialog-title class="stylist-home__stylist-work-title">Agregar trabajo</md-dialog-title>
      <md-dialog-content>
        <md-field>
          <label>Nombre</label>
          <md-input v-model="newJobName"></md-input>
        </md-field>
        <md-field>
          <label>Precio</label>
          <md-input v-model="newJobPrice"></md-input>
        </md-field>
        <md-field>
          <label>Link de imagen</label>
          <md-input v-model="newJobImage"></md-input>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Cancelar</md-button>
        <md-button class="md-primary" @click="showDialog = false">Guardar</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showPricesDialog" class="prices-list__dialog">
      <md-dialog-title class="prices-list__title">Lista de precios promedios</md-dialog-title>
      <md-dialog-content>
        <div v-for="(job, i) in pricesList" class="prices-list__job-container" :value="job" :key="job + i">
          <div class="prices-list__circle"/>
          <div class="prices-list__job">{{job.name + ":"}}</div>
          <div class="prices-list__price">{{"$" + job.price}}</div>
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showPricesDialog = false">Salir</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script src="./stylistHome.js"></script>
<style lang="scss">
  @import "stylistHome.css";
</style>