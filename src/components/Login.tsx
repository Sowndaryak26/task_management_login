import { useState, type FormEvent } from "react";
import RightVisualPanel from "./RightVisualPanel";
import stacklyLogo from "../assets/stackly_logo.png";

type LoginProps = {
  onSuccess: () => void;
  onRegister: () => void;
};

type RegisteredUser = {
  username: string;
  email: string;
  password: string;
  team: string;
};

export default function Login({
  onSuccess,
  onRegister,
}: LoginProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    // Email domain validation
    if (!email.toLowerCase().endsWith("@thestackly.com")) {
      setError(
        "Please use your The Stackly email ending with @thestackly.com."
      );
      return;
    }

    // Get registered user
    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      setError(
        "No registered account found. Please register first."
      );
      return;
    }

    const registeredUser: RegisteredUser =
      JSON.parse(savedUser);

    // Check username
    if (
      username.trim().toLowerCase() !==
      registeredUser.username.toLowerCase()
    ) {
      setError("Invalid username.");
      return;
    }

    // Check email
    if (
      email.trim().toLowerCase() !==
      registeredUser.email.toLowerCase()
    ) {
      setError("Invalid email address.");
      return;
    }

    // Check password
    if (password !== registeredUser.password) {
      setError("Incorrect password.");
      return;
    }

    // All details are correct
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE - ANALYTICS */}
        <div className="hidden lg:block">
          <RightVisualPanel />
        </div>

        {/* RIGHT SIDE - LOGIN */}
        <div className="flex items-center justify-center px-6 py-10 lg:px-12">

          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

            <div className="mb-8">
              <img
              src={stacklyLogo}
              alt="The Stackly"
              className="h-16 w-auto object-contain"
              />

              <p className="mt-2 text-sm text-slate-400">
                Task Management
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Login to continue to The Stackly Task Management.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* USERNAME */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  pattern="[a-zA-Z0-9._%+-]+@thestackly\.com$"
                  title="Please enter a valid The Stackly email ending with @thestackly.com"
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />

                <p className="mt-1.5 text-xs text-slate-500">
                  Use your The Stackly email ending with
                  @thestackly.com
                </p>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full rounded-md bg-red-600 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
              >
                Login
              </button>

            </form>

            {/* REGISTER */}
            <div className="mt-6 text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onRegister}
                className="font-semibold text-red-500 hover:text-red-400 hover:underline"
              >
                Click here to Register
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-slate-600">
                © The Stackly.com
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}