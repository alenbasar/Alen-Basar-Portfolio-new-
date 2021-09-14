import React from "react";
import { MenuItem, desktopMenu } from "../../src/constants/menu";
import Dompurify from "dompurify";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const renderLink = (menuItem: MenuItem) => {
  if (menuItem.to)
    return (
      <>
        <Link
          className="c-sidebar__menu-item"
          to={menuItem.to}
          dangerouslySetInnerHTML={{
            __html:
              (menuItem.icon
                ? Dompurify.sanitize(menuItem.icon)
                : menuItem.label) ?? "",
          }}
          data-tip={menuItem.text}
          data-for={menuItem.text}
        ></Link>
        {/* <p className="c-sidebar__menu-item__tooltip">{menuItem.text}</p> */}
        <ReactTooltip
          className="c-sidebar__menu-item__tooltip"
          effect="solid"
          offset={{ right: 15 }}
          type="info"
          place="right"
          backgroundColor="#324350"
          id={menuItem.text}
        />
      </>
    );

  return (
    <>
      <a
        className="c-sidebar__menu-item"
        href={menuItem.link}
        target="_blank"
        rel="noopener noreferrer"
        dangerouslySetInnerHTML={{
          __html:
            (menuItem.icon
              ? Dompurify.sanitize(menuItem.icon)
              : menuItem.label) ?? "",
        }}
        data-tip={menuItem.text}
        data-for={menuItem.text}
      ></a>
      {/* <p className="c-sidebar__menu-item__tooltip">{menuItem.text}</p> */}
      <ReactTooltip
        className="c-sidebar__menu-item__tooltip"
        effect="solid"
        offset={{ right: 18 }}
        type="info"
        place="right"
        backgroundColor="#324350"
        id={menuItem.text}
      />
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="c-logo">
        <h1>Alen Basar</h1>
      </div>
      <div className="c-sidebar">
        <ul className="is-desktop-only">
          {desktopMenu.map((m) => (
            <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
