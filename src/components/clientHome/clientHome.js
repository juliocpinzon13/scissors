export default {
  data() {
    return {
      manicure: false,
      hairdressing: false,
      makeup: false,
      location: 'Antonio Nariño',
      hour: '12',
      time: 'pm',
      selectedDate: null,
      stylists: [],
      showPricesDialog: false,
      pricesList: [
      {
        name: "Corte de cabello mujer",
        price: 12000
      },
      {
        name: "Corte de cabello hombre",
        price: 10000
      },
      {
        name: "Peinado de mujer",
        price: 15000
      },
      {
        name: "Peinado de hombre",
        price: 8000
      },
      {
        name: "Maquillaje de noche",
        price: 20000
      },{
        name: "Maquillaje de dia",
        price: 15000
      },{
        name: "Manicura",
        price: 10000
      },
      {
        name: "Pedicura",
        price: 13000
      },
    ]
    }
  },
  props: {

  },
  methods: {
    filterStylists() {

    },
  },
  computed: {

  },
  mounted() {
      fetch('https://scissors-back.herokuapp.com/api/stylists', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      })
        .then(res => res.json())
        .then((stylists) => {
          console.log("estilistas");
          this.stylists = stylists;
          console.log(this.stylists)
        });

    }
}