import * as yup from 'yup'

const userSchema = yup.object().shape({
  document: yup.string().required(),
  password: yup.string().min(3).required(),
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().positive(),
  residency: yup.string(),
  phone: yup.string().max(8)
})

export default userSchema
