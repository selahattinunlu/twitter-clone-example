import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import TwitterLogo from "../assets/images/twitter-logo.svg";
import Input from "./shared/Input";
import Select from "./shared/Select";

import supabase from "../lib/supabase";

function SigninModal({ open, onClose }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    router.push("/timeline");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="w-[600px] relative bg-white rounded-lg mx-auto p-6 space-y-8">
          <div className="flex justify-center">
            <TwitterLogo className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">Login</h2>

          <form className="space-y-4" onSubmit={login}>
            <Input
              type="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full py-2 px-6 text-center bg-primary text-white rounded-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
}

export default SigninModal;
