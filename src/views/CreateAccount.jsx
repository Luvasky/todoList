import "../styles/CreateAccount/Styles.css";
import * as lib from "../libraries/libraries.js";
import { inputs } from "../utils/CreateAccount/utils.js";
import User from "../classes/user.js";
import toast, { Toaster } from "react-hot-toast";

const CreateAccount = () => {
  const navigate = lib.useNavigate("/");
  const notify = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const [data, setData] = lib.useState({
    document: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const catchData = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cleanData = () => {
    setData({
      document: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  const sendRequest = async () => {
    if (data.password !== data.confirm) {
      notifyError("Las contraseñas no coinciden");
      return;
    }

    const user = new User(
      data.document,
      data.firstName,
      data.lastName,
      data.email,
      data.password
    );

    const response = await user.createUser();
    console.log({ response });
    const { status, message } = response;
    if (status === 200) {
      cleanData();
      notify(message);
    } else {
      notifyError(message);
    }
  };

  return (
    <div className="c-m-c">
      <div className="c-s-c">
        {/* left section */}
        <div className="c-l-s">
          <img src={lib.img2} alt="" className="c-i" />
        </div>
        {/* right section */}
        <div className="c-r-s">
          <div className="c-c-s">
            <span className="c-m-s">Sign up</span>
          </div>
          <div className="c-c-m-i">
            <div
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              {inputs.map((item, index) => (
                <lib.InputCreateAccount
                  key={index}
                  onChange={(e) => catchData(e.target.name, e.target.value)}
                  placeholder={item.placeHolders}
                  name={item.name}
                  type={item.type}
                  value={data[item.name]}
                />
              ))}
            </div>
          </div>
          <div className="c-c-b">
            <button className="c-tbn" onClick={sendRequest}>
              Register
            </button>
          </div>

          <div className="c-c-m">
            <span className="c-a-m">Already have an account? </span>
            <span className="c-s-i-m" onClick={() => navigate("/")}>
              Sign-in
            </span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateAccount;
