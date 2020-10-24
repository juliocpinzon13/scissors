export default {
  data() {
    return {
      showDialog: false,
      stylistName: '',
      stylistEmail: '',
      stylistPhone: '',
      stylistAddresses: '',
      stylistIdentifier: '',
      step: 0,
      locations: ['Rafael Uribe Uribe', 'Engativá', 'Ciudad Bolívar', 'La Candelaria', 'Usaquén', 'Antonio Nariño', 'Mártires, Fontibón', 'Barrios Unidos', 'Usme', 'Kennedy'],
      typesJobs: ['Peluquería', 'Manicura', 'Maquillaje'],
      hairdressingJobs: ['Corte de cabello', 'Tintura', 'Reparación de cabello', 'Peinado hombre', 'Peinado mujer', 'Peinado niña', 'Cepillado', 'Planchado de cabello'],
      makeupJobs: ['Maquillaje de noche', 'Maquillaje de día', 'Pestañas postizas', 'Pestañas pelo a pelo', 'Depilación de cejas', 'Depilación de bigote'],
      manicureJobs: ['Manicura', 'Pedicura', 'Uñas postizas'],
      selectedLocations: [],
      selectedClientLocation: '',
      selectedTypeJobs: [],
      selectedJobs: [],
      jobsWithPriceArray: [],
      pricesArray: [],
      password: '',
      confirmationPassword: '',
      shouldValidate: false,
      photoSuccessful: false,
      goTo: "clientHome",
      userPhoto: 'http://drive.google.com/uc?export=view&id=1GJi3MFVSMDAGUcidYOauFZcjHyXzOxGS'
    }
  },
  props: {
    title: String,
    description: String,
    buttonText: String,
    clientStyle: Boolean,
    styleObject: {},
    userType: String
  },
  computed: {
    jobsList() {
      let listJobs = [];
      this.selectedTypeJobs.forEach((current) => {
        if (current === 'Peluquería') {
          listJobs = [...listJobs, ...this.hairdressingJobs]
        }
        if (current === 'Manicura') {
          listJobs = [...listJobs, ...this.makeupJobs]
        }
        if (current === 'Maquillaje') {
          listJobs = [...listJobs, ...this.manicureJobs]
        }
      });

      listJobs.forEach((current) => {
        this.pricesArray.push({
          name: current,
          price: ''
        });
      });
      return listJobs
    },
    inputsErrors() {
      return this.shouldValidate && {
        name: !this.stylistName && 'El campo no puede estar vacio',
        email: (!this.stylistEmail && 'El campo no puede estar vacio') || (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          .test(String(this.stylistEmail).toLowerCase()) && 'El valor ingresado no es un email'),
        phone: (!this.stylistPhone && 'El campo no puede estar vacio') || (!(this.stylistPhone.length === 10) && 'El número debe tener 10 dígitos'),
        address: !this.stylistAddresses && 'El campo no puede estar vacio',
        identifier: this.userType === 'client' ? false : !this.stylistIdentifier && 'El campo no puede estar vacio',
        locations: this.userType === 'client' ? false : this.selectedLocations.length === 0 && 'Debe seleccionar al menos una',
        typesJob: this.userType === 'client' ? false : this.selectedTypeJobs.length === 0 && 'Debe seleccionar al menos una',
        clientLocation: this.userType === 'stylist' ? false : !this.selectedClientLocation && 'El campo no puede estar vacio',
        password: false,
        confirmationPassword: false
      };
    }
  },
  methods: {
    saveStylist() {
      const jobsWithPrice = [];
      for (let i = 0; i < this.jobsWithPriceArray.length; i++) {
        let current1 = this.jobsWithPriceArray[i];

        for (let j = 0; j < this.pricesArray.length; j++) {
          let current2 = this.pricesArray[j];

          if (current1 === current2.name) {
            jobsWithPrice.push(current2)
          }
        }
      }
      fetch('https://scissors-back.herokuapp.com/api/stylists', {
        method: 'POST',
        body: JSON.stringify({
          "name": this.stylistName,
          "email": this.stylistEmail,
          "number": this.stylistPhone,
          "address": this.stylistAddresses,
          "identifier": this.stylistIdentifier,
          "typeJobs": this.selectedTypeJobs,
          "jobs": jobsWithPrice,
          "photo": "",
          "locations": this.selectedLocations,
          "jobsExamples": []
        }),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => {
          // this.getTasks();(getStylists)
          //redirigir a pagina principal
        });

    },
    saveClient() {
      console.log("entre dos veces");
      fetch('https://scissors-back.herokuapp.com/api/clients', {
        method: 'POST',
        body: JSON.stringify({
          "name": this.stylistName,
          "email": this.stylistEmail,
          "number": this.stylistPhone,
          "address": this.stylistAddresses,
          "location": this.selectedClientLocation,
          "photo": ""
        }),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => {
          // this.getTasks(); (getClients)
          //redirigir a pagina principal
        });

    },
    changeStep(step) {
      if (this.step === 1 && step === 1) {
        this.step = 0;
        this.goTo = "stylistHome";
        this.showDialog = false;

        //guardar datos
        this.saveStylist();

      }
      else if (this.step === 0 && step === 0) {
        this.step = 0;
        this.showDialog = false;
      }
      else {
        //verification of data
        this.shouldValidate = true;

        if (!Object.values(this.inputsErrors).some((current) => current)) {
          //everything is ok
          console.log("entre uno");
          if (this.userType === 'stylist') {
            this.step = step;
          }
          else {
            console.log("entre");
              this.showDialog = false;
              this.saveClient();
          }
        }
      }
    }
  }
}