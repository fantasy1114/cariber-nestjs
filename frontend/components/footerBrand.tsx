import Img from "./image"

export default function FooterBrand() {
  return (
    <div className="footer-brand">
      <div className="section background-dark">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-image text-col-5">
                <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                  <div className="image">
                    <Img className="image-image"
                      src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/gVlhJnIUTLejFrFp11ai_Logo-01-05.png"
                      alt="Brand Logo"
                      width={450}
                      height={156.967} />
                  </div>
                </div>
              </div>
              <div className="block-type-text text-left col-6">
                <p style={{ fontSize: "18px" }}>
                  <strong>
                    <span style={{ color: "#fbf5e3" }}>
                      Cariber&nbsp;แพลตฟอร์มการเรียนรู้บนแนวคิด &quot;ความสำเร็จที่เรียนรู้ได้&quot; &nbsp;&nbsp;
                    </span>
                  </strong>
                </p>
                <p style={{ fontSize: "14px" }}>
                  <span style={{ fontWeight: "300", color: "#fbf5e3" }}>
                    ใครว่าประสบการณ์เป็นสิ่งที่สอนกันไม่ได้? ที่ Cariber ผู้เชี่ยวชาญจากหลายแวดวงจะมาถ่ายทอดค
                  </span>
                  <span style={{ fontWeight: "300", color: "#fbf5e3" }}>
                    วามรู้พร้อมถอดบทเรียนจากประสบการณ์ตรงให้ทุกคนฟัง ว่ากว่าจะมายืนบนจุดที่เรียกว่าควา
                  </span>
                  <span style={{ fontWeight: "300", color: "#fbf5e3" }}>
                    มสำเร็จ พวกเขาต้องผ่านบททดสอบอะไรมาบ้าง แล้วประสบการณ์ที่ผ่านมา สอนอะไรให้กับพวกเขา&nbsp;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}