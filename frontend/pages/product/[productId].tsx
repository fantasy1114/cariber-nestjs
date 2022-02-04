import { useRouter } from "next/router";
import { useEffect } from "react";
import UserManager from "../../auth/userManager";
import Accordion, { Color } from "../../components/accordion";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Img from "../../components/image";
import Pagination from "../../components/pagination";
import ProductSale from "../../components/product/productSale";
import ProductBlogs from "../../components/productBlogs";
import { ProductEpisode } from "../../components/static/interface";
import * as staticData from "../../components/static/product"
import VideoPlayer from "../../components/videoPlayer";

interface ProductProp {
  productRemark: string,
  productImage: string,
  productName: string,
  fileUrl: string,
  instructorImage: string,
  instructorName: string,
  instructorRemark: string,
  episodes: ProductEpisode[]
  videoId: string,
}

export default function Product({ product }: { product: ProductProp }) {
  const router = useRouter()
  const userManager = new UserManager()
  const announcement = "ตอนนี้คุณกำลังอยู่ในโหมดทดลองเรียนฟรี เนื้อหาบางส่วนมีการถูกล็อกไว้\nคุณสามารถซื้อคอร์สนี้เพื่อดูเนื้อหาทั้งหมดในคอร์สเรียน"
  const episodeTitle = "EP01: รู้จักกับ “คุณเกียรติศักดิ์ เสนาเมือง”"

  useEffect(() => {
    !userManager.isLoggedIn() && router.replace('/login')
  })

  return (
    <div className="product">
      <Header />
      <div className="col-12 m-0">
        <div className="container sm-p-x-0">
          <div className="nev-product">
            <div className="left-nev-product">
              <h6 className="color-primary">
                คอร์สเรียน : {product.productName}
              </h6>
              <p className="f-s-14 m-b-0 color-black">
                สอนโดย {product.instructorName}
              </p>
            </div>
            <div className="right-nev-product sm-none">
              <a className="btn btn-not-focus btn-small m-t-0" href="">
                ซื้อคอร์สนี้
              </a>
              <a className="btn btn-small m-t-0" href="">
                ซื้อแพ็คเกจรายปี
              </a>
            </div>
            <div className="right-nev-product lg-none">
              <ProductSale />
            </div>
          </div>
        </div>
      </div>
      <div className="background-image">
        <div className="sizer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <button className="btn-link f-s-16 row" onClick={router.back}>
                  <i className="fal fa-chevron-left m-r-7"></i>
                  <h5 className="color-black m-b-0">
                    ย้อนกลับ
                  </h5>
                </button>
              </div>
              <div className="col-12 row lg-flex-between">
                <div className="episode-title">
                  <h5 className="color-black m-0">
                    {episodeTitle}
                  </h5>
                </div>
                <div>
                  <a className="color-primary" href="#">
                    ดูรายละเอียดคอร์สนี้เพิ่มเติม
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="product-announcement">
                  <i className="fal fa-megaphone p-t-5"></i>
                  <div className="p-l-10">
                    <span>
                      {announcement}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 p-b-20">
                <div className="player">
                  <div className="player-video">
                    <VideoPlayer videoId={product.videoId} />
                  </div>
                  <div className="player-nav">
                    <div className="media">
                      <div className="media-left-under-player">
                        <a className="btn btn-box btn-small disabled" href="#">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          บทเรียนก่อนหน้า
                        </a>
                      </div>
                      <div className="media-body media-middle">
                        <p className="m-b-0 hidden-xs-down">
                          บทเรียน 1 of 10
                        </p>
                      </div>
                      <div className="media-right">
                        <a className="btn btn-box btn-small" href="#">
                          บทเรียนถัดไป
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="player-playlist">
                    <div className="playlist">
                      <div className="playlist-title">
                        <div className="media">
                          <div className="media-body media-middle">
                            <h2>{product.productName}</h2>
                          </div>
                          <div className="media-right">
                            <h3>{product.episodes.length} บทเรียน</h3>
                          </div>
                        </div>
                      </div>
                      <div className="playlist-body">
                        <a className="media track" href="#">
                          <div className="media-left media-middle">
                            <p className="track-count active">
                              <i className="fa fa-play color-primary"></i>
                            </p>
                          </div>
                          <div className="media-left media-middle">
                            <Img className="track-thumb"
                              src={"/product/product-2.jpg"}
                              width={70}
                              height={39.3833}
                              alt={"EP02: ศาสตร์ของการเป็นโค้ช"}
                            />
                          </div>
                          <div className="media-body media-middle">
                            <div className="track-title">
                              {"EP02: ศาสตร์ของการเป็นโค้ช"}
                            </div>
                          </div>
                        </a>
                        <div className="playlist-button">
                          <button>
                            บทเรียนถัดไป
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 link-file">
                  <i className="fal fa-file-download color-primary"></i>
                  &nbsp;&nbsp;
                  <a href="">
                    ดาวน์โหลดเอกสารประกอบการเรียน
                  </a>
                </div>
              </div>
              <div className="col-8">
                {product.episodes.map((value, index) => {
                  return (<Accordion key={index}
                    title={value.title}
                    description={value.description + "\n *หากผู้ใดละเมิดนำงานไปเผยแพร่ คัดลอก หรือดัดแปลงไม่ว่าบางส่วนหรือทั้งหมดจะถูกดำเนินคดีตามกฎหมาย"}
                    col={12}
                    icon={value.icon}
                    color={Color.light}
                    link={{ linkUrl: "#", linkText: `${value.progress ? (`${value.progress < 100 ? ("ดูต่อ") : ("ดูอีกครั้ง")}`) : ("รับชมเนื้อหา")}` }}
                    progress={value.progress}
                  />)
                })
                }
                <Pagination page={Number(router.query.page)} pageCount={2} />
              </div>
              <ProductBlogs progressBlog={true}
                productImage={product.productImage}
                productName={product.productName}
                instructorImage={product.instructorImage}
                instructorName={product.instructorName}
                instructorRemark={product.instructorRemark} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "the-art-of-football-tactics" } }
    ],
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {
      product: {
        productRemark: "เกียรติศักดิ์ เสนาเมือง หรือ ‘ซิโก้’ อดีตนักฟุตบอลและหัวหน้าผู้ฝึกสอนทีมชาติไทย ศูนย์หน้าระดับตำนานผู้ทำประตูสูงสุดในนามทีมชาติอันดับ 16 ของโลก ด้วยจำนวน 71 ประตูใน 134 แมตช์ และโค้ชผู้นำพาทีมชาติไทยกู้ศรัทธาจากแฟนบอลจนสร้างประวัติศาสตร์คว้าแชมป์อาเซียนคัพ หรือ AFF ซูซูกิคัพ ได้ถึง 2 สมัย",
        productImage: "/library/my-course-3.jpg",
        productName: "The Art of Football Tactics",
        videoId: "ba36e29c18b8c21b53589a403cd5b09b",
        fileUrl: "https://www.cariber.co/resource_redirect/downloads/sites/163642/themes/2149288781/downloads/5kt5U0rKQeqyuJRSPSkL_Summary_Ep14.pdf",
        instructorImage: "/product/instructor-image.jpg",
        instructorName: "เกียรติศักดิ์ เสนาเมือง",
        instructorRemark: "เพราะความสำเร็จของฟุตบอลเกิดจากทีมเวิร์ค และกว่าที่จะมาเป็นทีมได้ต้องมีกระบวนการสร้าง",
        episodes: staticData.episodes,
      }
    }
  };
}