
export default {
  data() {
    return {
      showLogInDialog: false,
      shouldValidateLogIn: false,
      email: '',
      password: '',
      goTo: 'stylistHome',
    }
  },
  created() {

  },
  computed: {
    inputsErrorsLogIn() {
      return this.shouldValidateLogIn && {
        email: !this.email && 'El campo no puede estar vacio',
        password: !this.password && 'El campo no puede estar vacio',
      };
    }
  },
  methods: {
    logIn() {
      this.shouldValidateLogIn = true;
      if(!Object.values(this.inputsErrorsLogIn).some((current) => current)){
        this.closeDialog();
      }
    },
    closeDialog () {
      this.showLogInDialog = false;
    }
  }
}