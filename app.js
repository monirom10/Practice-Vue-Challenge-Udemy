const app = Vue.createApp({
    data(){
        return {
            name: "",
            nameValue: "",
            age: "",
            ageInput: "",
            image: "./image/picture.jpg",
        }
    },
    methods: {
        agePlusFive(){
            return this.age + 5;
        },
        randomNumber(){
            return Math.ceil(Math.random());
        },
        submit(){
            if( this.nameInput !== "" && this.ageInput !== ""){
                this.name = this.nameInput;
                this.nameInput = "";
                this.age = parseFloat(this.ageInput);
                this.ageInput = "";
                if(true){
                    swal({
                        title: "Successful!",
                        text: "Thanks for testing!",
                        icon: "success",
                        button: "Close!",
                      });
                }
                else{
                    swal({
                        title: "Try again!",
                        text: "Please input name or age",
                        icon: "error",
                        button: "Try again!",
                      });
                }
            }
            else{
                swal({
                    title: "Try again!",
                    text: "Please input name or age",
                    icon: "error",
                    button: "Try again!",
                  });
            }
            
        }
    }
});

app.mount('#app');