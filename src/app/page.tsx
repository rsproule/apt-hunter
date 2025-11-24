import SignInButton from "@/app/_components/echo/sign-in-button";
import { isSignedIn } from "@/echo";
import HomePage from "./HomePage";

export default async function Page() {
	const signedIn = await isSignedIn();

	if (!signedIn) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
				<div className="w-full max-w-md space-y-8 text-center">
					<div>
						<h2 className="mt-6 font-bold text-4xl text-gray-900 tracking-tight dark:text-white">
							Hunter Agent
						</h2>
						<p className="mt-2 text-gray-600 text-base dark:text-gray-400">
							AI-powered real estate search with smart photo analysis
						</p>
					</div>

					<div className="space-y-4">
						<SignInButton />

						<div className="text-gray-500 text-xs dark:text-gray-400">
							Sign in to start finding your perfect real estate listing
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <HomePage />;
}
