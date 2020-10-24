<template>
  <div class="client-home">
    <div class="client-home__top-bar">
      <div class="client-home__top-bar-title">Scissors
        <span class="client-home__top-bar-sub-title">El mejor talento a tu servicio</span>
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
    <div class="client-home__main-info">
      <md-card class="client-home__results">
        <md-card-header>
          <div class="md-title card-title">Estlistas</div>
        </md-card-header>
        <md-card-content>
          <div class="client-home__result">
            <div v-for="(result, i) in stylists" :value="result" :key="result + i" class="client-home__result-content">
              <div class="client-home__result-container">
                <div class="client-home__stylist-info-result">
                  <img class="client-home__stylist-image"
                       :src="result.photo"
                       alt="imagen perfil"/>
                  <div class="client-home__stylist-name">{{result.name}}</div>
                  <div class="client-home__stylist-jobs-container" v-for="(job, i) in result.typeJobs" :value="job"
                       :key="job + i">
                    <img class="client-home__stylist-job-icon" src="/images/chulo.png" alt="chulo"/>
                    <div class="client-home__stylist-job">{{job}}</div>
                  </div>
                  <div class="client-home__stylist-prices" @click="showPricesDialog = true">Ver tabla de precios</div>
                  <div>
                    <md-button class="md-raised md-primary client-home__stylist-contact-button">Contactar</md-button>
                    <md-tooltip md-direction="right">{{"Contactar el estilista a este numero: " + result.number}}
                    </md-tooltip>
                  </div>
                </div>
                <md-card class="client-home__stylist-work">
                  <md-card-content>
                    <div class="client-home__stylist-work-container">
                      <div class="client-home__work-container" v-for="(job, i) in result.jobsExamples" :value="job"
                           :key="job + i">
                        <img class="client-home__work-image"
                             :src="job.photo"
                             alt="Trabajo"/>
                        <div class="client-home__work-title">{{job.description}}</div>
                        <div class="client-home__work-price">{{job.price}}</div>
                      </div>
                    </div>
                  </md-card-content>
                </md-card>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
      <md-card class="client-home__filters">
        <md-card-header>
          <div class="md-title card-title">Filtros</div>
        </md-card-header>
        <md-card-content class="client-home__content">
          <div class="client-home__filter-title">Servicios</div>
          <div class="client-home__filter-container">
            <md-checkbox v-model="hairdressing" value="1" class="checkbox">Estilista</md-checkbox>
            <md-checkbox v-model="manicure" value="2" class="checkbox">Manicurista</md-checkbox>
            <md-checkbox v-model="makeup" value="3" class="checkbox">Maquillista</md-checkbox>
          </div>
        </md-card-content>
        <md-card-content class="client-home__content">
          <div class="client-home__filter-title-location">Localidad</div>
          <div class="client-home__filter-container">
            <md-field class="client-home__locations-container">
              <md-select v-model="location" name="locations" id="locations">
                <md-option value="Antonio Nariño">Antonio Nariño</md-option>
                <md-option value="Barrios Unidos">Barrios Unidos</md-option>
                <md-option value="Bosa">Bosa</md-option>
                <md-option value="Candelaria">Candelaria</md-option>
                <md-option value="Chapinero">Chapinero</md-option>
                <md-option value="Ciudad Bolivar">Ciudad Bolivar</md-option>
                <md-option value="Engativá">Engativá</md-option>
                <md-option value="Fontibon">Fontibon</md-option>
                <md-option value="Kennedy">Kennedy</md-option>
                <md-option value="Los Martires">Los Mártires</md-option>
                <md-option value="Puente Aranda">Puente Aranda</md-option>
                <md-option value="Rafael Uribe">Rafael Uribe</md-option>
                <md-option value="Santa Fe">Santa Fe</md-option>
                <md-option value="San Cristobal">San Cristóbal</md-option>
                <md-option value="Suba">Suba</md-option>
                <md-option value="Sumapaz">Sumapaz</md-option>
                <md-option value="Tunjuelito">Tunjuelito</md-option>
                <md-option value="Usaquén">Usaquén</md-option>
                <md-option value="Usme">Usme</md-option>
              </md-select>
            </md-field>
          </div>
        </md-card-content>
        <md-card-content class="client-home__content">
          <div class="client-home__filter-title-location">Fecha</div>
          <md-datepicker v-model="selectedDate"/>
        </md-card-content>
        <md-card-content class="client-home__content">
          <div class="client-home__filter-title-location">Hora</div>
          <div class="client-home__filter-container client-home__hour-and-time-container">
            <md-field class="client-home__hour-container">
              <md-select v-model="hour" name="hours" id="hours">
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3">3</md-option>
                <md-option value="4">4</md-option>
                <md-option value="5">5</md-option>
                <md-option value="6">6</md-option>
                <md-option value="7">7</md-option>
                <md-option value="8">8</md-option>
                <md-option value="9">9</md-option>
                <md-option value="10">10</md-option>
                <md-option value="11">11</md-option>
                <md-option value="12">12</md-option>
              </md-select>
            </md-field>
            <md-field class="client-home__hour-container">
              <md-select v-model="time" name="time" id="time">
                <md-option value="am">am</md-option>
                <md-option value="pm">pm</md-option>
              </md-select>
            </md-field>
          </div>
        </md-card-content>
      </md-card>
    </div>
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

<script src="./clientHome.js"></script>
<style lang="scss">
  @import "clientHome.css";
</style>