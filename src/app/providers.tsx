import { NextUIProvider } from '@nextui-org/react';
import NavbarComponent from './component/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
