import DropDown from "./DropDown";
import { useEffect, useRef, useState } from "react";

export default function MenuItems({ items }) {
  const [dropDown, setDropDown] = useState(false);
  let ref = useRef();
  console.log(dropDown);

  useEffect(() => {
    const handler = (event) => {
      if (dropDown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropDown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropDown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropDown(false);
  };

  return (
    <div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.subMenu ? (
        <div className="relative group">
          <div
            className="group-hover:text-blue-700"
            onClick={() => setDropDown((prev) => !prev)}
          >
            <h1>{items.mainTitle}</h1>
          </div>
          {/* 서브메뉴 */}
          <DropDown dropDown={dropDown} subMenus={items.subMenu} />
        </div>
      ) : (
        <h1>{items.mainTitle}</h1>
      )}
    </div>
  );
}
