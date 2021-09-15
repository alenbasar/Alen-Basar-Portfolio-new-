import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type BannerContent = {
  heading: string;
  subheading: string[];
  cta: string;
  ctaLink: string;
};
type Props = {
  pageTitle?: boolean;
  content: BannerContent;
} & HTMLAttributes<HTMLDivElement>;

const Home = (props: Props) => {
  const { content } = props;
  const { heading, subheading, cta, ctaLink } = content;
  const s1 = subheading[0].split("");
  const s2 = subheading[1].split("");
  const h = heading.split("");
  return (
    <section className="c-home">
      <div className="c-home__banner">
        <h1 className="c-home__banner-hero">
          {h.map((item, index) => (
            <span className="blast" key={index}>
              {item === " " ? "\u00A0" : item}
              {/* {item} */}
            </span>
          ))}
          <br />
          {s1.map((item, index) => (
            <span key={index} className="blast">
              {item === " " ? "\u00A0" : item}
              {/* {item} */}
            </span>
          ))}

          <br />
          {s2.map((item, index) => (
            <span key={index}>
              {item === " " ? "\u00A0" : item}
              {/* {item} */}
            </span>
          ))}
        </h1>

        <Link to={ctaLink} className="c-home__banner-contact-btn">
          {cta}
        </Link>
      </div>
      <div></div>
    </section>
  );
};
export default Home;
