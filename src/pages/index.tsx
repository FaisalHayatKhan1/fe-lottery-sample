import Layout from "@root/layouts";
import { DashboardSection } from "@root/sections/app";
import AuthGuard from "@root/guards/AuthGuard";
import Page from "@root/components/Page";

Dashboard.getLayout = function getLayout(page: any) {
  return <Layout title="Dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Page title="Dashboard">
      <DashboardSection />
    </Page>
  );
}
