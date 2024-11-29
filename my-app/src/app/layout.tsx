// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useBackground } from '../context/BackgroundContext';


  

export const metadata = {
  title: 'Medcare Dashboard',
  description: 'Medcare Application Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  
  return (
    <html lang="en">
      <body  >
      <div className="flex-1 bg-gray-100 w-[100vw] flex-wrap justify-around ">
       
       <Header />
      
       </div>
        <div className="flex flex-1">
        <div className="flex bg-gray-100">
      <Sidebar />
      {/*    <button onClick={changeBackground}
        className="bg-white text-black px-6 py-2 rounded-lg text-xl hover:bg-gray-200 transition-all duration-300 absolute top-4 right-4"
      >
        Change Background
      </button>   */}
          <div className="bg-gray-100 lg:ml-64 mt-16">
            {children}  
          </div>  
          </div>
          </div>
        
      </body>
    </html>
  );
}
