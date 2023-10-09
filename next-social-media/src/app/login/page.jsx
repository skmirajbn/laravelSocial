"use client";

import { useAuth } from "@/hooks/auth";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUp() {
  const pathname = usePathname();
  const { login, register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (pathname.includes("reset") && errors.length === 0) {
      setStatus(atob(pathname.split("reset=")[1]));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  // For Register or Signup user

  const [singUpData, setSignUpData] = useState({
    user_first_name: "Firs name",
    user_last_name: "Last Name",
    user_username: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_phone: "",
    user_birth_date: "",
    user_gender: 1,
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    const registerData = {
      ...singUpData,
      setErrors,
    };
    console.log(registerData);
    register(registerData);
  };

  const handleSignupInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const data = {
      ...singUpData,
      [name]: value,
    };
    setSignUpData(data);
  };

  return (
    <section className="bg-gradient-to-r from-blue-400 to-emerald-200 h-screen flex items-center">
      <div className="container flex justify-center py-32 gap-16 items-center">
        <div>
          <h2 className="text-6xl bg-gradient-to-r from-blue-500 via-blue-700 to-gray-900 font-bold bg-clip-text text-transparent">facebook</h2>
          <p className="text-2xl">
            Facebook helps you connect and share <br /> with the people in your life.
          </p>
        </div>
        <div className="space-y-8">
          <form onSubmit={submitForm} className="flex flex-col gap-3 bg-white shadow-lg px-6 py-6 rounded-lg">
            <input className="w-96 py-3 px-4 border-2 border-gray-300 focus:border-blue-600  rounded-md" type="text" placeholder="Email Address or Phone Number" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h3 className="text-red-600 italic text-sm">{errors?.email}</h3>
            <input className="w-96 py-3 px-4 border-2 border-gray-300 focus:border-blue-600  rounded-md" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <h3 className="text-red-600 italic text-sm">{errors?.password}</h3>
            <button className="bg-gradient-to-r from-cyan-500  to-blue-500 text-white py-3 rounded-md font-medium text-xl">Log in</button>
            <h5 className="text-center text-blue-600 text-sm">Forgotten Password?</h5>
            <hr />
            <h2 className="bg-[#42B72A] text-white inline-block w-fit px-6 py-3 rounded-md mx-auto font-medium cursor-pointer" onClick={() => document.getElementById("sign_up_modal").showModal()}>
              Create New Account
            </h2>
          </form>
          <h3 className="text-sm text-center">
            <b>Create a Page</b> for a celebrity, brand or business.
          </h3>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="sign_up_modal" className="modal">
          <div className="modal-box space-y-4">
            <h3 className="text-2xl font-bold">Sing Up</h3>
            <p>It's quick and easy.</p>
            <div className="flex justify-center">
              <form onSubmit={handleSignUp} className="space-y-4" method="dialog">
                <div className="flex gap-6">
                  <div>
                    <h3 className="text-red-600 italic text-sm">The Error is: {errors?.password}</h3>
                    <input className="p-2 rounded-md border border-gray-300" type="text" placeholder="First Name" name="user_first_name" value={singUpData.user_first_name} onChange={handleSignupInput} />
                  </div>
                  <input className="p-2 rounded-md border border-gray-300" type="text" placeholder="Last Name" name="user_last_name" value={singUpData.user_last_name} onChange={handleSignupInput} />
                </div>
                <input className="p-2 rounded-md border border-gray-300 w-full" type="text" placeholder="Username" name="user_username" value={singUpData.user_username} onChange={handleSignupInput} />
                <input className="p-2 rounded-md border border-gray-300 w-full" type="text" placeholder="Email Address" name="user_email" value={singUpData.user_email} onChange={handleSignupInput} />
                <input className="p-2 rounded-md border border-gray-300 w-full" type="text" placeholder="Phone Number" name="user_phone" value={singUpData.user_phone} onChange={handleSignupInput} />
                <input className="p-2 rounded-md border border-gray-300 w-full" type="password" placeholder="New Password" name="user_password" value={singUpData.user_password} onChange={handleSignupInput} />
                <input className="p-2 rounded-md border border-gray-300 w-full" type="password" placeholder="Confirm Password" name="user_password_confirmation" value={singUpData.user_password_confirmation} onChange={handleSignupInput} />
                <div>
                  <h5 className="text-sm">Date of Birth:</h5>
                  <input className="p-2 rounded-md border border-gray-300 w-full" type="date" name="user_birth_date" value={singUpData.user_birth_date} onChange={handleSignupInput} />
                </div>
                <div>
                  <h5 className="text-sm">Gender:</h5>
                  <div className="flex gap-6">
                    <div className="flex flex-row w-32 justify-between border border-gray-300 p-2 rounded-md">
                      <h3>Male</h3>
                      <input type="radio" name="user_gender" className="radio checked:bg-blue-500" value="1" checked={singUpData.user_gender == "1"} onChange={handleSignupInput} />
                    </div>
                    <div className="flex flex-row w-32 justify-between border border-gray-300 p-2 rounded-md">
                      <h3>Female</h3>
                      <input type="radio" name="user_gender" className="radio checked:bg-blue-500" value="2" checked={singUpData.user_gender == "2"} onChange={handleSignupInput} />
                    </div>
                    <div className="flex flex-row w-32 justify-between border border-gray-300 p-2 rounded-md">
                      <h3>Others</h3>
                      <input type="radio" name="user_gender" className="radio checked:bg-blue-500" value="3" checked={singUpData.user_gender == "3"} onChange={handleSignupInput} />
                    </div>
                  </div>
                </div>
                <p className="text-xs">
                  People who use our service may have uploaded your contact information to Facebook. <span className="text-blue-600">Learn more</span>. <br />
                  <br />
                  By clicking Sign Up, you agree to our Terms, <span className="text-blue-600">Privacy Policy</span> and <span className="text-blue-600">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
                </p>
                <input type="submit" value="Sign Up" className="block bg-[#00A400] text-white px-16 py-2 rounded-md font-medium mx-auto" />
                {/* if there is a button in form, it will close the modal */}
                <button className="btn ml-auto block bg-red-600 text-white hover:bg-red-500" onClick={() => document.getElementById("sign_up_modal").close()}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
}
