import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import Person from "./Person/Person";

const ProfileList = () => {
  const profileCtx = useContext(AppContext);
  const { personList, setPersonList, currentPerson, setCurrentPerson } =
    profileCtx;

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((res) => res.json())
      .then((data) => setPersonList(data));
  }, []);

  return (
    <div className="main-div">
      <div className="account-heading">Select an Account</div>
      <div className="scroll-div scrollbar-hidden">
        {personList?.users
          ? personList?.users.map((person) => (
              <Person
                key={person.id}
                person={person}
                setCurrentPerson={setCurrentPerson}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ProfileList;
