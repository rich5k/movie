import React from 'react';
import './tailwindcss/styles.css';
const SignUp = () => {
    return ( 
        <div className="SignUp">
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up your account
                    </h2>
                    
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                    {/* <input type="hidden" name="remember" value="true"/> */}
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-700 mt-4">
                        By signing up, you agree to the  
                        <a class="no-underline border-b border-grey-700 text-grey-700" href="#">
                             Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-700 text-grey-700" href="#">
                            Privacy Policy
                        </a>
                    </div>

                    </form>
                    <div class="text-grey-700 mt-6">
                        Already have an account? 
                        <a class="no-underline border-b border-blue-500 text-blue-500" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
                </div>
        </div>
     );
}
 
export default SignUp;