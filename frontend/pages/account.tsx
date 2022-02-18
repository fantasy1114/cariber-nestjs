import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import getUserProfileApi from "../apiStrapi/getUserProfileApi";
import updateUserProfileApi from "../apiStrapi/updateUserProfileApi";
import PurchasedCard from "../components/account/purchasedCard";
import Img from "../components/image";
import ShowError from "../components/showError";
import * as staticData from "../components/static/account"
import encodeBase64 from "../functions/encodeBase64";

export default function Account() {
  const timeZone = staticData.timeZone
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    timeZone: "",
    notifyUpdatesProducts: false,
    notifyReplyMyPosts: false,
    emailPromotions: false,
    avatarUserBase64: "/default_avatar.webp",
    bio: "",
    location: ""
  })
  const [errorPassword, setErrorPassword] = useState({
    isError: false,
    message: "",
  })

  useEffect(() => {
    fetchData();
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({ ...values, [name]: value }))
  }

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.checked;
    setFormData(values => ({ ...values, [name]: value }))
  }

  async function fetchData() {
    const data = await getUserProfileApi()
    if (data.data) {
      data.data.currentPassword = ""
      data.data.newPassword = ""
      data.data.confirmPassword = ""
      setFormData(data.data)
    }
  }

  async function saveAccount(event: FormEvent) {
    event.preventDefault();
    setErrorPassword({
      isError: false,
      message: ""
    })
    if (formData.newPassword !== formData.confirmPassword) {
      setErrorPassword({
        isError: true,
        message: "New passwords do not match"
      })
      return
    }
    const data = await updateUserProfileApi(formData)
    if (!data.error) {
      alert("แก้ไขสำเร็จ")
    }else{
      alert(data.error.message)
    }
  }

  function handleClick() {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  async function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget!.files![0]) {
      await encodeBase64(event.currentTarget!.files![0]).then((result) => {
        setFormData({
          avatarUserBase64: String(result),
          email: formData.email,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
          bio: formData.bio,
          emailPromotions: formData.emailPromotions,
          fullName: formData.fullName,
          location: formData.location,
          notifyReplyMyPosts: formData.notifyReplyMyPosts,
          notifyUpdatesProducts: formData.notifyUpdatesProducts,
          timeZone: formData.timeZone
        })
      })
    }
  }

  return (
    <div className="account">
      <form onSubmit={saveAccount}>
        <div className="site-action-bar site-action-bar-members">
          <div className="header-account container">
            <div className="header-left">
              <Link href="/">
                <a className="back-link" href="#">
                  <span className="text-light">
                    <i className="fas fa-chevron-left"></i>
                    &nbsp;&nbsp;Back to Cariber
                  </span>
                </a>
              </Link>
            </div>
            <div className="action-buttons pull-right">
              <Link href="/account">
                <a className="btn-setting">
                  Settings
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container account-content">
          <div className="row side-by-side">
            <div className="col-4">
              <h2 className="title">Profile Settings</h2>
              <p className="subtitle text-light">Change your basic profile information.</p>
            </div>
            <div className="col-8 card-form">
              <div className="panel panel-default panel-form">
                <div className="panel-body">
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_name">
                      Full Name
                    </label>
                    <input id="member_name"
                      name="fullName"
                      className="form-control string"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_email">
                      E-mail
                    </label>
                    <input id="member_email"
                      name="email"
                      className="form-control string"
                      type="email"
                      value={formData.email}
                      required
                      onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_time_zone">
                      Time Zone
                    </label>
                    <select className="form-control time_zone optional"
                      id="member_time_zone"
                      name="timeZone"
                      value={formData.timeZone}
                      onChange={handleChange}>
                      <option value=""></option>
                      {timeZone.map((value, index) => {
                        return (
                          <option key={index} value={value.value}>{value.text}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="form-group boolean optional">
                    <div className="checkbox">
                      <label>
                        <input className="boolean optional"
                          type="checkbox"
                          name="notifyUpdatesProducts"
                          id="product_update_notification"
                          checked={formData.notifyUpdatesProducts}
                          onChange={handleChangeCheckbox} />
                        Please notify me about updates to my products.
                      </label>
                    </div>
                  </div>
                  <div className="form-group boolean optional">
                    <div className="checkbox">
                      <label>
                        <input className="boolean optional"
                          type="checkbox"
                          checked={formData.notifyReplyMyPosts}
                          name="notifyReplyMyPosts"
                          id="reply_comment_notification"
                          onChange={handleChangeCheckbox} />
                        Please notify me when a reply to one of my posts or comments is created.
                      </label>
                    </div>
                  </div>
                  <div className="form-group boolean optional">
                    <div className="checkbox">
                      <label>
                        <input className="boolean optional"
                          type="checkbox"
                          checked={formData.emailPromotions}
                          name="emailPromotions"
                          id="new_products_and_promotions"
                          onChange={handleChangeCheckbox} />
                        Please email me about new products and promotions.
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="member_avatar">
                      Avatar
                    </label>
                    <div className="media">
                      <div className="media-left">
                        <Img id="member-avatar-preview"
                          className="avatar img-circle media-object"
                          alt="Avatar"
                          src={formData.avatarUserBase64}
                          width={64}
                          height={64} />
                      </div>
                      <div className="media-body media-middle">
                        <p className="t-sage-body t-sage--color-grey sage-spacer-bottom-xs">
                          Recommended dimensions of
                          <strong>
                            &nbsp;100x100
                          </strong>
                        </p>
                        <input className="d-none"
                          type="file"
                          accept="image/*"
                          ref={hiddenFileInput}
                          onChange={handleChangeAvatar}
                        />
                        <button type="button" onClick={handleClick} className="btn btn-primary btn-outline filepicker-btn fp-input">
                          Change Avatar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row side-by-side">
            <div className="col-4">
              <h2 className="title">Social Profile</h2>
              <p className="subtitle text-light">Edit information displayed publicly in communities.</p>
            </div>
            <div className="col-8 card-form">
              <div className="panel panel-default panel-form">
                <div className="panel-body">
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_bio">
                      Bio
                    </label>
                    <textarea id="member_bio"
                      className="form-control string"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_location">
                      Location
                    </label>
                    <input id="member_location"
                      className="form-control string"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row side-by-side">
            <div className="col-4">
              <h2 className="title">Password</h2>
              <p className="subtitle text-light">Change your password.</p>
              <p className="subtitle text-light">Leave this blank to keep your current password.</p>
            </div>
            <div className="col-8 card-form">
              <div className="panel panel-default panel-form">
                <div className="panel-body">
                  {errorPassword.isError && (<ShowError message={errorPassword.message} />)}
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_current_password">
                      Current Password
                    </label>
                    <input id="member_current_password"
                      className="form-control string"
                      name="currentPassword"
                      type="password"
                      onChange={handleChange} />
                    <p className="help-block">
                      <Link href="/forgot-password" passHref={true}>
                        <a>
                          Forgot?
                        </a>
                      </Link>
                    </p>
                  </div>
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_new_password">
                      New Password
                    </label>
                    <input id="member_new_password"
                      className="form-control string"
                      name="newPassword"
                      type="password"
                      onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="control-label string" htmlFor="member_verify_password">
                      Verify Password
                    </label>
                    <input id="member_verify_password"
                      className="form-control string"
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row side-by-side">
            <div className="col-4">
              <h2 className="title">Purchase History</h2>
              <p className="subtitle text-light">The Offers you have purchased and the Products you have been granted access to.</p>
            </div>
            <div className="col-8 card-form">
              <div className="panel panel-default panel-form">
                <div className="panel-body">
                  <PurchasedCard />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="justify-content-right d-flex">
            <button type="submit" className="btn btn-primary btn-footer sm-full">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}