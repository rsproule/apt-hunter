import SignInButton from "@/app/_components/echo/sign-in-button";
import SearchBar from "@/app/_components/SearchBar";
import SearchHistory from "@/app/_components/SearchHistory";
import { isSignedIn } from "@/echo";

export default async function Home() {
  const signedIn = await isSignedIn();

  if (!signedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br p-4 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-md space-y-8 text-center">
          <div>
            <h2 className="mt-6 font-bold text-3xl text-gray-900 tracking-tight dark:text-white">
              Echo Demo App
            </h2>
            <p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
              AI-powered chat with built-in billing and user management
            </p>
          </div>

          <div className="space-y-4">
            <SignInButton />

            <div className="text-gray-500 text-xs dark:text-gray-400">
              Secure authentication with built-in AI billing
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold mb-2">Search History</h2>
          <p className="text-sm text-gray-500">Your recent searches</p>
        </div>
        <div className="p-4 flex-1">
          <SearchHistory />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Apartment Hunter</h1>
            <p className="text-gray-600">Find your perfect apartment</p>
          </div>
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
