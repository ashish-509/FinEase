import Logo from "../images/logo.png";

function LoginPage() {
  return (
    <div className="container mx-auto mt-10 max-w-md pt-9 ">
      <div className="mx-auto">
        <img src={Logo} alt="logo" className="mx-auto w-40"/>
      </div>

      <h1 className="text-3xl font-semibold mb-6 text-center pt-5 pb-10">Login to Your Account</h1>
      <form action="/login" method="POST" className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-semibold" >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@xyz.com"
            className="w-full border rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="P@ssw0rd"
            className="w-full border rounded-md px-4 py-2"
          />
          <p className="text-right text-blue-500 hover:underline"><a href="/forgot-password">Forgot Password?</a></p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
