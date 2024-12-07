import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const loginIsRequiredServer = async () => {
  try {
    const session = await auth();

    if (!session) {
      return redirect("/");
    }
  } catch (error) {
    console.error("Error fetching session:", error);

    return redirect("/");
  }
};
