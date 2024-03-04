import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cart from "../Image/cart.gif";
import "./Style.css";
export default function Signup(props) {
  const [data, setData] = useState([{}, {}, {}]);
  const [msg, setMsg] = useState("Sign up as Buyer");
  const [statement, setStatement] = useState("Get access to your Orders");
  const [emailMsg, setEmailMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [passMsg, setPassMsg] = useState("");
  const [conPassMsg, setConPassMsg] = useState("");
  const [user, setUser] = useState("Buyer");
  const [checkMail, setCheckMail] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkPass, setCheckPass] = useState(false);

  const buyer = () => {
    setUser("Buyer");
    setMsg("Sign up as Buyer");
    setStatement("Became a user of ShopOn");
  };

  const navigate = useNavigate();

  const seller = () => {
    setUser("Seller");
    setMsg("Sign up as Seller");
    setStatement("Became a ShopOn Seller");
  };

  useEffect(() => {
    const fecthData = async () => {
      try {
        let itemsData = await fetch("https://fakestoreapi.com/users");
        itemsData = await itemsData.json();
        setData(itemsData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fecthData();
  }, []);

  const handelOnFocusEmail = (event) => {
    setEmailMsg("");
    setCheckMail(true);
  };

  const handelOnBlurEmail = async (event) => {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    let a = event.target.value.toLowerCase();
    if (pattern.test(a)) {
      data.forEach((element) => {
        if (element.email === a) {
          setCheckMail(false);
          setEmailMsg("Already Exists");
        }
      });
    } else {
      setEmailMsg("Invalid Email");
      setCheckMail(false);
    }
  };

  const handelOnFocusName = (event) => {
    setNameMsg("");
    setCheckName(true);
  };

  const handelOnBlurName = (event) => {
    let a = event.target.value;
    data.forEach((element) => {
      if (element.username === a) {
        setCheckName(false);
        setNameMsg("Already Exists");
      }
    });
  };

  /*------------password--------------*/
  const show = () => {
    document.getElementById("message").style.display = "block";
  };
  const hide = () => {
    document.getElementById("message").style.display = "none";
  };

  const handelOnChangePass = (event) => {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    let con1 = false,
      con2 = false,
      con3 = false,
      con4 = false;
    if (event.target.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
      con1 = true;
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
      con1 = false;
    }
    if (event.target.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      con2 = true;
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      con2 = false;
    }
    if (event.target.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
      con3 = true;
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      con3 = false;
    }
    if (event.target.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
      con4 = true;
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      con4 = false;
    }
    if (con1 && con2 && con3 && con4) {
      setPassMsg("Valid Password");
      setCheckPass(true);
    } else {
      setPassMsg("Invalid Password");
      setCheckPass(false);
    }

    handleConPass();
  };

  const handleConPass = (event) => {
    let pass = document.querySelector("#inputPassword").value;
    let conPass = document.querySelector("#inputConPass").value;
    if (pass === conPass && checkPass) {
      setConPassMsg("Confirmed");
    } else {
      setConPassMsg("Invalid");
    }
  };

  const signup = () => {
    if (checkMail && checkName && conPassMsg === "Confirmed") {
      let userId = document.getElementById("inputEmail").value.toLowerCase();
      let userName = document.getElementById("inputUserName").value;
      let userPass = document.getElementById("inputPassword").value;
      setMsg("Welcome " + userName);
      setStatement("Congratulation on beacoming successfull " + user);
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          email: userId,
          username: userName,
          password: userPass,
          name: {
            firstname: "John",
            lastname: "Doe",
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          alert(
            "Congratulation on becoming ShopOn " +
              user +
              "\nMoving to login page"
          );
          navigate("/login");
          // if (
          //   window.confirm(
          //     "Congratulation on becoming ShopOn " +
          //       user +
          //       "\nMove to login page"
          //   ) == true
          // ) {
          //   navigate("/login");
          // } else {
          //   navigate("/login/signup");
          // }
        });
    } else {
      setMsg("Sign up as " + user);
      if (user === "Buyer") {
        setStatement("Get access to your Orders");
      } else {
        setStatement("Became a ShopOn Seller");
      }
    }
  };

  return (
    <div
      className={`container-xl mt-1 align-self-start d-flex justify-content-center`}
    >
      {/* -------------------------msg-box----------------------- */}
      <div
        id="box"
        className={`col bg-${props.mode === "light" ? "info" : "dark"} p-0`}
      >
        <div className="fs-3 mt-3 px-3 text-white fw-semibold" id="msg">
          {msg}
        </div>
        <div className="fs-5 mt-2 px-3 text-secondary lh-1">{statement}</div>
        <div className="align-items-center d-inline-flex" id="moving1">
          <img src={cart} alt="" />
        </div>
      </div>
      {/* Signup form */}
      <form
        className={` col-5 m-0 ms-1 p-3 text-white bg-${
          props.mode === "light" ? "info" : "dark"
        } `}
      >
        <div className="mb-2">
          <label htmlFor="inputEmail" className="form-label mb-1">
            Email address
            <sup
              className={`${
                emailMsg === "Valid Email" ? "text-success" : "text-danger"
              } ms-1`}
              style={{ fontSize: 11 }}
            >
              {emailMsg}
            </sup>
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="example@mail.com"
            // onChange={(event) => handleOnChange(event)}
            onFocus={(event) => handelOnFocusEmail(event)}
            onBlur={(event) => handelOnBlurEmail(event)}
          />
        </div>
        {/* ------------------username--------------------- */}
        <div>
          <label htmlFor="inputUserName" className="form-label mb-1">
            User Name
            <sup
              className={`${
                nameMsg === "Confirmed" ? "text-success" : "text-danger"
              } ms-1`}
              style={{ fontSize: 11 }}
            >
              {nameMsg}
            </sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUserName"
            onFocus={(event) => handelOnFocusName(event)}
            onBlur={(event) => handelOnBlurName(event)}
          />
        </div>
        {/*-------------------            password           --------------- */}
        <>
          <div className="mb-2">
            <label htmlFor="inputPassword" className="form-label mb-1">
              Password
              <sup
                className={`${
                  passMsg === "Valid Password" ? "text-success" : "text-danger"
                } ms-1`}
                style={{ fontSize: 11 }}
              >
                {passMsg}
              </sup>
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              onChange={(event) => handelOnChangePass(event)}
              onFocus={show}
              onBlur={hide}
            />
          </div>
          <div className="bg-white text-dark py-2 px-4 rounded" id="message">
            <p className="fs7 fw-bolder">
              Password must contain the following:
            </p>
            <p id="letter" className="invalid fs7">
              A <b>lowercase</b> letter
            </p>
            <p id="capital" className="invalid fs7">
              A <b>Uppercase</b> letter
            </p>
            <p id="number" className="invalid fs7">
              A <b>Number</b>
            </p>
            <p id="length" className="invalid fs7">
              Minimum <b>8 characters</b>
            </p>
          </div>
        </>
        {/* -----------------Confirm pass---------------------- */}
        <div className="mb-2">
          <label htmlFor="inputConPass" className="form-label mb-1">
            Confirm Password
            <sup
              className={`${
                conPassMsg === "Confirmed" ? "text-success" : "text-danger"
              } ms-1`}
              style={{ fontSize: 11 }}
            >
              {conPassMsg}
            </sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputConPass"
            onChange={(event) => handleConPass(event)}
          />
        </div>
        {/* -------------------signup as------------------- */}
        SignUp As:
        <div className="mb-2">
          <div
            className="btn-group mt-1"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked={true}
              onChange={buyer}
            />
            <label
              className="btn btn-outline-light border-3 m-1 rounded fw-semibold px-3"
              htmlFor="btnradio1"
            >
              Buyer
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              onChange={seller}
            />
            <label
              className="btn btn-outline-light border-3 m-1 rounded fw-semibold px-3"
              htmlFor="btnradio2"
            >
              Seller
            </label>
          </div>
        </div>
        {/* ----------------------signup------------------------ */}
        <div className="d-flex justify-content-end mt-4">
          <div className="btn btn-light fw-semibold px-3" onClick={signup}>
            SignUp
          </div>
        </div>
      </form>
    </div>
  );
}
