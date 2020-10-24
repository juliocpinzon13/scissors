<template>
    <md-dialog :md-active.sync="showPricesDialog" class="prices-list__dialog">
      <md-dialog-title class="prices-list__title">Lista de precios promedios</md-dialog-title>
      <md-dialog-content>
      <div v-for="(job, i) in pricesList" class="prices-list__job-container" :value="job" :key="job + i">
        <div class="prices-list__circle"/>
        <div class="prices-list__job">{{job.name}}</div>
        <div class="prices-list__price">{job.price}}</div>
      </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog">Salir</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>
<style lang="scss">
  @import "pricesList.css";
</style>