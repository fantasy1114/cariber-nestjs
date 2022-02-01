import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import passwordApi from "../functions/api/passwordApi";
import UserManager from "../auth/userManager";
import Footer from "../components/footer";
import FormInput from "../components/formInput";
import Header from "../components/header";
import ShowError from "../components/showError";
import FlashMessages, { FlashMessagesType } from "../functions/flashMessages";

export default function Password() {
  const router = useRouter()
  const userManager = new UserManager()
  const flashMessages = new FlashMessages()
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [formPassword, setFormPassword] = useState({
    password: "",
    confirmPassword: ""
  });

  async function passwordRequest(event: FormEvent) {
    event.preventDefault();
    if (formPassword.password !== formPassword.confirmPassword) {
      setError({
        isError: true,
        message: "Passwords do not match"
      })
      return
    }
    const formData = new FormData();
    typeof router.query.code === "string" && formData.append("code", router.query.code);
    formData.append("password", formPassword.password);
    formData.append("passwordConfirmation", formPassword.password);
    const data = await passwordApi(formData)
    if (!data.error) {
      userManager.saveToken(data.jwt)
      flashMessages.setMessages(FlashMessagesType.forgotPasswordMessages,
        "Your password has been changed successfully. You are now signed in.")
      router.replace("/library")
    } else {
      setError({
        isError: true,
        message: data.error.message
      })
    }
  }

  return (
    <div className="background-image forgot-password">
      <Header />
      <div className="sizer sizer-full">
        <div className="container">
          <div className="row align-items-center justify-content-center h-670">
            <div className="col-6 text-center">
              <div className="auth-content">
                <h1 className="auth-title">
                  สร้างรหัสผ่านใหม่
                </h1>
                <form onSubmit={passwordRequest}>
                  {error.isError && (<ShowError message={error.message} />)}
                  <div className="form-group">
                    <label className="auth-label" form="password">
                      รหัสผ่าน
                    </label>
                    <FormInput id={"password"}
                      type={"password"}
                      required={true}
                      placeholder={""}
                      onChange={(e) => { formPassword.password = e.currentTarget.value }} />
                  </div>
                  <div className="form-group">
                    <label className="auth-label" form="confirm-password">
                      รหัสผ่าน
                    </label>
                    <FormInput id={"confirm-password"}
                      type={"password"}
                      required={true}
                      placeholder={""}
                      onChange={(e) => { formPassword.confirmPassword = e.currentTarget.value }} />
                  </div>
                  <button id="form-button" className="form-btn btn-solid btn-full btn-small" type="submit">
                    ส่ง
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}