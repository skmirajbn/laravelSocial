"use client";
export default function SignUp() {
  return (
    <section className="bg-[#F0F2F5] flex container justify-center py-32 gap-16 items-center">
      <div>
        <h2 className="text-6xl text-blue-600 font-bold">facebook</h2>
        <p className="text-2xl">
          Facebook helps you connect and share <br /> with the people in your life.
        </p>
      </div>
      <div className="space-y-8">
        <form action="" className="flex flex-col gap-3 bg-white shadow-lg px-6 py-6 rounded-lg">
          <input className="w-96 py-3 px-4 border-2 border-gray-300 focus:border-blue-600  rounded-md" type="text" placeholder="Email Address or Phone Number" />
          <input className="w-96 py-3 px-4 border-2 border-gray-300 focus:border-blue-600  rounded-md" type="text" placeholder="Password" />
          <button className="bg-[#1877F2] text-white py-3 rounded-md font-medium text-xl">Log in</button>
          <h5 className="text-center text-blue-600 text-sm">Forgotten Password?</h5>
          <hr />
          <h2 className="bg-[#42B72A] text-white inline-block w-fit px-6 py-3 rounded-md mx-auto font-medium cursor-pointer" onClick={() => document.getElementById("my_modal_1").showModal()}>
            Create New Account
          </h2>
        </form>
        <h3 className="text-sm text-center">
          <b>Create a Page</b> for a celebrity, brand or business.
        </h3>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="text-2xl font-bold">Sing Up</h3>
          <p>It's quick and easy.</p>
          <div className="flex justify-center">
            <form className="space-y-4" method="dialog">
              <div className="flex gap-6">
                <input className="p-2 rounded-md border border-gray-300" type="text" placeholder="First Name" />
                <input className="p-2 rounded-md border border-gray-300" type="text" placeholder="Surname" />
              </div>
              <input className="p-2 rounded-md border border-gray-300 w-full" type="text" placeholder="Mobile or Email Address" />
              <input className="p-2 rounded-md border border-gray-300 w-full" type="password" placeholder="New Password" />
              <div>
                <h5 className="text-sm">Date of Birth:</h5>
                <input className="p-2 rounded-md border border-gray-300 w-full" type="date" />
              </div>
              <div>
                <h5 className="text-sm">Gender:</h5>
                <div className="flex gap-6">
                  <div className="flex flex-row w-32 justify-between border border-gray-300 p-2 rounded-md">
                    <h3>Male</h3>
                    <input type="radio" name="radio-2" className="radio checked:bg-blue-500" checked />
                  </div>
                  <div className="flex flex-row w-32 justify-between border border-gray-300 p-2 rounded-md">
                    <h3>Female</h3>
                    <input type="radio" name="radio-2" className="radio checked:bg-blue-500" checked />
                  </div>
                  <div className="flex flex-row w-32 justify-between border border-gray-300 p-2 rounded-md">
                    <h3>Others</h3>
                    <input type="radio" name="radio-2" className="radio checked:bg-blue-500" checked />
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
              <button className="btn ml-auto block bg-red-600 text-white hover:bg-red-500">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
