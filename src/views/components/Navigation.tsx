import { PATH_HOME, PATH_PAYMENTS_AND_SUBSCRIPTIONS, PATH_PERSONALINFO, PATH_SECURITY, PATH_SHARING } from "@/lib/constant";
import { cn } from "@/lib/utils";
import {
  FiCreditCard,
  FiDatabase,
  FiHome,
  FiInfo,
  FiLock,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { NavLink } from "react-router";

const menus = [
    {
        icon: FiHome,
        title: "Trang chủ",
        path: PATH_HOME,
    },
    {
        icon: FiUser,
        title: "Thông tin cá nhân",
        path: PATH_PERSONALINFO,
    },
    {
        icon: FiDatabase,
        title: "Dữ liệu và quyền riêng tư",
        path: "/data-and-privacy",
    },
    {
        icon: FiLock,
        title: "Bảo mật",
        path: PATH_SECURITY,
    },
    {
        icon: FiUsers,
        title: "Mọi người và chia sẻ",
        path: PATH_SHARING,
    },
    {
        icon: FiCreditCard,
        title: "Thanh toán và gói thuê bao",
        path: PATH_PAYMENTS_AND_SUBSCRIPTIONS,
    },
    {
        icon: FiInfo,
        title: "Giới thiệu",
        path: "/about",
    },
];

const Navigation = () => {
  return (
    <>
      {/* Mobile navigation */}
      <div id="mobile-nav" className="mobile-nav">
        <div id="mobile-sidebar" className="mobile-sidebar overflow-y-auto">
          {/* Mobile sidebar content goes here - same as desktop sidebar */}
        </div>
      </div>
      <div className="fixed">
        <aside className="desktop-sidebar w-[280px] overflow-y-auto py-2">
          <nav>
            <ul className="cursor-pointer font-medium text-sm">
                {menus.map((menu, index) => (
                    <li key={index}>
                        <NavLink to={menu.path} className={({isActive}) => cn("sidebar-item px-4 py-3 flex items-center", isActive ? "active" : "")}>
                            <menu.icon className="mr-4 h-4 w-5" />
                            <span>{menu.title}</span>
                        </NavLink>
                    </li>
                ))}
              {/* <li className="sidebar-item px-4 py-3 flex items-center">
                <NavLink to={PATH_HOME} className="flex items-center">
                  <FiHome className="mr-4 h-4 w-5" />
                  <span>Trang chủ</span>
                </NavLink>
              </li>
              <li className="sidebar-item active px-4 py-3 flex items-center">
                <NavLink to={PATH_PERSONALINFO} className="flex items-center">
                  <FiUser className="mr-4 h-4 w-5" />
                  <span>Thông tin cá nhân</span>
                </NavLink>
              </li>
              <li className="sidebar-item px-4 py-3 flex items-center">
                <FiDatabase className="mr-4 h-4 w-5" />
                <span>Dữ liệu và quyền riêng tư</span>
              </li>
              <li className="sidebar-item px-4 py-3 flex items-center">
                <FiLock className="mr-4 h-4 w-5" />
                <span>Bảo mật</span>
              </li>
              <li className="sidebar-item px-4 py-3 flex items-center">
                <FiUsers className="mr-4 h-4 w-5" />
                <span>Mọi người và chia sẻ</span>
              </li>
              <li className="sidebar-item px-4 py-3 flex items-center">
                <FiCreditCard className="mr-4 h-4 w-5" />
                <span>Thanh toán và gói thuê bao</span>
              </li>
              <li className="border-t border-gray-200" />
              <li className="sidebar-item px-4 py-3 flex items-center">
                <FiInfo className="mr-4 h-4 w-5" />
                <span>Giới thiệu</span>
              </li> */}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navigation;
