import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";
import LeftMain from "../components/LeftMain";
import RightMain from "../components/RightMain";
const Home: NextPage = () => {
  return (
    <div className="w-full h-screen   bg-[#eee] dark:bg-[#191F2F] text-gray-700 dark:text-gray-300 overflow-hidden  ">
      <Head>
        <title>Htet Myat</title>
        <link
          rel="icon"
          href="/106451545-c7cef300-6497-11eb-80d9-e51c9fc3cd33.png"
        />
      </Head>
      <Header />
      <div
        id="cutomscoll"
        className="w-full h-[93vh] frc justify-between relative  overflow-y-scroll overflow-x-hidden scroll-smooth "
      >
        <LeftMain />
        <Main />
        <RightMain />
      </div>
    </div>
  );
};

export default Home;
