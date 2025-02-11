export default function Signup_form(){
    return (
    <div>
        <h1>Signup</h1>
        <form >
            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input> <br></br>

            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input> <br></br>

            <input type="submit" value="Submit"></input>
        </form>
    </div>
    )
}

