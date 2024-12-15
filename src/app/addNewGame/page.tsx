import AddNewGame from "@/components/addNewGame";
import { loginIsRequiredServer } from "@/utils/login";

const Page = async () => {
  await loginIsRequiredServer();

  return <AddNewGame />;
};

export default Page;
