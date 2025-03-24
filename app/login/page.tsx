'use client'
import Login_form from "../components/login-form/login-form"
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'

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
    return (
        <div>
            <Login_form />
        </div>
    )
}