// components
import Page from "../../components/Page";
import Layout from "@root/layouts";
import { DashboardSection } from "@root/sections/app";
import GuestGuard from "@root/guards/GuestGuard";

// ----------------------------------------------------------------------

Dashboard.getLayout = function getLayout(page: any) {
  return <Layout title="Dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <GuestGuard>
      <Page title="Login">
        <DashboardSection />
      </Page>
    </GuestGuard>
  );
}
