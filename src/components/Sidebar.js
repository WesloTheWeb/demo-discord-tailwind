import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";;

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                 bg-gray-900 shadow-lg">
            <SidebarIcon icon={<FaFire size="28" />} />
            <SidebarIcon icon={<BsPlus size="32" />} />
            <SidebarIcon icon={<BsFillLightningFill size="20" />} />
            <SidebarIcon icon={<FaPoo size="20" />} />
        </div>
    );
};

const SidebarIcon = ({ icon }) => {
    return (
        <div className='sidebar-icon'>
            {icon}
        </div>)
}

export default Sidebar;