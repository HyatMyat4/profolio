import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Projectdata } from "../../constant";
import { useEffect, useState } from "react";
import Main from "./Main";
import Left from "./Left";
import Right from "./Right";

function index() {
  const router = useRouter();
  const { Detail } = router.query;
  const [data, setdata] = useState<Project>();
  const [ifreamload, setifreamload] = useState<boolean>(false);

  useEffect(() => {
    const FilterData = Projectdata.filter(
      (data) => data.PROJECT_SHORT_NAME === Detail
    );
    setdata(FilterData[0]);
    const iframe = document.getElementById("iframe");
    const handleLoad = () => {
      setifreamload(true);
    };
    if (iframe) {
      iframe.addEventListener("load", handleLoad, true);
    }
  }, [Detail]);

  return (
    <div className="w-full h-screen bg-[#eee] dark:bg-[#191F2F]">
      <Head>
        <title>Htet Myat</title>
        <link
          rel="icon"
          href="/106451545-c7cef300-6497-11eb-80d9-e51c9fc3cd33.png"
        />
      </Head>
      <Header />
      <div className="w-full h-[93vh] frc justify-between">
        <Left data={data} />
        <Main ifreamload={ifreamload} data={data} />
        <Right />
      </div>
    </div>
  );
}

export default index;

/*
<DotPulse 
 size={40}
 speed={1.3} 
 color="black" 
/>
*/
