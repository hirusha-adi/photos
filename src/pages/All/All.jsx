import { useEffect } from "react";
import { Gallery } from "./components/Gallery";
import { NavBar } from "./components/NavBar";

const All = () => {
  useEffect(() => {
    document.title = `All Photos`;
  });

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <NavBar />
          <div className="mb-16 lg:mb-32">
            <Gallery />
          </div>
          <div className="block lg:hidden text-center mb-10">
            &copy; Hirusha Adikari, 2020 - {new Date().getFullYear()}
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
            <div className="text-lg border-b pb-2 mb-2">Country</div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sri Lanka</span>
                <input type="checkbox" defaultChecked className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Singapore</span>
                <input type="checkbox" defaultChecked className="checkbox" />
              </label>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export { All };
