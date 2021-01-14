<template>
    <VueModal v-model="show" :enableClose="false">
      <a href="#" @click="close()" class="close-modal"><img src="/images/x.svg" alt=""></a> 
      <div class="modal-container modal-contato">
        
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(save)">
            <div class="modal-head text-center">
              <slot name="header">
                Contact
              </slot>
            </div>

            <div class="form-group">
              <label for="name">Name</label>
              <ValidationProvider rules="required|min:5|max:100" v-slot="{ errors }">
                <input type="text" class="form-control" id="name" name="name" placeholder="Fill your full name" v-model="name">
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="form-group">
              <label for="email">E-mail</label>
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <input type="email" class="form-control" id="email" name="email" placeholder="Fill a valid e-mail" v-model="email">
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="form-group">
              <label for="name">Phone</label>
              <ValidationProvider :rules="{ required:'required', regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ }" v-slot="{ errors }">
                <input type="text" class="form-control" id="phone" name="phone" placeholder="Fill your phone" v-model="phone">
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="form-group">
              <label for="post">Post</label>
              <ValidationProvider rules="required|min:10|max:255" v-slot="{ errors }">
                <textarea class="form-control" id="post" name="post" placeholder="Hello..." v-model="post">
                </textarea>
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="row justify-content-center mt-5">
              <button type="submit" class="btn btn-dark "><img src="/images/arrow.svg" alt="">Submit</button>
            </div>
          </form>
        </ValidationObserver>    

      </div>
    </VueModal>
    
</template>

<script>
import  VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css';

import { ValidationObserver, ValidationProvider } from "vee-validate";
import { BlogService } from '@/services/Blog.service'

export default {
  name: 'Contact',

  components: {
    VueModal,
    ValidationObserver,
    ValidationProvider
  },

  props: {
    show: {
      required: true
    }
  },

  data() {
    return {
      name: null,
      email: null,
      phone: null,
      post: null
    }
  },

  methods: {

    async save() {
      console.log("Form submitted yay!");
      const { name, email, phone, post } = this
      try {
        const { contact } = await BlogService.sendContact( name, email, phone, post )
        console.log(contact)

        this.$toast.open({
          message: 'Registration performed',
          type: 'success',
          position: 'top'
        });
        this.clear()
        this.$emit('close')
      } catch (e) {
        console.log(e)
        this.$toast.open({
          message: 'Registration error',
          type: 'error',
          position: 'top'
        });
      }
    },

    close () {
      this.clear()
      this.$emit('close')
    },

    clear () {
      this.name = null
      this.email = null
      this.phone = null
      this.post = null
    }

  }

}
</script>

<style>

  .vm {
    max-width: 42%;
  }

  .vm-titlebar {
    display: none;
  }

  .vm-content {
    padding: 5rem 6rem;
  }

  .modal-head {
      color: #F1A10A;
      font-size: 2rem;
      line-height: 1.9rem;;
      font-style:normal;
      font-weight: bold;
  }

  .close-modal {
      position: absolute;
      top: 2rem;
      right: 2rem;
  }

  .modal-contato .form-group {
      margin-bottom: 0;
      margin-top: 2.1rem;
  }

  .modal-contato .form-group input{
      height: 3rem;
  }

  .modal-contato .form-group textarea{
      height: 10rem;
  }

  .modal-contato label {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.5rem;
  }

  .modal-contato .form-control {
      border-color: #495057;
      font-size: 1.3rem;
  }

  .modal-contato .btn {
      width: 37%;
      padding: 0.5rem 0rem !important;
      font-size: 1.2rem;
      font-weight: 500;
  }

  .modal-contato .btn img{
      margin-right: 1.7rem;
      margin-left: 0px;
      width: 1rem;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .error {
    color: red;
  } 

</style>
