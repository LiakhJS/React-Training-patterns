function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Здравствуйте!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            У вас {unreadMessages.length} непрочитанных сообщений.
          </h2>
        }
      </div>
    );
  }
  
const messages = ['React', 'Re: React', 'Re:Re: React'];
export {messages};
export default Mailbox;

// Приведённый выше вариант работает корректно, потому что в JavaScript-выражение true && expression всегда вычисляется как expression, а выражение false && expression — как false.
// То есть, если условие истинно (true), то элемент, идущий непосредственно за &&, будет передан на вывод. Если же оно ложно (false), то React проигнорирует и пропустит его.
// Обратите внимание, что ложное выражение, как ожидается, пропустит элемент после &&, но при этом выведет результат этого выражения. 