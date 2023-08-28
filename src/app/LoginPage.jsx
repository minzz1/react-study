import React from "react";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import LayoutTab from "../components/LayoutTab";
import LoginTab1 from "../components/LoginTab1";
import LoginTab2 from "../components/LoginTab2";

const tablist = [
  { title: "개인", children: <LoginTab1 /> },
  { title: "기업", children: <LoginTab2 /> },
];

export default function LoginPage() {
  return (
    <Layout>
      <LayoutContents>
        <div className=" w-full flex justify-center">
          <div className=" w-[800px]">
            <form action="">
              <h1 className="text-2xl font-medium py-4">로그인</h1>
            </form>
            <LayoutTab tablist={tablist} numbers="grid-cols-2"></LayoutTab>
          </div>
        </div>
      </LayoutContents>
    </Layout>
  );
}
