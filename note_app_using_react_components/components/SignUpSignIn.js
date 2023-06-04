const SignUpSignIn = () => {
  return (
    <div>
      <div id="to_hide" class="flex flex-col items-center justify-center">
        <div
          id="login"
          class="bg-blue-700 text-white mt-10 w-56 text-center font-bold rounded-lg items-center"
        >
          <label for="login_username" class="font-bold font-serif">
            LOGIN
          </label>
          <form action="" id="form" class="">
            <input
              type="text"
              id="login_username"
              placeholder="username"
              class="mt-2 px-2 rounded-xl text-black"
            />
            <input
              type="text"
              id="login_password"
              placeholder="password"
              class="mt-2 px-2 rounded-xl text-black"
            />
          </form>
          <button
            id="login_btn"
            class="bg-black px-3 m-8 rounded-xl font-bold font-serif"
          >
            login
          </button>
        </div>

        <div
          id="sign-up"
          class="bg-blue-700 text-white mt-10 w-56 text-center font-bold rounded-lg"
        >
          <label for="sign-up_username" class="font-bold font-serif uppercase">
            sign-up
          </label>
          <form action="" id="form" class="">
            <input
              type="text"
              id="sign-up_username"
              placeholder="username"
              class="mt-2 px-2 rounded-xl text-black"
            />
            <input
              type="text"
              id="sign-up_password"
              placeholder="password"
              class="mt-2 px-2 rounded-xl text-black"
            />
          </form>
          <button
            id="signup_btn"
            class="bg-black px-3 m-8 rounded-xl font-bold font-serif"
          >
            sign-up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpSignIn
