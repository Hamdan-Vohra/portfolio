import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
