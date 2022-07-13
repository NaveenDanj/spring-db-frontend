<template>
  <div class="containerr">
    
    <div class="loginContainer">
        
        <v-row style="height : 100%">

            <v-col cols="12" md="6" style="background-color : #080E15">

                <div class="formContainer">
                    <form>
                        <img src="https://templates.iqonic.design/server360/html-dark/images/login/mail.png" />
                        <h1 style="margin-bottom : 10px;">Success !</h1>
                        <label>A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</label>

                        <div class="mt-5">
                            <v-btn large color="#5645AA" dark rounded>Back to Home</v-btn>
                        </div>

                    </form>
                </div>

            </v-col>

            <v-col cols="12" md="6" style="background-color : #7F62FB">
                <div class="formContainer">
                    <div class="logoContainer">
                        <center><img width="250" src="https://templates.iqonic.design/server360/html-dark/images/logo-full.png" /></center><br/>
                        <label>Enter your personal details and start journey with us</label><br/>
                        <center><v-btn dense outlined width="150" dark rounded>Sign up</v-btn></center>
                    </div>
                </div>
            </v-col>

        </v-row>


    </div>


  </div>
</template>


<style scoped>
.containerr {

    background-color : #010203;
    color : white;
    width : 100vw;
    height : 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.loginContainer{
    height: 90vh;
    width: 60%;
    border: 1px solid black;
    border-radius: 40px;
}

.formContainer{
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.logoContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>