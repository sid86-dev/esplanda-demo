import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Tabs = () => {
  const tabs = [
    {
      name: "Home",
      link: "/",
      id: "home",
    },
    {
      name: "Login",
      link: "/login",
      id: "login",
    },
    {
      name: "Signup",
      link: "/signup",
      id: "signup",
    },
    {
      name: "Protected",
      link: "/protected",
      id: "protected",
    },
    {
      name: "Unprotected",
      link: "/unprotected",
      id: "unprotected",
    },
  ];

  const router = useRouter();

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabs.map((tab) => (
            <li key={tab.id} className="px-4 py-2">
              <Link
                href={tab.link}
                className={`text-gray-900 text-lg font-medium dark:text-white hover:text-blue-600 hover:no-underline ${
                  router.asPath === tab.link ? "text-blue-600" : ""
                }`}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
