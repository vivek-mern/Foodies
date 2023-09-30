import React from "react";
import "./UserForm.css";

const UserForm = () => {
  return (
    <>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              SIGN UP
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>SIGN UP</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              LOG IN
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
