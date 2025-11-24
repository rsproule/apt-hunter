import Link from "next/link";
import SearchHistory from "@/app/_components/SearchHistory";
import { Button } from "@/components/ui/button";

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
			{/* Sidebar */}
			<aside className="w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto flex flex-col">
				<div className="p-4 border-b border-gray-200 dark:border-gray-800">
					<h2 className="text-lg font-semibold mb-3">Search History</h2>
					<Link href="/">
						<Button className="w-full">+ New Search</Button>
					</Link>
				</div>
				<div className="p-4 flex-1">
					<SearchHistory />
				</div>
			</aside>

			{/* Main Content */}
			<main className="flex-1 overflow-y-auto">{children}</main>
		</div>
	);
}
