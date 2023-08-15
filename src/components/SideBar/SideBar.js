import React from "react";
import Styles from "./sidebar.module.css";

const SideBar = ({ pageSelected, setPageSelected }) => {
  return (
    <div className={Styles["sidenav"]}>
      <div
        onClick={() => setPageSelected("Profile")}
        className={
          pageSelected === "Profile"
            ? `${Styles["tag-active"]}`
            : `${Styles["tag"]}`
        }
      >
        Profile
      </div>
      <div
        onClick={() => setPageSelected("Posts")}
        className={
          pageSelected === "Posts"
            ? `${Styles["tag-active"]}`
            : `${Styles["tag"]}`
        }
      >
        Posts
      </div>
      <div
        onClick={() => setPageSelected("Gallery")}
        className={
          pageSelected === "Gallery"
            ? `${Styles["tag-active"]}`
            : `${Styles["tag"]}`
        }
      >
        Gallery
      </div>
      <div
        onClick={() => setPageSelected("ToDo")}
        className={
          pageSelected === "ToDo"
            ? `${Styles["last-tag-active"]}`
            : `${Styles["last-tag"]}`
        }
      >
        ToDo
      </div>
    </div>
  );
};

export default SideBar;
