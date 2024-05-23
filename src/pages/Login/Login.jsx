import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../features/tasks/taskSlice";
import mail from "../../assets/mail-icon.svg";
import password from "../../assets/password-icon.svg";
import { useNavigate } from "react-router-dom";
import oval from "../../assets/oval.svg"

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loginCheckbox, setLoginCheckbox] = useState(false);
  const navigate = useNavigate();
  

  const login = async (e) => {
    e.preventDefault();


    if (!user.email || !user.password) {
      alert('Please fill in both email and password.');
      return;
    }


    await fetch("http://135.181.42.192/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(a);
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
      });

      navigate('/');
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="section bg-[#2B75CC] h-[100vh] flex justify-center items-center">
    <img className="absolute left-[-10px] top-[350px] z-[1]" src={oval} alt="" />
      <div className="bg-[#fff] rounded-[20px] w-[500px] h-[550px] flex flex-col justify-center items-center z-[2]">
        <div className="text-center flex items-center gap-[20px] mb-[40px]">
          <div className="w-[100px] h-[2px] bg-[#5E5E62]"></div>
          <h5 className="text-[28px] font-semibold">Daxil ol</h5>
          <div className="w-[100px] h-[2px] bg-[#5E5E62]"></div>
        </div>
        <form action="">
          <label
            htmlFor="email"
            className="text-[#5E5E62] nunito-sans font-semibold"
          >
            Mail adresiniz
          </label>
          <div className="w-[100%] rounded-md border-0 pt-[13px] pr-[16px] pb-[13px] pl-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 flex gap-[8px] align-center mb-[24px]">
            <img src={mail} alt="" />
            <input
              className="w-[100%] focus:outline-none"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Mail adresiniz "
              onChange={handleChange}
            />
          </div>

          <label
            htmlFor="password"
            className="text-[#5E5E62] nunito-sans font-semibold "
          >
            Şifrəniz
          </label>
          <div className="w-[100%] rounded-md border-0 pt-[13px] pr-[16px] pb-[13px] pl-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 flex gap-[8px] align-center ">
            <img src={password} alt="" />
            <input
              className="focus:outline-none w-[100%] "
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              placeholder="*****"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-[130px] mt-[16px]">
            <div className="flex gap-[4px]">
              <input
                className=""
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={(event) => {
                  setLoginCheckbox(event.target.value);
                }}
              />
              <label
                htmlFor="checkbox"
                className="text-[#5E5E62] nunito-sans font-semibold text-[14px]"
              >
                Məni xatırla
              </label>
            </div>
            <a
              href=""
              className="nunito-sans font-semibold text-[#005ABF] text-[14px]"
            >
              Şifrəni unutmusuz?
            </a>
          </div>

          {/* <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div>{task.description}</div>
                        <div>{task.services}</div>
                    </li>
                ))}
            </ul> */}
        </form>
        <button
          type="submit"
          onClick={login}
          className="w-[70%] p-[15px] rounded-[10px] bg-[#014FA7] text-[#fff] mt-[60px] nunito-sans font-semibold"
        >
          Daxil ol
        </button>
      </div>
    </div>
  );
}

export default Login;
