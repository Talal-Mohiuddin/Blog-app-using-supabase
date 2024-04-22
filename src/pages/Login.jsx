import React, { useState,useEffect } from "react";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "../components/index";
import { toast } from "react-toastify";

const Login = () => {
  const login = localStorage.getItem("login");
  console.log(login);
  const { Login } = useAuth();
  const [user, setuser] = useState({
    Email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = useMutation({
    mutationFn: async () => {
      const { Email, password } = user;
      const output = await Login(Email, password);
      if (output) {
        toast.error(output);
      } else {
        navigate("/admin");
        toast.success("Successfully Logged In");
      }
    },
  });
  useEffect(() => {
    if (login) {
      navigate("/admin");
    }
  }, [login, navigate]);

  if (handleSubmit.isPending) return <Spinner />;

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-slate-500">
        <div className="flex flex-col gap-4 h-[90%] items-center justify-center ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit.mutate();
            }}
            className="bg-[slategray] shadow-2xl shadow-gray-800 p-10 min-w-[340px] md:min-w-[450px] rounded-lg"
          >
            <div className="mb-4">
              <h2 className="text-4xl mb-1 text-[lightsteelblue]  font-[600]">
                Email
              </h2>
              <input
                placeholder="Enter Email"
                type="text "
                onChange={(e) => {
                  setuser({
                    ...user,
                    Email: e.target.value,
                  });
                }}
                value={user.Email}
                className="shadow-lg text-[19px] rounded-md py-2 px-3 w-[100%]"
              />
            </div>
            <div className="my-4">
              <h2 className="text-4xl mb-1 text-[lightsteelblue] font-[600]">
                Password
              </h2>
              <input
                type="password"
                placeholder="Enter PassWord"
                className="shadow-lg text-[19px] rounded-md py-2 px-3 w-[100%]"
                onChange={(e) => {
                  setuser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                value={user.password}
              />
            </div>
            <button className="bg-slate-700 mt-2 py-2 px-5 text-[lightsteelblue] rounded-md hover:text-[black] transition-[all] hover:bg-[lightsteelblue] shadow-lg min-w-[120px] text-xl">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
