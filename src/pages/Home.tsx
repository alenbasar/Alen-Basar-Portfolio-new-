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
  const { className = "", content, pageTitle, ...restProps } = props;
  const { heading, subheading, cta, ctaLink } = content;
  return (
    <section className="c-home">
      <div className="c-home__banner">
        <h1 className="c-home__banner-heading">{heading}</h1>
        {subheading.map((s) => (
          <h1 className="c-home__banner-subheading">{s}</h1>
        ))}
        <Link to={ctaLink} className="c-home__banner-contact-btn">
          {cta}
        </Link>
      </div>
      <div></div>
    </section>
  );
};
export default Home;
