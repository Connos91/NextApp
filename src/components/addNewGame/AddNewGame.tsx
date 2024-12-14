import ClientForm from "@/components/addNewGame/components/clientForm";
import ServerForm from "@/components/addNewGame/components/serverForm";

const AddNewGame = () => {
  return (
    <div className="flex flex-col justify-center py-2 max-w-screen-md mx-auto space-y-10">
      <ClientForm />
      <ServerForm game={null} />
    </div>
  );
};

export default AddNewGame;
