import { useRouter } from "next/router";
import supabase from "../lib/supabase";

const Timeline = () => {
  const router = useRouter();

  const user = supabase.auth.user();
  console.log(user);
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Timeline;
