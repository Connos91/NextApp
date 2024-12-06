import { loginIsRequiredServer } from "@/lib/auth";
import BackToDashboard from "@/components/backToDashboard";
import AddNewGame from "@/components/addNewGame";

const Page = async () => {
  await loginIsRequiredServer();

  return (
    <>
      <BackToDashboard />
      <AddNewGame />
    </>
  );
};

export default Page;

// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import AddNewGame from "@/components/addNewGame";
// import BackToDashboard from "@/components/backToDashboard";

// export default function AddNewGamePage() {
//   const { status } = useSession();
//   const router = useRouter();

//   if (status === "unauthenticated") {
//     router.push("/");
//     return null;
//   }

//   return (
//     <>
//       <BackToDashboard />
//       <AddNewGame />
//     </>
//   );
// }
