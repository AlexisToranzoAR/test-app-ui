import * as Yup from "yup";

export const contactSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.number().required(),
  message: Yup.string().required(),
});
