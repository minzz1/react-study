import React from "react";
import { RiBuilding4Line } from "react-icons/ri";

export default function LoginTab2() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px] flex flex-col items-center border border-blue-gray-300">
        {/* 아이콘이미지 */}
        <div className="w-32 h-32 bg-blue-200 rounded-full py-6">
          <RiBuilding4Line className="w-full h-full" />
        </div>
        {/* 로그인 폼 */}
        <form className="">
          <input type="text" placeholder="기업아이디" className="w-full my-6" />
          <input type="text" placeholder="비밀번호" className="w-full my-6" />
          <button
            type="submit"
            className="border border-neutral-300 px-6 py-1 w-full bg-gray-800 text-white"
          >
            Login
          </button>
        </form>
        {/* 찾기 */}
        <div>회원가입 | 아이디 찾기 비밀번호 찾기</div>
      </div>
    </div>
  );
}
