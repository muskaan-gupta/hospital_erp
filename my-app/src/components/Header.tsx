import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className=" fixed bg-white shadow-md p-4 w-full z-10 text-black">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">WokeGenics</span>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          <UserCircleIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
