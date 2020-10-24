export default {
  data() {
    return {
      stylist: {
        "typeJobs": [
          "Peluquería",
          "Maquillaje"
        ],
        "locations": [
          "Rafael Uribe Uribe",
          "Engativá",
          "La Candelaria",
          "Usaquén"
        ],
        "name": "Andres Gomez",
        "email": "andres@gmail.com",
        "number": 3202901619,
        "address": "cr 13 #44-34",
        "identifier": 1023962033,
        "jobs": [
          {
            "name": "Corte de cabello",
            "price": 10000
          },
          {
            "name": "Tintura",
            "price": 80000
          },
          {
            "name": "Reparación de cabello",
            "price": 30000
          },
          {
            "name": "Cepillado",
            "price": 15000
          },
          {
            "name": "Maquillaje de dia",
            "price": 10000
          },
          {
            "name": "Maquillaje de noche",
            "price": 15000
          }
        ],
        "photo": "https://cdn2.actitudfem.com/media/files/styles/large_auto/public/images/2016/02/notahombreperfecto.jpg",
        "jobsExamples": [
          {
            "photo": "https://i1.wp.com/www.soymoda.net/wp-content/uploads/2016/06/image-1.jpg?ssl=1",
            "description": "Maquillaje noche",
            "price": 15000
          },
          {
            "photo": "https://s24193.pcdn.co/wp-content/uploads/2017/05/what-is-balayage-entity-balayageombre.png",
            "description": "Balayage",
            "price": 170000
          },
          {
            "photo": "https://www.somosmamas.com.ar/wp-content/uploads/2018/10/maquillaje-de-dia-para-morenas-look.jpg",
            "description": "Maquillaje de día",
            "price": 10000
          },
          {
            "photo": "https://blogmujeres.com/wp-content/uploads/2018/01/cortes-de-pelo-corto-para-mujer-despuntado-ursula-corbero.jpg",
            "description": "Corte de señorita",
            "price": 16000
          }
        ]
      },
      showDialog: false,
      newJobName: '',
      newJobPrice: '',
      newJobImage: '',
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
    addStylistJob() {

    },
  },
  computed: {

  },
  mounted() {


  }
}