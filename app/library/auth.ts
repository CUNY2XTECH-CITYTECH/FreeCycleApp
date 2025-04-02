import Session from 'supertokens-auth-react/recipe/session';
import { redirectToAuth } from 'supertokens-auth-react';
import { NextRouter } from 'next/router';

export async function checkAuth(router?: NextRouter) {
    if (typeof window === 'undefined') return true // This will skip during server-side rendering

    const hasSession = await Session.doesSessionExist();

    // If there is no session, redirect to the auth page
    if (!hasSession) {
        redirectToAuth({ redirectBack: false}); //redirectBack: false prevents returning to original page after login and Redirects to SuperTokens pre-built auth page (/auth)
        return false;
    }
    return true; // This will be true if the session exists and allows the protected route to render
}

// This function is used to redirect the user to the home page if they are already authenticated
export async function redirectIfAuthenticated(router: NextRouter) {
    if (await Session.doesSessionExist()) {
        await router.push('/home') //I am not sure if this is the correct route (Change it to the correct one if needed)
    }
}