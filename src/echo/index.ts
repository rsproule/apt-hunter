import Echo from "@merit-systems/echo-next-sdk";

export const { handlers, isSignedIn, openai, anthropic, getUser } = Echo({
	appId: process.env.ECHO_APP_ID || "00000000-0000-4000-8000-000000000000",
});

export async function getUserId(): Promise<string | null> {
	const user = await getUser();
	return user?.id || null;
}
