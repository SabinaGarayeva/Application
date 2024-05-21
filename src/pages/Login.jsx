import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/tasks/taskSlice";
import mail from "../assets/mail-icon.svg";
import password from "../assets/password-icon.svg";
import Axios from "axios";

function Login() {
  // const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.taskList.tasks);
  // const [remember, setRemember] = useState(false);
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  const [loginemail, setLoginemail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginCheckbox, setLoginCheckbox] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();

    Axios.post("", {
      loginEmail: loginemail,
      loginPasword: loginPassword,
      loginCheckbox: loginCheckbox,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className=" bg-[#fff] w-[600px] flex flex-col justify-center items-center pt-[100px] pb-[100px] pr-[120px] pl-[120px] rounded-[20px] m-auto mt-[20px]">
      <div
        className="form-header container mx-auto text-6xl text-center"
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <div
          style={{ width: "120px", height: "2px", backgroundColor: "#000" }}
        ></div>
        <h5 className="text-lg">Daxil ol</h5>
        <div
          style={{ width: "120px", height: "2px", backgroundColor: "#000" }}
        ></div>
      </div>
      <form action="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Mail adresiniz
        </label>
        <div className="w-[360px] rounded-md border-0 pt-[13px] pr-[16px] pb-[13px] pl-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 flex gap-[8px] align-center">
          <img src={mail} alt="" />
          <input
            className="input w-[100%]"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Mail adresiniz "
            onChange={(event) => {
              setLoginemail(event.target.value);
            }}
          />
        </div>

        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900 mt-[24px]"
        >
          Şifrəniz
        </label>
        <div className="w-[360px] rounded-md border-0 pt-[13px] pr-[16px] pb-[13px] pl-[16px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 flex gap-[8px] align-center ">
          <img src={password} alt="" />
          <input
            className=""
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            placeholder="*****"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </div>
        <div className="flex gap-[130px] mt-[16px]">
          <div>
            <input
              className="p"
              type="checkbox"
              name=""
              id=""
              onChange={(event) => {
                setLoginCheckbox(event.target.value);
              }}
            />
            Məni xatırla
          </div>
          <a href="">Şifrəni unutmusuz?</a>
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
        onClick={loginUser}
        className="w-[360px] p-[15px] rounded-[10px] bg-[#014FA7] text-[#fff] mt-[60px]"
      >
        Daxil ol
      </button>
    </div>
  );
}

export default Login;
