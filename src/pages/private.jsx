import { signOut } from "firebase/auth";

export const Private = () =>{
    const handleSignOut = () => {
        signOut(auth).then(() => console.log("Sign Out")).catch((error) => console.log(error))
    }
    return (
        <section>
            <h2>Private</h2>
            <button onClick={handleSignOut}>Sign out</button>
        </section>
    )
}