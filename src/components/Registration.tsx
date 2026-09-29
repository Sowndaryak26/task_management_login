import { useState, type FormEvent } from "react";
import RightVisualPanel from "./RightVisualPanel";
import stacklyLogo from "../assets/stackly_logo.png";

type RegistrationProps = {
  onSuccess: () => void;
  onLogin: () => void;
};

const teams = [
  "AI_AM_Engineer",
  "Backend_Developer",
  "Data_Analyst",
  "Devops_Engineer",
  "Frontend_Developer",
  "Testing",
  "UI_UX",
  "Architecture",
  "Fullstack_Developer",
];

export default function Registration({
  onSuccess,
  onLogin,
}: RegistrationProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if user already exists
    const savedUser = localStorage.getItem("registeredUser");

    if (savedUser) {
      const existingUser = JSON.parse(savedUser);

      if (
        username.trim().toLowerCase() ===
          existingUser.username.toLowerCase() ||
        email.trim().toLowerCase() ===
          existingUser.email.toLowerCase()
      ) {
        setError(
          "This user already exists. Please login instead."
        );
        return;
      }
    }

    if (!agree) {
      setError(
        "Please agree to the Terms and Conditions and Privacy Policy."
      );
      return;
    }

    // Save registered user details
    const registeredUser = {
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      team: team,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(registeredUser)
    );

    onSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE - Analytics */}
        <div className="hidden lg:block">
          <RightVisualPanel />
        </div>

        {/* RIGHT SIDE - Registration */}
        <div className="flex items-center justify-center px-6 py-10 lg:px-12">

          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

            <div className="mb-8">
              <img
              src={stacklyLogo}
              alt="YOUR COMPANY"
              classname="h-16 w-auto object-contain"
              />


              <p className="mt-1 text-sm text-slate-400">
                Task Management
              </p>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Register to get started with Task Management.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >

              {/* Username */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Team */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Team
                </label>

                <select
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                >
                  <option value="" className="bg-slate-800">
                    Select Team
                  </option>

                  {teams.map((teamName) => (
                    <option
                      key={teamName}
                      value={teamName}
                      className="bg-slate-800 text-white"
                    >
                      {teamName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 pr-16 text-sm text-white placeholder:text-slate-500 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    required
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 pr-16 text-sm text-white placeholder:text-slate-500 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) =>
                    setAgree(e.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-red-600"
                />

                <p className="text-xs leading-5 text-slate-400">
                  I agree to the{" "}
                  <span className="font-semibold text-slate-200 underline">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-slate-200 underline">
                    Privacy Policy
                  </span>
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-red-600 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-red-700"
              >
                Submit
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onLogin}
                className="font-semibold text-red-500 hover:text-red-400 hover:underline"
              >
                Click here to Login
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}