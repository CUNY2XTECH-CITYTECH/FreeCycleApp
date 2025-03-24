"use client"; 
/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn } from "supertokens-web-js/recipe/emailpassword";

async function signInClicked() {

    const formData = new FormData;

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    try {
        const response = await signIn({
            formFields: [{
                id: "email",
                value: email
            }, {
                id: "password",
                value: password
            }]
        })

        if (response.status === "FIELD_ERROR") {
            response.formFields.forEach(formField => {
                if (formField.id === "email") {
                    // Email validation failed (for example incorrect email syntax).
                    window.alert(formField.error)
                }
            })
        } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
            window.alert("Email password combination is incorrect.")
        } else if (response.status === "SIGN_IN_NOT_ALLOWED") {
            // the reason string is a user friendly message
            // about what went wrong. It can also contain a support code which users
            // can tell you so you know why their sign in was not allowed.
            window.alert(response.reason)
        } else {
            // sign in successful. The session tokens are automatically handled by
            // the frontend SDK.
            window.location.href = "/homepage"
        }
    } catch (err: any) {
        if (err.isSuperTokensGeneralError === true) {
            // this may be a custom error message sent from the API by you.
            window.alert(err.message);
        } else {
            window.alert("Oops! Something went wrong.");
        }
    }
}

export default function Login_form(){

    return (
    <div>
        <h1>Login</h1>
        <br></br>
        <form onSubmit={() => signInClicked()}>
            <label htmlFor="email">Email </label> <br></br>
            <input type="email" name="email"></input>
            <br></br> <br></br>
            <label htmlFor="password">Password </label> <br></br>
            <input type="password" name="password"></input> 
            <br></br> <br></br>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    )
}

