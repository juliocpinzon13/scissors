export default {
  data() {
    return {
      styleObjectClient: {
        backgroundImage: `linear-gradient(to top, rgba(156,28,255, 0.5), rgba(0, 0, 51, 0.8)), url(${require("../../assets/client4.png")})`,
        animation: 'moveInRight 1s ease-in'
      },
      styleObjectStylist: {
        backgroundImage: `linear-gradient(to top, rgba(156,28,255, 0.5), rgba(0, 0, 51, 0.8)), url(${require("../../assets/stylist3.png")})`,
        animation: 'moveInLeft 1s ease-in'
      },
    }
  }
}