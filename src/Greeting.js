function UserGreeting(props) {
    return <div>Hello User</div>;
}
function GuestGreeting(props) {
    return <div>Hello Guest!</div>;
}

function Greeting(props) {
//const isLoggedIn - props.isLoggedIn ; <Greeting isLoggedIn={false} />
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}
export default Greeting;