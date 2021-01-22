<template>
  <div class="contact-form mb-3">
        <mdb-container class="mt-4">
          <mdb-card>
            <mdb-card-title class="mt-4 h2">Contact us</mdb-card-title>
            <mdb-card-body>
              <mdb-card-text class="pr-5 pl-5" mr-4 ml-4
              >Do you have any questions? Please do not hesitate to contact us
                directly. Our team will get back to you within a matter of hours
                to help you.
              </mdb-card-text
              >
              <form
                  class="needs-validation"
                  novalidate
                   action="https://getform.io/f/162f1791-e481-404a-be0e-284edf2dee53" method="POST"
              >
                <mdb-row>
                  <mdb-col md="8">
                    <mdb-row>
                      <mdb-col>
                        <mdb-input
                            label="Nom"
                            v-model="fields.name"
                            required
                            name="name"
                        />
                      </mdb-col>
                      <mdb-col>
                        <mdb-input
                            type="email"
                            label="Email"
                            v-model="fields.email"
                            required
                            name="mail"
                        />
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col>
                        <mdb-input
                            type="textarea"
                            label="Ton message"
                            v-model="fields.message"
                            required
                            name="message"
                            
                        />
                      </mdb-col>
                    </mdb-row>
                  </mdb-col>
                  <mdb-col md="4">
                    <mdb-row>
                      <mdb-col class="mt-4">
                        <mdb-icon icon="map-marker-alt" size="2x" style="color:#F3BA00;"/>
                        <p>7 rue de l'espace, Nantes, 44000</p>
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col class="mt-4">
                        <mdb-icon icon="phone" size="2x"/>
                        <p>06 95 45 25 10</p>
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col class="mt-4">
                        <mdb-icon icon="envelope" size="2x" style="color:#7673FE;" />
                        <p>nationsounds@contact.com</p>
                      </mdb-col>
                    </mdb-row>
                  </mdb-col>
                </mdb-row>
                <mdb-btn
                   
                    type="submit"
                    class=""
                >Send
                </mdb-btn
                >
              </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-container>
      </div>
</template>

<script>
import {
  mdbContainer,
  mdbInput,
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  mdbIcon,
  mdbBtn,
  mdbRow,
  mdbCol,
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbCardText,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      fields: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}

.image_contact {
  width: 100%;
  height: 50vh;
}

.contact-titre {
  text-align: center;
  font-size: 1.5em;
  background-color: black;
  height: 10vh;
}
#body > div > div.container-contact > div.contact-form.mb-3 > div > div > div > form > button{

  background-color:#F3BA00!important;
  color: white;

}
</style>