import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../../library/auth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [error, setError] = useState<Error | null>(null); // Creates an error state for controlled error handling.

    useEffect(() => {
        checkAuth()
            .then(() => setIsAuthChecked(true))
            .catch((err) => {
                console.error(err);
                setError(err); //Store the error in the state
            });
    }, []);


    //For UI error handling
    if (error) {
        return (
            <div className="auth-error">
                <h2>Authentication Error</h2>
                <p>Failed to Verify You. Please Try Again.</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        )
    }

    if (!isAuthChecked) return <div>Loading...</div>;
    return<>{ children }</>;
}