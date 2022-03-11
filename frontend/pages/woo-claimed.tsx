import { useState } from "react";
import Header from "../components/header";

export default function WooClaimed() {
  const [claimedSuccessful, setClaimedSuccessful] = useState<boolean>(true)
  return (
    <div className="h-vh-100">
      <Header />
      <div className="background-light p-h-100 row justify-content-center">
        <div className="col-7 p-t-70">
          <div className="text-center">
            <p className="f-s-32">
              Cariber X Shopee ลงทะเบียนเพื่อรับรหัสผ่านเข้าเรียน
            </p>
          </div>
          <div>
            <p className="f-s-18">
              {claimedSuccessful ?
                "ขอบพระคุณที่ท่านได้ดำเนินการลงทะเบียนแล้ว" :
                "ขออภัย ไม่พบข้อมูลการสั่งซื้อของท่าน (Error 03)"}
            </p>
            <p className="f-s-14">
              หากมีข้อสงสัยหรือพบปัญหาการใช้งาน สามารถติดต่อเราได้ที่ Facebook: Cariber อีเมล: contact@cariber.co หรือโทร 095-754-7424
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}