import React from "react";
import { Layout, StudentLayout } from "../../../components/Layout";
import StudentNav from "../../../components/studentnav";

const Test = React.memo(() => {
  const breadcrumb = [{ text: "Aritmética", link: "/dashboard/arithmetic" }];

  return (
    <Layout>
      <StudentNav breadcrumb={breadcrumb} />
      <StudentLayout>
        {/* intro */}
        <h2 style={{ fontWeight: 600 }} className="display-4">
          suma 1
        </h2>
      </StudentLayout>
    </Layout>
  );
});

export default Test;
