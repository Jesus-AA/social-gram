import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './_auth/auth-layout';
import SignInForm from './_auth/forms/sign-in-form';
import SignUp from './_auth/forms/sign-up-form';
import { Home } from './_root/pages';
import { RootLayout } from './_root/root-layout';
import './globals.css';

import { Toaster } from '@/components/ui/toaster';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};
export default App;
