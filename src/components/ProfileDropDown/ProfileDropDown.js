import React, { useContext } from "react";
import { Dropdown } from "antd";

import AppContext from "../AppContext";
import Styles from "./ProfileDropDown.module.css";

const ProfileDropDown = () => {
  const profileCtx = useContext(AppContext);
  const { personList, setPersonList, currentPerson, setCurrentPerson } =
    profileCtx;
  const items = [
    {
      label: <button>Click</button>,
      key: "last",
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <div className={Styles["container"]}>
            <img
              className={Styles["profile-pic"]}
              src={currentPerson.profilepicture}
            />
            <span>{currentPerson.name}</span>
          </div>
        </a>
      </Dropdown>
    </>
  );
};

export default ProfileDropDown;
