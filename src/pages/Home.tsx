import React, { HTMLAttributes, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const s1 = subheading[0].split("");
  const s2 = subheading[1].split("");
  const h = heading.split("");
  return (
    <section className="c-home">
      <div className="c-home__banner">
        {/* <TransitionGroup> */}
        <h1 className="c-home__banner-hero">
          {h.map((item, index) => (
            <CSSTransition
              key={"csst" + index}
              in={show}
              timeout={300}
              classNames="slide"
            >
              <span key={index}>
                {item === " " ? "\u00A0" : item}
                {/* {item} */}
              </span>
            </CSSTransition>
          ))}
          <br />
          {s1.map((item, index) => (
            <span key={index}>
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
        {/* <button
          onClick={() => {
            setShow(!show);
            console.log(show);
          }}
        >
          Click me
        </button> */}
        {/* </TransitionGroup> */}
      </div>
      <div></div>
    </section>
  );
};
export default Home;
