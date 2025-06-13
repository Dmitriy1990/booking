import { FaGoogle } from "react-icons/fa";
import { signIn } from "@/app/auth";

export const LoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-md hover:bg-blue-600 cursor-pointer">
        <FaGoogle className="size-6" /> Sign in with Google
      </button>
    </form>
  );
};
