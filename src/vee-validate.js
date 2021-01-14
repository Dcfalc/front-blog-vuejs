import { required, email, min, max, regex } from "vee-validate/dist/rules";
import { extend } from "vee-validate";
import { setInteractionMode } from 'vee-validate';

setInteractionMode('lazy');

extend("regex", {
    ...regex,
    message: 'Inform a valid phone number'
  });

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "Inform a valid email"
});

extend("min", {
  ...min,
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ['length'],
  message: 'This field must have at least {length} characters'
});
  
extend("max", {
  ...max,
  validate(value, { length }) {
    return value.length <= length;
  },
  params: ['length'],
  message: 'This field must have {length} at most'
});
