<template>
  <div>
    <h1 class="contact-titre">Vous voulez contacter la nation ?</h1>
    <div class="container-contact">
      <div class="image-contact">
        <img class="image_contact" src="@/assets/artists/angele.svg" />
      </div>
      <div class="contact-form">
        <mdb-container class="mt-5">
          <mdb-card>
            <mdb-card-title class="mt-4 h2">Contact us</mdb-card-title>
            <mdb-card-body>
              <mdb-card-text class="pr-5 pl-5" mr-4 ml-4
                >Do you have any questions? Please do not hesitate to contact us
                directly. Our team will cgetback to you within a matter of hours
                to help yoddu.</mdb-card-text
              >
              <form
                class="needs-validation"
                novalidate
                @submit.prevent="submitForm"
              >
                <mdb-row>
                  <mdb-col md="8">
                    <mdb-row>
                      <mdb-col>
                        <mdb-input
                          label="Your name"
                          v-model="fields.name"
                          required
                        />
                      </mdb-col>
                      <mdb-col>
                        <mdb-input
                          type="email"
                          label="Your email"
                          v-model="fields.email"
                          required
                        />
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col>
                        <mdb-input
                          label="Subject"
                          v-model="fields.subject"
                          required
                        />
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col>
                        <mdb-input
                          type="textarea"
                          label="Your message"
                          v-model="fields.message"
                          required
                        />
                      </mdb-col>
                    </mdb-row>
                  </mdb-col>
                  <mdb-col md="4">
                    <mdb-row>
                      <mdb-col class="mt-4">
                        <mdb-icon icon="map-marker-alt" size="2x" />
                        <p>San Francisco, CA 94126, USA</p>
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col class="mt-4">
                        <mdb-icon icon="phone" size="2x" />
                        <p>+ 01 234 567 89</p>
                      </mdb-col>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col class="mt-4">
                        <mdb-icon icon="envelope" size="2x" />
                        <p>contact@mdbootstrap.com</p>
                      </mdb-col>
                    </mdb-row>
                  </mdb-col>
                </mdb-row>
                <mdb-btn
                  color="primary"
                  type="submit"
                  class=""
                  >Send</mdb-btn
                >
              </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-container>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {
    validate() {
      const form = [...arguments];
      const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      for (let index in form) {
        let field = form[index];
        if (field === "email" && !emailRegexp.test(this.fields[field])) {
          return false;
        } else if (this.fields[field] === "") {
          return false;
        }
      }
      return true;
    },

    submitForm(event) {
        event.target.classList.add("was-validated");
        if (this.validate("email", "name", "message", "subject")) {
          axios
            .post("/submit", this.fields)
            .then()
            .catch(error => {
              console.log(error);
            });
        }
      }
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.image_contact {
  width: 100%;
}
.contact-titre {
  font-size: 1.3em;
}
</style>