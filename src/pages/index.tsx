// import { Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";

// const Dashboard = () => {
//   const { t } = useTranslation();

//   return (
//     <div>
//       <Typography variant="h4">{t("dashboard")}</Typography>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page
    router.push("/login");
  }, [router]);

  return null; // or a loading spinner, etc.
};

export default IndexPage;
