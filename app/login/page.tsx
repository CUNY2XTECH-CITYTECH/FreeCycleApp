'use client'
import Login_form from "../components/login-form/login-form"
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'
import { use, useEffect } from "react";
import { redirectIfAuthenticated } from "../library/auth";
import { useRouter } from "next/router";

SuperTokens.init({
    appInfo: {
        apiDomain: "http://localhost:8080",
        apiBasePath: "/auth",
        appName: "...",
    },
    recipeList: [
        Session.init(),
        EmailPassword.init(),
    ],
});

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        redirectIfAuthenticated(router);
    }, []);
    
    return (
        <div>
            <Login_form />
        </div>
    )
}