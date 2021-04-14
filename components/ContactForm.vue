<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      novalidate
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <div>
        <label for="first_name" class="block text-sm font-medium text-white"
          >First name *</label
        >
        <div class="mt-1">
          <ValidationProvider
            :name="$t('contactForm.firstName')"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              type="text"
              name="first_name"
              id="first_name"
              autocomplete="given-name"
              class="block w-full base-input"
            />
            <span class="text-white">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div>
        <label for="last_name" class="block text-sm font-medium text-white"
          >Last name *</label
        >
        <div class="mt-1">
          <ValidationProvider
            :name="$t('contactForm.lastName')"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              type="text"
              name="last_name"
              id="last_name"
              autocomplete="family-name"
              class="block w-full base-input"
            />
            <span class="text-white">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="company" class="block text-sm font-medium text-white">{{
          $t('contactForm.company')
        }}</label>
        <div class="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            autocomplete="organization"
            class="block w-full base-input"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-medium text-white"
          >Email *</label
        >
        <div class="mt-1">
          <ValidationProvider
            :name="$t('contactForm.email')"
            rules="required|email"
            v-slot="{ errors }"
          >
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full base-input"
            />
            <span class="text-white">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone_number" class="block text-sm font-medium text-white"
          >Phone Number</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <ValidationProvider
            :name="$t('contactForm.phoneNumber')"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              autocomplete="tel"
              class="block w-full base-input"
              placeholder="+32 000 00 00 00"
            />
            <span class="text-white">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-medium text-white"
          >Message *</label
        >
        <div class="mt-1">
          <ValidationProvider
            :name="$t('contactForm.message')"
            rules="required"
            v-slot="{ errors }"
          >
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block w-full base-input"
            ></textarea>
            <span class="text-white">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="sm:col-span-2">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <button
              type="button"
              class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-pressed="false"
            >
              <span class="sr-only">Agree to policies</span>
              <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
              <span
                aria-hidden="true"
                class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              ></span>
            </button>
          </div>
          <div class="ml-3">
            <p class="text-base text-gray-300" v-html="$t('contactForm.privacyAndPolicyConsentHtml')">
            
            </p>
          </div>
        </div>
      </div>
      <div class="sm:col-span-2">
        <button type="submit" class="block w-full base-btn">Let's talk</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        submitted: false,
        data: {
          firstName: null,
          email: null,
        },
      },
    }
  },
  methods: {
    onSubmit() {
      this.form.submitted = true
      console.log('Submit')
    },
  },
}
</script>

<style></style>
