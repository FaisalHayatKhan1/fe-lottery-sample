import { forwardRef } from "react";
// next
import Head from "next/head";
// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: any, ref) => (
    <>
      <Head>
        <title>{`${title} | Task-Search`}</title>
        {meta}
      </Head>

      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);

Page.displayName = "Page";

export default Page;
