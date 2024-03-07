import React from "react";
import Link from "next/link";
import "./style.css";

const Links = () => {
  const links = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/contact",
      link: "Contact us",
    },
  ];

  return (
    <div className="absolute-center links">
      {links.map((x) => (
        <Link href={x.path} key={x.path}>
          <p>{x.link}</p>
        </Link>
      ))}
    </div>
  );
};

export default Links;
