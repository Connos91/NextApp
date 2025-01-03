export const dynamic = "force-dynamic";

const Layout = ({ children }: { children: any }) => {
  return (
    <main className="flex w-full justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center">
        {children}
      </div>
    </main>
  );
};

export default Layout;
