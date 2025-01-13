import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-1">
        <div className="flex-none">
          <label className="btn btn-square btn-ghost" htmlFor="my-drawer">
            <List className="text-3xl" />
          </label>
        </div>
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            All Photos
          </Link>
        </div>
        <div className="flex-none">
          <div className="hidden lg:block">
            &copy; Hirusha Adikari, 2020-2025
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };
