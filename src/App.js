import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

function App() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .typeError(`Быть строкой`)
      .required(`обязательно name`),
    secondName: Yup.string()
      .typeError(`Быть строкой`)
      .required(`обязательное поле secondName`),
    email: Yup.string()
      .email('Введите верный емайл')
      .typeError(`Быть строкой`)
      .required(`обязательное поле email`),
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      // )
    password: Yup.string()
      .typeError(`Быть строкой`)
      .required(`обязательное поле password`),
    passwordConfirm: Yup.string()
      .typeError(`Быть строкой`)
      .oneOf([Yup.ref('password')], `Пароли не совпадают`)
      .required(`обязательное поле passwordConfirm`)
  })

  return (
    <>
      <Formik
        initialValues={{
          name:'',
          secondName:'',
          password:'',
          passwordConfirm:'',
          email:'',
          confirmEmail:''
        }}

        validateOnBlur
        onSubmit={(value)=>{console.log('Форма отправлена:' + value)}}
        validationSchema={validationSchema}
      >
      {({
          values, 
          errors, 
          touched, 
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty
        })=>(
          <>
            {/* name */}
            <p>
              <label htmlFor={`name`}>Имя:</label>
              {touched.name && errors.name && <p>{errors.name}</p> }
              <input 
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {/* secondName */}
            <p>
              <label htmlFor={`secondName`}>Фамилия:</label>
              {touched.secondName && errors.secondName && <p>{errors.secondName}</p>}
              <input 
                name={`secondName`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
            </p>
            {/* email */}
            <p>
              <label htmlFor={`email`}>Email:</label>
              {touched.email && errors.email && <p>{errors.email}</p>}
              <input
                type={`text`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {/* password */}
            <p>
              <label htmlFor={`password`}>Пароль:</label>
              {touched.password && errors.password && <p>{errors.password}</p>}
              <input
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {/* passwordConfirm */}
            <p>
              <label htmlFor={`passwordConfirm`}>Повторить Пароль:</label>
              {touched.passwordConfirm && errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
              <input
                type={`password`}
                name={`passwordConfirm`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
              />
            </p>
            <button 
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >отправить
            </button>
          </>
        )}
      </Formik>
    </>
  )
}

export default App
