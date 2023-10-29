import BottomBar from '@/components/ui/shared/bottom-bar';
import LeftSideBar from '@/components/ui/shared/left-bar';
import TopBar from '@/components/ui/shared/top-bar';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSideBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
}
