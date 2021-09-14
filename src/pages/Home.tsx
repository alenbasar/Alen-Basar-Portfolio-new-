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
  return (
    <section className="c-home">
      <div className="c-home__banner">
        <h1 className="c-home__banner-heading">{heading}</h1>
        <div className="c-home__banner-subheading1">
          {s1.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="c-home__banner-subheading2">
          {s2.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <Link to={ctaLink} className="c-home__banner-contact-btn">
          {cta}
        </Link>
      </div>
      <div></div>
    </section>
  );
};
export default Home;
