const RightVisualPanel = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 px-8 py-10 text-white">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-slate-700/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">

        {/* Analytics Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Performance
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                Analytics
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex rounded-lg border border-slate-700 bg-slate-950 p-1">

              <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white">
                Weekly
              </button>

              <button className="px-3 py-1.5 text-xs text-slate-500">
                Monthly
              </button>

              <button className="px-3 py-1.5 text-xs text-slate-500">
                Yearly
              </button>

            </div>
          </div>

          {/* Graph */}
          <div className="relative mt-7 h-64 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-4">

            {/* Grid lines */}
            <div className="absolute left-4 right-4 top-12 border-t border-slate-800" />
            <div className="absolute left-4 right-4 top-24 border-t border-slate-800" />
            <div className="absolute left-4 right-4 top-36 border-t border-slate-800" />
            <div className="absolute left-4 right-4 top-48 border-t border-slate-800" />

            <svg
              viewBox="0 0 600 230"
              className="relative h-full w-full"
              preserveAspectRatio="none"
            >

              {/* Area */}
              <path
                d="M0 180
                   C80 160 90 80 170 105
                   C240 130 260 165 330 125
                   C400 85 430 145 490 90
                   C530 55 565 75 600 35
                   L600 230
                   L0 230 Z"
                fill="rgba(239,68,68,0.06)"
              />

              {/* Main red line */}
              <path
                d="M0 180
                   C80 160 90 80 170 105
                   C240 130 260 165 330 125
                   C400 85 430 145 490 90
                   C530 55 565 75 600 35"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Second line */}
              <path
                d="M0 195
                   C80 175 110 135 170 145
                   C230 155 280 95 340 120
                   C400 145 430 100 500 115
                   C545 125 570 90 600 75"
                fill="none"
                stroke="#64748b"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Last point */}
              <circle
                cx="600"
                cy="35"
                r="6"
                fill="#ef4444"
                stroke="#ffffff"
                strokeWidth="3"
              />

            </svg>

            {/* Days */}
            <div className="absolute bottom-3 left-5 right-5 flex justify-between text-[10px] font-medium text-slate-500">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>

          </div>

        </div>

        {/* Bottom cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Percentage Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Overall Progress
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  Task Completion
                </h3>
              </div>

              <div className="text-xs text-red-400">
                +12.5%
              </div>

            </div>

            <div className="mt-6 flex items-center justify-center">

              <div
                className="relative flex h-36 w-36 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#ef4444 0deg 151deg, #1e293b 151deg 360deg)",
                }}
              >

                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-slate-950">

                  <span className="text-xs text-slate-500">
                    Total
                  </span>

                  <span className="mt-1 text-3xl font-bold text-white">
                    75%
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Task Management
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Work smarter.
                <br />
                Stay organized.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Track your tasks, collaborate with your team,
                and manage your daily work efficiently from
                one place.
              </p>

            </div>

            <div className="mt-6 flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-xs text-slate-500">
                The Stackly Task Management
              </span>

            </div>

          </div>

        </div>

        {/* Bottom heading */}
        <div className="mt-8 text-center">

          <h2 className="text-2xl font-bold text-white">
            Very simple way you can engage
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Welcome to Task Management System.
            Efficiently track and manage your tasks with ease.
          </p>

        </div>

      </div>
    </div>
  );
};

export default RightVisualPanel;