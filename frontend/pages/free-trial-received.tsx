import Link from "next/link";

export default function FreeTrialReceived() {
  return (
    <div className="background-image h-full-center">
      <div className="block-type-text text-center col-6">
        <div className="block box-shadow-large background-light p-50">
          <h1>
            🎉
          </h1>
          <h3>
            ส่งข้อมูลสำเร็จ!
          </h3>
          <h6>
            ขอบคุณที่สนใจทดลองเรียนคอร์สของเรา หวังว่าบทเรียนของ Cariber จะทำให้คุณไปได้ไกลกว่า
          </h6>
          <p>
            ระบบจะทำการยืนยันบัญชีผู้ใช้งานและส่งรหัสผ่านไปที่อีเมลของคุณภายใน 15 นาที หากได้รับชื่อผู้ใช้งานและรหัสผ่านแล้วสามารถ เข้าสู่ระบบเพื่อทดลองเรียนได้ทันที สำหรับผู้ใช้งานที่เคยได้รับรหัสผ่านแล้วแล้ว สามารถเข้าสู่ระบบด้วยชื่อผู้ใช้งานและรหัสผ่านเดิมเพื่อทดลองเรียนคอร์สนี้ได้ทันที
          </p>
          <p>
            หากพบปัญหาระหว่างการใช้งานหรือไม่สามารถเข้าสู่ระบบได้ โปรดแจ้งปัญหามาทาง Inbox Facebook
            <a className="linkified" href="https://www.facebook.com/cariberofficial" >https://www.facebook.com/cariberofficial</a>&nbsp;
            หรือ email : contact@cariber.co
          </p>
          <Link href="/login" passHref={true}>
            <a className="btn btn-box btn-solid btn-medium color-smooth">
              เข้าสู่ระบบ
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}