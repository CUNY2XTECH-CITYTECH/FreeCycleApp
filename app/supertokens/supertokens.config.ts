import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: "https://try.supertokens.io",
        // apiKey: <api key here>
    },
    appInfo: {
        appName: "FreeCycleApp",
        apiDomain: "<YOUR_API_DOMAIN>",
        websiteDomain: "<YOUR_WEBSITE_DOMAIN>",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(), // initializes sign-in/sign-up features
        Session.init() // initializes session features
    ]
});
