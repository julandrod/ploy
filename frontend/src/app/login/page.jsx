"use client";

import Image from "next/image";
import logoWhite from "../../../public/logo-white.png";
import googleIcon from "../../../public/google-icon.png";
import appleIcon from "../../../public/apple-icon.png";
import { signIn, useSession } from "next-auth/react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Form, Formik } from "formik";
import { loginSchema } from "@/libs/validateSchemas";
import { useRouter } from "next/navigation";
import InputForm from "@/components/InputForm";

const SocialSignButton = ({ icon, title }) => {
  return (
    <button className="flex w-96 h-12 border border-light-border rounded-lg items-center justify-center mb-4">
      <Image src={icon} alt="google icon" className="w-5 h-5 mr-10"></Image>{" "}
      <span className="text-social-sign text-base font-normal">{title}</span>
    </button>
  );
};

// const SignInput = ({ title, placeholder, type, name, handleChange }) => {
//   return (
//     <div className="flex flex-col my-2">
//       <label className="text-base font-normal text-social-sign">{title}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         onChange={handleChange}
//         className="w-96 h-12 p-4 rounded-lg"
//       />
//     </div>
//   );
// };

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  const handleSubmit = async (values, actions) => {
    console.log("values");
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    actions.resetForm();
  };

  if (data?.user) {
    return router.replace("/profile");
  }

  return (
    <Layout>
      <section className="flex bg-login-pattern bg-cover opacity-90 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-90 z-0"></div>
        <div className="z-10 flex flex-col w-8/12 p-12">
          <div className="h-1/6 px-10 pt-4">
            <Link href="/">
              <Image src={logoWhite} alt="logo" className="w-56 h-14" />
            </Link>
          </div>
          <div className="flex flex-col h-5/6 max-w-96 m-auto items-start justify-center text-white">
            <h2 className="text-4xl font-bold pb-6">Descubre...</h2>
            <p className="pb-8">
              Como tu trayectoria profesional es potenciada en un entorno
              laboral donde tienes oportunidades de crecimiento.
            </p>
            <div></div>
          </div>
        </div>
        <div className="z-10 flex min-w-[500px] items-end">
          <div className="w-[460px] h-[95%] bg-light-white rounded-t-3xl p-8">
            <div className="mb-8">
              <span className="text-base font-medium">
                Bienvenido a <span className="text-main-purple">Ploy</span>
              </span>
              <h3 className="text-3xl font-medium">Ingresa a tu cuenta</h3>
            </div>
            <div className="flex flex-col justify-center items-center my-6">
              <SocialSignButton icon={googleIcon} title="Log In con Google" />
              <SocialSignButton icon={appleIcon} title="Log In con Apple" />
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-2/5" />
              <span className="mx-8">Or</span>
              <hr className="w-2/5" />
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <div className="flex flex-col my-6">
                    <InputForm
                      labelText="Correo Electronico:"
                      type="email"
                      placeholder="usuario@mail.com"
                      name="email"
                    />
                    <InputForm
                      labelText="Contraseña"
                      type="password"
                      placeholder="contraseña"
                      name="password"
                    />
                  </div>
                  <div className="flex justify-between items-start my-6">
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-normal">Recuerdame</span>
                    </div>
                    <span className="text-sm font-medium">
                      ¿Olvidaste tu contraseña?
                    </span>
                  </div>
                  <div className="flex items-center justify-center my-12">
                    <button
                      className="w-96 h-14 bg-main-purple text-white text-xl font-bold rounded-lg"
                      type="submit"
                    >
                      Continuar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex items-center justify-around my-12">
              <span className="text-base font-normal">
                ¿Nuevo Usuario?{" "}
                <Link href="/register"><span className="font-bold text-main-purple">Ingresa Aqui</span></Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
