import { extend, setInteractionMode } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

// Triggered when the form is submitted.
setInteractionMode('eager')

extend('required', required)
extend('email', email)


