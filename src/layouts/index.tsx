// guards
import AuthGuard from "@root/guards/AuthGuard";
// components
import MainLayout from "./main";
import DashboardLayout from "./dashboard";
import GuestGuard from "@root/guards/GuestGuard";
import AuthLayout from "./AuthLayout";

// ----------------------------------------------------------------------

export default function Layout({
  variant = "dashboard",
  children,
  ...others
}: any) {
  if (variant === "auth") {
    return <AuthLayout {...others}> {children} </AuthLayout>;
  }


  if (variant === "main") {
    return (
      <AuthGuard>
        <MainLayout>{children}</MainLayout>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <DashboardLayout> {children}</DashboardLayout>
    </AuthGuard>
  );
}
