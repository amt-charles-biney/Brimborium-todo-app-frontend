import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "../assets/logo.png";
import { login } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import toastIt from "../utilities/toast";

const Login = () => {
  const flexy = "flex justify-center items-center";

  const dispatch = useAppDispatch();

  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await dispatch(login(loginInputs));
  }

  function handleChange(e: { target: HTMLInputElement }) {
    const target = e.target as HTMLInputElement;

    setLoginInputs({
      ...loginInputs,
      [target.name]: target.value,
    });
  }

  return (
    <div className={`w-full bg-black h-[100vh] ${flexy} text-white`}>
      <div
        className={`flex max-w-[400px] max-h-[400px] ${flexy} flex-col text-center`}
      >
        <img className="h-24 aspect-auto" src={logo} alt="logo" />
        <h2 className="text-[50px] font-bold">
          Brimborium <br />
          <span>
            <p className="text-sm font-normal">
              This is a straightforward to-do application designed and developed
              specifically for testing, showcasing, showboating, and educational
              purposes.
            </p>
          </span>
        </h2>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 mt-8 mb-4 w-[300px]"
        >
          <input
            type="email"
            name="email"
            id="email "
            placeholder="example@domain.com"
            className="p-1 rounded-md text-black outline-none border-none text-center text-md"
            required
            value={loginInputs.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="p-1 rounded-md text-black outline-none border-none text-center text-md"
            required
            value={loginInputs.password}
            onChange={handleChange}
          />
          <button className="my-2 border rounded-md p-1 border-white">
            <FontAwesomeIcon icon={faRightToBracket} className="text-xs" fade />
            &ensp;Login
          </button>
        </form>
        <p className="text-xs">
          Don't have an account yet? <br></br>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => toastIt("Coming soon!", "😉")}
          >
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
