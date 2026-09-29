import { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";

type Page = "login" | "register" | "dashboard";

function App() {
  // Application starts with Login page
  const [page, setPage] = useState<Page>("login");

  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [showRegistrationSuccess, setShowRegistrationSuccess] =
    useState(false);

  return (
    <>
      {/* LOGIN PAGE */}
      {page === "login" && (
        <Login
          onSuccess={() => setShowLoginSuccess(true)}
          onRegister={() => setPage("register")}
        />
      )}

      {/* REGISTRATION PAGE */}
      {page === "register" && (
        <Registration
          onSuccess={() => setShowRegistrationSuccess(true)}
          onLogin={() => setPage("login")}
        />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && <Dashboard />}

      {/* REGISTRATION SUCCESS POPUP */}
      {showRegistrationSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Registration Successful!
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Your account has been created successfully.
            </p>

            <button
              onClick={() => {
                setShowRegistrationSuccess(false);
                setPage("login");
              }}
              className="mt-6 w-full rounded-md bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
            >
              Click here to Login
            </button>

          </div>
        </div>
      )}

      {/* LOGIN SUCCESS POPUP */}
      {showLoginSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Login Successful!
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Welcome to The Stackly.
            </p>

            <button
              onClick={() => {
                setShowLoginSuccess(false);
                setPage("dashboard");
              }}
              className="mt-6 w-full rounded-md bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
            >
              Go to Dashboard
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default App;