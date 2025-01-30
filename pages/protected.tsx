import { useSession } from "next-auth/react";

export default function Protected() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex justify-center ">
      <h1 className="font-bold mt-20 text-xl dark:text-white rounded-lg">
        {session
          ? `Hi, ${session.user?.email}, this is your protected content.`
          : "You can only access this page if you are logged in."}
      </h1>
    </div>
  );
}
