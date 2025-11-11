import Echo from '@merit-systems/echo-next-sdk';

export const { handlers, isSignedIn, openai, anthropic, getUser } = Echo({
  appId: process.env.ECHO_APP_ID!,
});

export async function getUserId(): Promise<string | null> {
  const user = await getUser();
  return user?.id || null;
}
