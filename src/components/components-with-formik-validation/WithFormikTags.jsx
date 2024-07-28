import { Formik,Form,Field} from "formik";
import { signInValidation } from "../../utils/yupValidation";



 const WithFormikTags = () => {
    return(
    //     <div className="h-screen w-full grid place-content-center bg-yellow-100">
    //     <div className="max-w-screen-md bg-cyan-400 rounded">
    //         <span>hello</span>
    //         <h2>hello</h2>
    //     </div>
    // </div>
    // <div className="h-screen w-full grid place-content-center bg-yellow-100">

    <div className="flex items-center justify-center max-w-full w-full h-screen bg-slate-400">
      <div className="  max-w-[1000px] w-full  bg-cyan-400 rounded p-4">
       <h2>Form Valdation with Formik Tags</h2>
       <Formik
       initialValues={{email:"",password:""}}
       onSubmit={(values)=>console.log( "this is from form tag",values)
      
      }
       validationSchema={signInValidation}
       >
        {({errors,touched})=>(
        <Form>
            <span>Your email:</span>
            <Field type="email" name="email" placeholder="Email" className="py-2 rounded bg-transparent focus:outline-none  border-[1px]"/>
            {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
          <br/>
          <span>Your Password:</span>
          <Field type="password" name="password" placeholder="Password" className="py-2 rounded bg-transparent focus:outline-none  border-[1px]"/>
            {touched?.password && errors?.password && <p className="text-red-500">{errors?.password}</p>}
            <br />
             <button type="submit">submit</button>
        </Form>

        )}

       </Formik>
      </div>
    </div>
    )
 }

 export default WithFormikTags;

 