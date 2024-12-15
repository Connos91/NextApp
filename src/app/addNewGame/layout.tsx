import BackToDashboard from "@/components/backToDashboard";

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
