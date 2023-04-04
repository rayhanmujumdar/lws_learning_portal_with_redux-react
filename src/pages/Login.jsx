import React from 'react'
import LoginForm from '../components/form/LoginForm'
import loginPortalImage from "../assets/image/learningportal.svg"

export default function Login({children}) {
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
        <div className="mx-auto max-w-md px-5 lg:px-0">
            <div>
                <img className="h-12 mx-auto" src={loginPortalImage} />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Sign in to {children} Account
                </h2>
            </div>
            <LoginForm roleName={children}></LoginForm>
        </div>
    </section>
  )
}
