import React, { useContext } from "react";
import AppContext from "../AppContext";
import GoogleMapReact from "google-map-react";
import Styles from "./ProfilePage.module.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ProfilePage = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const profileCtx = useContext(AppContext);
  const { personList, setPersonList, currentPerson, setCurrentPerson } =
    profileCtx;

  return (
    <div className={Styles["main-container"]}>
      <div className={Styles["left-container"]}>
        <img
          className={Styles["profile-pic"]}
          src={currentPerson.profilepicture}
        />
        <span className={Styles["detail-ans"]}>{currentPerson.name}</span>
        <div className={Styles["data-container"]}>
          <div className={Styles["detail-div"]}>
            <span className={Styles["detail-label"]}>Username</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>
              {currentPerson.username}
            </span>
          </div>
          <div className={Styles["detail-div"]}>
            <span className={Styles["detail-label"]}>e-mail</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>{currentPerson.email}</span>
          </div>
          <div className={Styles["detail-div"]}>
            <span className={Styles["detail-label"]}>Phone</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>{currentPerson.phone}</span>
          </div>
          <div className={Styles["detail-div-last"]}>
            <span className={Styles["detail-label"]}>Website</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>
              {currentPerson.website}
            </span>
          </div>

          <span className={Styles["detail-label"]}>Company</span>
          <div className={Styles["detail-div"]}>
            <span className={Styles["detail-label"]}>Name</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>
              {currentPerson.company.name}
            </span>
          </div>
          <div className={Styles["detail-div"]}>
            <span className={Styles["detail-label"]}>catchphrase</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>
              {currentPerson.company.catchPhrase}
            </span>
          </div>
          <div className={Styles["detail-div"]}>
            <span className={Styles["detail-label"]}>bs</span>
            <span className={Styles["colon"]}> : </span>
            <span className={Styles["detail-ans"]}>
              {currentPerson.company.bs}
            </span>
          </div>
        </div>
      </div>
      <div className={Styles["right-container"]}>
        <span className={Styles["detail-label-right"]}>Address:</span>
        <div className={Styles["detail-div"]}>
          <span className={Styles["detail-label"]}>Street</span>
          <span className={Styles["colon"]}> : </span>
          <span className={Styles["detail-ans"]}>
            {currentPerson.address.street}
          </span>
        </div>
        <div className={Styles["detail-div"]}>
          <span className={Styles["detail-label"]}>Suite</span>
          <span className={Styles["colon"]}> : </span>
          <span className={Styles["detail-ans"]}>
            {currentPerson.address.suite}
          </span>
        </div>
        <div className={Styles["detail-div"]}>
          <span className={Styles["detail-label"]}>City</span>
          <span className={Styles["colon"]}> : </span>
          <span className={Styles["detail-ans"]}>
            {currentPerson.address.city}
          </span>
        </div>
        <div className={Styles["detail-div"]}>
          <span className={Styles["detail-label"]}>Zipcode</span>
          <span className={Styles["colon"]}> : </span>
          <span className={Styles["detail-ans"]}>
            {currentPerson.address.zipcode}
          </span>
        </div>
        <GoogleMapReact
          className={Styles["map"]}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={currentPerson.address.geo.lat}
            lng={currentPerson.address.geo.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default ProfilePage;
