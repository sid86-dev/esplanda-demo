import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function Home() {
  // Get session data and authentication status
  const { data: session, status } = useSession();
  const router = useRouter();

  // Show loading state while checking authentication
  if (status === "loading") return <>Loading...</>;

  return (
    <div className="flex mt-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          {/* App Title */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to Esplanda
          </h1>
          {/* App Description */}
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            I have built this with Next.js and Tailwind that includes signup,
            login, protected, and unprotected pages. On the backend, I have used
            NextAuth with JWT, Google, and Facebook login, along with Passport
            for authentication. For the database, I have worked with MongoDB,
            based on your preference. The app is fully functional and deployed
            on Vercel.
          </p>
          {/* Buttons for Authentication */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            {session && status === "authenticated" ? (
              <button
                onClick={() => {
                  const promise = signOut();

                  toast.promise(promise, {
                    loading: "Signing out...",
                    success: () => {
                      router.push("/");
                      return <b>Logout successful!</b>;
                    },
                    error: <b>Something went wrong</b>,
                  });
                }}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Login
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            )}
            {/* Learn More Button */}
            <a
              href="#"
              className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
