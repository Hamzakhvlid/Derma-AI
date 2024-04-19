"use client";
import { useSelector } from 'react-redux';
import DashBoard1 from "../@dashboard/page";
import { RootState } from "@/app/lib/store";
import DashboardProfile from "../@profile/page";

export default function Mainbar() {
  const activeItem = useSelector((state:RootState) => state.sidebar.activeItem);

  const renderComponent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <DashBoard1 />;
      case 'Profile':
        return <DashboardProfile />;
      // Add cases for other components as needed
      default:
        return (
          <div>Not Found {activeItem}</div>
        ); // Handle default case or display a placeholder
    }
  };

  return (
    <div className="relative min-h-screen wrapper top-20 w-full">
      {renderComponent()}
    </div>
  );
}
