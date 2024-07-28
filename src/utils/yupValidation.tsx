import * as Yup from "yup"

//--------------------------------------SIGIN VALIDATION------------------------------------------

export const signInValidation = Yup.object().shape({
    email:Yup.string().email("Invalid email").required("email is Required"),
    password:Yup.string()
    .min(6,"Password must be at least 6 characters")
    .max(12,"Password must not exceed 12 characters")
        // .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')  // Lowercase letter
        // .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')  // Uppercase letter
        // .matches(/(?=.*\d)/, 'Password must contain at least one number')  // Number
        // .matches(/(?=.*[!@#$%^&*])/,'Password must contain at least one special character') 
    .required("password is Required")
})

//-----------------------------APPOINMENT BOOK VALIDATION-------------------------------------------------


export const appointmentValidation = Yup.object().shape({
    name:Yup.string().required("name is Required"),
    phoneNumber:Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("phone number is Required"),
    email:Yup.string().email("Invalid email").required("email is Required"),
    date:Yup.string().required("date is Required"),
    time:Yup.string().required("time is Required"),
    area:Yup.string().required("area is Required"),
    city:Yup.string().required("city is Required"),
    state:Yup.string().required("state is required"),
    postCode:Yup.string().matches(/^\d{6}$/, "Post code must be a 6-digit number").required("post code is Required")
    
})


// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     lastName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//   });




//---------------------------APPOINMENT FORM VALIDATION START HERE------------------------------------------

