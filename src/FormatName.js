

function FormatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Masha',
    lastName: 'Maximovna',
    userAvatar: 'https://www.reactjs.org'
};

const linkToGo = <a href={user.userAvatar} > link </a>;
function GoReact() {
    return  (<p> 
    Hello, Go to {linkToGo}!
        </p>);
}

function GetGreeting() {
    return  (<h1> 
    Hello, {FormatName(user)}! 
    <span>{GoReact()}</span>
        </h1>);
}

export default GetGreeting; 