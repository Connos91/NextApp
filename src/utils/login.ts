import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const loginIsRequiredServer = async () => {
  try {
    const session = await auth();

    if (!session) {
      return redirect("/"); // Make sure redirect usage is appropriate for the context
    }
  } catch (error) {
    console.error("Error fetching session:", error);
    // Handle the redirect error properly
    redirect("/");
  }
};
