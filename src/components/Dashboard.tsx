import { useState, type ReactNode } from "react";
import stacklyLogo from "../assets/stackly_logo.png";

type MenuItem =
  | "Profile"
  | "Security"
  | "Multi-Factor Authentication"
  | "Settings"
  | "Sessions"
  | "Tasks"
  | "Privacy"
  | "Authentication"
  | "Domains";

type RegisteredUser = {
  username: string;
  email: string;
  password: string;
  team: string;
};

export default function Dashboard() {
  const [activeMenu, setActiveMenu] =
    useState<MenuItem>("Profile");

  // Get the registered user from localStorage
  const savedUser = localStorage.getItem("registeredUser");

  const user: RegisteredUser | null = savedUser
    ? JSON.parse(savedUser)
    : null;

  const username = user?.username || "User";
  const email = user?.email || "user@thestackly.com";
  const team = user?.team || "Team";

  const menuItems: MenuItem[] = [
    "Profile",
    "Security",
    "Multi-Factor Authentication",
    "Settings",
    "Sessions",
    "Tasks",
    "Privacy",
  ];

  const organizationItems: MenuItem[] = [
    "Authentication",
    "Domains",
  ];

  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* ================= SIDEBAR ================= */}
      <aside className="flex w-72 flex-col bg-slate-900 text-white">

        {/* BRAND */}
        <div className="border-b border-slate-800 px-6 py-5">
          <img
              src={stacklyLogo}
              alt="The Stackly"
              className="h-16 w-auto object-contain"
              />

          <p className="mt-1 text-sm text-slate-400">
            Accounts
          </p>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">

          {menuItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveMenu(item)}
              className={`mb-1 flex w-full items-center rounded-lg px-4 py-3 text-left text-sm transition ${
                activeMenu === item
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <span className="mr-3 text-lg">
                {getIcon(item)}
              </span>

              <span>{item}</span>
            </button>
          ))}

          {/* ORGANIZATION */}
          <div className="mt-8 px-4 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Organization
          </div>

          {organizationItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveMenu(item)}
              className={`mb-1 flex w-full items-center rounded-lg px-4 py-3 text-left text-sm transition ${
                activeMenu === item
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <span className="mr-3 text-lg">
                {getIcon(item)}
              </span>

              <span>{item}</span>
            </button>
          ))}
        </nav>

        {/* LOGOUT */}
        <div className="border-t border-slate-800 p-4">
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
            className="w-full rounded-lg px-4 py-3 text-left text-sm text-red-400 transition hover:bg-slate-800"
          >
            ↪ Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="min-w-0 flex-1 bg-slate-950">

        {/* TOP BAR */}
        <header className="flex min-h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-4">

          <div>
            <h2 className="text-xl font-semibold text-white">
              {activeMenu}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              The Stackly Accounts
            </p>
          </div>

          {/* LOGGED-IN USER */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 font-semibold uppercase text-red-400">
              {username.charAt(0)}
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-200">
                {username}
              </p>

              <p className="text-xs text-slate-500">
                {email}
              </p>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <section className="p-6 md:p-8">
          <DashboardContent
            activeMenu={activeMenu}
            username={username}
            email={email}
            team={team}
          />
        </section>
      </main>
    </div>
  );
}

/* =====================================================
   ICONS
===================================================== */

function getIcon(item: MenuItem) {
  switch (item) {
    case "Profile":
      return "👤";

    case "Security":
      return "🔒";

    case "Multi-Factor Authentication":
      return "🛡️";

    case "Settings":
      return "⚙️";

    case "Sessions":
      return "▣";

    case "Tasks":
      return "✓";

    case "Privacy":
      return "🔐";

    case "Authentication":
      return "🔑";

    case "Domains":
      return "🌐";

    default:
      return "•";
  }
}

/* =====================================================
   DASHBOARD CONTENT
===================================================== */

function DashboardContent({
  activeMenu,
  username,
  email,
  team,
}: {
  activeMenu: MenuItem;
  username: string;
  email: string;
  team: string;
}) {

  /* ================= PROFILE ================= */

  if (activeMenu === "Profile") {
    return (
      <div className="max-w-5xl">

        <h3 className="text-2xl font-bold text-white">
          Profile
        </h3>

        <p className="mt-2 text-slate-400">
          Manage your The Stackly account profile.
        </p>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

          <div className="grid gap-6 md:grid-cols-2">

            {/* USERNAME */}
            <div>
              <label className="text-sm font-medium text-slate-400">
                Username
              </label>

              <div className="mt-2 rounded-lg border border-slate-800 bg-slate-800 px-4 py-3 text-slate-200">
                {username}
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-slate-400">
                Email
              </label>

              <div className="mt-2 rounded-lg border border-slate-800 bg-slate-800 px-4 py-3 text-slate-200">
                {email}
              </div>
            </div>

            {/* TEAM */}
            <div>
              <label className="text-sm font-medium text-slate-400">
                Team
              </label>

              <div className="mt-2 rounded-lg border border-slate-800 bg-slate-800 px-4 py-3 text-slate-200">
                {team}
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <label className="text-sm font-medium text-slate-400">
                Organization
              </label>

              <div className="mt-2 rounded-lg border border-slate-800 bg-slate-800 px-4 py-3 text-slate-200">
                The Stackly
              </div>
            </div>

            {/* DOMAIN */}
            <div>
              <label className="text-sm font-medium text-slate-400">
                Company Email Domain
              </label>

              <div className="mt-2 rounded-lg border border-slate-800 bg-slate-800 px-4 py-3 text-slate-200">
                @thestackly.com
              </div>
            </div>

          </div>

          <button
            type="button"
            className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Edit Profile
          </button>

        </div>
      </div>
    );
  }

  /* ================= SECURITY ================= */

  if (activeMenu === "Security") {
    return (
      <SimplePage
        title="Security"
        description="Manage your account security settings."
      >
        <SettingCard
          title="Password"
          description="Change your account password and keep your account secure."
          button="Change Password"
        />

        <SettingCard
          title="Security Activity"
          description="Review recent security activity on your account."
          button="View Activity"
        />
      </SimplePage>
    );
  }

  /* ================= MFA ================= */

  if (activeMenu === "Multi-Factor Authentication") {
    return (
      <SimplePage
        title="Multi-Factor Authentication"
        description="Add an additional layer of security to your The Stackly account."
      >
        <SettingCard
          title="Multi-Factor Authentication"
          description="Protect your account with an additional verification step."
          button="Enable MFA"
        />
      </SimplePage>
    );
  }

  /* ================= SETTINGS ================= */

  if (activeMenu === "Settings") {
    return (
      <SimplePage
        title="Settings"
        description="Manage your account preferences and settings."
      >
        <SettingCard
          title="Account Preferences"
          description="Manage your general account preferences."
          button="Manage"
        />

        <SettingCard
          title="Notifications"
          description="Manage your notification preferences."
          button="Manage Notifications"
        />
      </SimplePage>
    );
  }

  /* ================= SESSIONS ================= */

  if (activeMenu === "Sessions") {
    return (
      <SimplePage
        title="Sessions"
        description="View and manage your active login sessions."
      >
        <SettingCard
          title="Current Session"
          description={`Signed in as ${email}`}
          button="Current Session"
        />

        <SettingCard
          title="Other Sessions"
          description="Review other active sessions on your account."
          button="View Sessions"
        />
      </SimplePage>
    );
  }

  /* ================= TASKS ================= */

  if (activeMenu === "Tasks") {
    return (
      <SimplePage
        title="Tasks"
        description="Manage your tasks and task-related activities."
      >
        <SettingCard
          title="My Tasks"
          description="View tasks assigned to your account."
          button="View Tasks"
        />

        <SettingCard
          title="Completed Tasks"
          description="View your completed tasks."
          button="View Completed"
        />
      </SimplePage>
    );
  }

  /* ================= PRIVACY ================= */

  if (activeMenu === "Privacy") {
    return (
      <SimplePage
        title="Privacy"
        description="Manage your privacy and account data settings."
      >
        <SettingCard
          title="Privacy Settings"
          description="Manage how your account information is used."
          button="Manage Privacy"
        />

        <SettingCard
          title="Account Data"
          description="Review your account data and preferences."
          button="View Data"
        />
      </SimplePage>
    );
  }

  /* ================= AUTHENTICATION ================= */

  if (activeMenu === "Authentication") {
    return (
      <SimplePage
        title="Organization Authentication"
        description="Manage authentication settings for The Stackly organization."
      >
        <SettingCard
          title="Organization Login"
          description="Manage authentication settings for your organization."
          button="Manage Authentication"
        />

        <SettingCard
          title="Company Email Domain"
          description="Users can sign in using their @thestackly.com email."
          button="@thestackly.com"
        />
      </SimplePage>
    );
  }

  /* ================= DOMAINS ================= */

  return (
    <SimplePage
      title="Domains"
      description="Manage your organization's verified domains."
    >
      <SettingCard
        title="The Stackly Domain"
        description="Company email domain configured for your organization."
        button="@thestackly.com"
      />
    </SimplePage>
  );
}

/* =====================================================
   SIMPLE PAGE
===================================================== */

function SimplePage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-5xl">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        {description}
      </p>

      <div className="mt-6 space-y-4">
        {children}
      </div>

    </div>
  );
}

/* =====================================================
   SETTING CARD
===================================================== */

function SettingCard({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg md:flex-row md:items-center">

      <div>
        <h4 className="font-semibold text-slate-200">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-400">
          {description}
        </p>
      </div>

      <button
        type="button"
        className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
      >
        {button}
      </button>

    </div>
  );
}