import BackToDashboard from "@/components/backToDashboard";
export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: any }) => {
  return (
    <main>
      <div>
        <BackToDashboard />
        {children}
      </div>
    </main>
  );
};

export default Layout;
