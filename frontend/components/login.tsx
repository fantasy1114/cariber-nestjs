import { FormEvent, MouseEventHandler, useState } from "react";
import { NextAuthResponse } from "../apiNest/authApi";
import FormInput from "./formInput";
import ShowError from "./showError";
import Link from "next/link";
import Img from "./image";
import { signIn } from 'next-auth/react';

interface LoginProps {
  callbackButton: MouseEventHandler<HTMLButtonElement>
}

export default function Login({ callbackButton }: LoginProps) {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })
  const [errorLogin, setErrorLogin] = useState({
    isError: false,
    message: "",
  })

  async function loginRequest(event?: FormEvent) {
    event && event.preventDefault();
    setErrorLogin({
      isError: false,
      message: ""
    })
    const data = await signIn("credentials", {
      redirect: false,
      email: formLogin.email,
      password: formLogin.password,
    }) as unknown as NextAuthResponse;
    if (data.error) {
      setErrorLogin({
        isError: true,
        message: data.error,
      })
    }
  }

  return (
    <div>
      <h2 className="color-white text-center">
        เข้าสู่ระบบ
      </h2>
      <div className="column-center">
        <button
          className="btn btn-icon btn-full m-b-5 m-x-0 background-color-facebook"
          onClick={() => signIn('facebook')}>
          <div className="icon-frame p-0">
            <Img src="/login/facebook-icon.png"
              width={25}
              height={25}
              alt="Facebook"
            />
          </div>
          เข้าสู่ระบบด้วย Facebook
        </button>
        <button
          className="btn btn-icon btn-full m-b-10 m-x-0 background-color-google"
          onClick={() => signIn('google')}>
          <div className="icon-frame">
            <Img src="/login/google-icon.svg"
              width={25}
              height={25}
              alt="Google"
            />
          </div>
          เข้าสู่ระบบด้วย Google
        </button>
      </div>
      <hr />
      <div className="p-20">
        <div className="block-type-form text-center">
          <div className="block box-shadow-none">
            <div className="form">
              <form onSubmit={loginRequest}>
                {errorLogin.isError && (<ShowError message={errorLogin.message} />)}
                <div className="form-group">
                  <label className="label" form="member-email">
                    อีเมล
                  </label>
                  <FormInput id={"email"}
                    type={"email"}
                    required={true}
                    placeholder={""}
                    onChange={(e) => { formLogin.email = e.currentTarget.value; }}
                    minLength={0} />
                </div>
                <div className="form-group">
                  <label className="label" form="member-email">
                    รหัสผ่าน
                  </label>
                  <FormInput id={"password"}
                    type={"password"}
                    required={true}
                    placeholder={""}
                    onChange={(e) => { formLogin.password = e.currentTarget.value; }}
                    minLength={8} />
                </div>
                <button id="form-button" className="btn btn-solid btn-full btn-small" type="submit">
                  เข้าสู่ระบบ
                </button>
              </form>
            </div>
            <div className="login-bottom">
              <div className="color-white row justify-content-center">
                ไม่ได้เป็นสมาชิก?
                &nbsp;
                <button onClick={callbackButton} className="btn btn-small m-0 p-0 link-colorless color-white">
                  คลิกเพื่อสร้างบัญชีผู้ใช้งานใหม่
                </button>
              </div>
              <Link href={"/forgot-password"} passHref={true}>
                <a className="btn btn-small m-t-20 m-0 p-0 link-colorless color-white">
                  ลืมรหัสผ่าน?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
