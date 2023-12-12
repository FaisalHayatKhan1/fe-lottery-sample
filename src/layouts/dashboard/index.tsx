import Topnavbar from "./top-navbar/TopNavbar";
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: any) {
  return (
    <div>
      <Topnavbar />
      <div className="pt-[13vh]">{children} </div>
    </div>
  );
}
