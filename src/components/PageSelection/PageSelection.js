import React, { useState } from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import SideBar from "../SideBar/SideBar";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import Styles from "./PageSelection.module.css";

const PageSelection = () => {
  const [pageSelected, setPageSelected] = useState("Profile");
  return (
    <div className={Styles["page-selection"]}>
      <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
      <div>
        <div className={Styles["header"]}>
          <div>{pageSelected}</div>
          <ProfileDropDown />
        </div>
        {pageSelected === "Profile" ? (
          <ProfilePage />
        ) : (
          <div className={Styles["coming-soon"]}>Coming Soon</div>
        )}
      </div>
    </div>
  );
};

export default PageSelection;
