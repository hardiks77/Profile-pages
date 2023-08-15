import React from "react";
import styles from "./Person.module.css";
import { useNavigate } from "react-router-dom";

const Person = ({ person, setCurrentPerson }) => {
  const navigate = useNavigate();
  const selectHandler = () => {
    setCurrentPerson(person);
    navigate("/pages");
  };

  return (
    <div className={styles["container"]} onClick={selectHandler}>
      <img
        className={styles["profile-pic"]}
        src={person.profilepicture}
        alt="profile-pic"
      />
      <span>{person.name}</span>
    </div>
  );
};

export default Person;
