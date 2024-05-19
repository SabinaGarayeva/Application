import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/tasks/taskSlice";
import "../App.css";
import tailwindConfig from "../../tailwind.config";
import mail from "../assets/mail-icon.svg";
import password from "../assets/password-icon.svg";

function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskList.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <form action="">
        <div
          className="form-header"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <div
            style={{ width: "120px", height: "2px", backgroundColor: "#000" }}
          ></div>
          <h5 style={{ fontSize: "28px" }}>Daxil ol</h5>
          <div
            style={{ width: "120px", height: "2px", backgroundColor: "#000" }}
          ></div>
        </div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Mail adresiniz
        </label>
        <div
          className="mt-2"
          style={{
            border: "1px solid #000",
            width: "360px",
            padding: "13px 16px",
            display: "flex",
            gap: "8px",
            borderRadius:"8px"
          }}
        >
          <img src={mail} alt="" />
          <input
            style={{ border: "none" }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Mail adresiniz"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Şifrəniz
        </label>
        <div
          className="mt-2"
          style={{
            border: "1px solid #000",
            width: "360px",
            padding: "13px 16px",
            display: "flex",
            gap: "8px",
            borderRadius:"8px"

          }}
        >
          <img src={password} alt="" />
          <input
            style={{ border: "none" }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="*****"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div style={{ display: "flex", gap: "140px"}}>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            Məni xatırla
          </div>
          <a href="">Şifrəni unutmusuz?</a>
        </div>
        <button style={{"width":"360px", "padding":"15px", "borderRadius":"10px"}}>Save</button>

        {/* <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div>{task.description}</div>
                        <div>{task.services}</div>
                    </li>
                ))}
            </ul> */}
      </form>
    </div>
  );
}

export default Home;
