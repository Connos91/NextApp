import BackToDashboard from "@/components/backToDashboard";

const Layout = ({ children }: { children: any }) => {
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
