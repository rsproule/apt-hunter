import { EchoAccount } from '@/components/echo-account-next';
import { isSignedIn } from '@/echo';
import Link from 'next/link';
import type { FC } from 'react';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: FC<HeaderProps> = async ({
  title = 'My App',
  className = '',
}) => {
  const signedIn = await isSignedIn();

  return (
    <header
      className={`border-gray-200 border-b bg-white shadow-sm ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="font-semibold text-gray-900 text-xl hover:text-gray-700 cursor-pointer">{title}</h1>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Search
              </Link>
              <Link 
                href="/saved-queries" 
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Saved Queries
              </Link>
            </nav>
          </div>

          <nav className="flex items-center space-x-4">
            <EchoAccount />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
