import { useFormik } from "formik";
import { signInValidation } from "../../utils/yupValidation";


const SignIn= () => {
    // const data = {email:"him@gmail.com",password:"12345"};
    const data = {};


    const initialValues={
        email: data? data?.email:"",
        password:data?data?.password:"",
    }

    const {values,handleBlur,handleChange,handleSubmit,errors,touched} = useFormik({
        initialValues,
        validationSchema:signInValidation,
        onSubmit:(value)=>{
            console.log("this console from onsubmit  fo useFormik",values);
            data.email = value.email
        }
    })
  return (
    <div className="grid place-content-center w-full h-screen bg-slate-50">
         <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
        <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email Address" 
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                autoComplete="NA" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              <label 
                htmlFor="email" 
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
              {touched.email&& errors?.email && <p className="text-red-500">{errors?.email}</p>}
            </div>
             <div className="relative mt-6">
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password" 
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}

               
              />
              <label 
                htmlFor="password" 
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
             {touched.password &&errors?.password && <p className="text-red-500">{errors?.password}</p>}
            </div>
           
            <div className="my-6">
              <button 
                type="submit" 
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don&apos;t have an account yet?
              <a 
                href="#!"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                {" Sign up"}
              </a>.
            </p>
          </form>
        </div>
      </div>
    </div>

    </div>
   
  );
};

export default SignIn;



