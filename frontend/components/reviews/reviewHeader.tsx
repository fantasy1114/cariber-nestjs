import { strapiImage } from "../../apiStrapi/models/content";
import { ReviewHeaderContent } from "../../apiStrapi/models/contentType/reviewHeader";
import Img from "../image";

export default function ReviewHeader({ reviewHeader }: { reviewHeader: ReviewHeaderContent }) {
  return (
    <div className="section-person-1">
      <div id="block-person-1">
        <div className="container">
          <div className="frame align-items-center justify-content-center">
            <div className="block-type-image text-col-11">
              <div className="row block box-shadow-large background-light">
                <Img className="image-image"
                  src={strapiImage(reviewHeader?.attributes.image.data.attributes.url)}
                  alt={reviewHeader?.attributes.facebook_name}
                  width={200}
                  height={200} />
                <div className="block-text">
                  <p className="m-b-14">
                    <strong>
                      <span className="color-grey white-space-pre">
                        {reviewHeader?.attributes.description}
                      </span>
                    </strong>
                  </p>
                  <h5 className="m-b-0">
                    <strong className="mt-auto">
                      <span className="color-darkblue f-s-16">
                        <a
                          href={reviewHeader?.attributes.facebook_url}>
                          Facebook page : {reviewHeader?.attributes.facebook_name}
                        </a>
                      </span>
                    </strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}