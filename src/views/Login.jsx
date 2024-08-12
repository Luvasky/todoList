import "../styles/Login/Styles.css";
import * as lib from "../libraries/libraries.js";

const Login = () => {
  const navigate = lib.useNavigate("");

  return (
    <div className="l-m-c">
      <div className="l-s-c">
        {/* left setcion */}
        <div className="l-l-s l-l-c">
          <div className="l-c-s">
            <span className="l-s">Sign In</span>
          </div>

          {/* user inu */}
          <div className="l-c-u-i">
            <input className="l-i" type="text" placeholder="Enter username" />
          </div>

          {/* passowrd input */}
          <div className="l-c-p-i">
            <input className="l-i" type="text" placeholder="Enter password" />
          </div>

          {/* button */}
          <div className="l-c-b">
            <button className="l-btn">Login</button>
          </div>

          {/* message */}
          <div className="l-c-n-a-m">
            <span className="l-f-m">
              Don´t have an account ?{" "}
              <span
                className="l-s-m"
                onClick={() => navigate("/create-account")}
              >
                Create One
              </span>
            </span>
          </div>
        </div>

        {/* right Section */}

        <div className="l-r-s l-r-c">
          <img src={lib.img1}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
