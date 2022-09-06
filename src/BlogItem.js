function SideBarKeyUl(props) {
    const sidebar = props.posts.map((post) =>
        <div>
            <h1> {post.title}</h1>
            <h2>{post.content}</h2>
        </div>
    );
    const content = (
        // у каждого элемента массива должен быть ключ (key). 
        // «Ключ» — это специальный строковый атрибут, 
        // который нужно указывать при создании списка элементов. 
        // Например, если вы извлекаете компонент ListItem, то нужно указывать ключ для <ListItem /> в массиве, а не в элементе <li> внутри самого ListItem.
        // Как правило, элементам внутри map() нужны ключи.
        // Ключи внутри массива должны быть уникальными только среди своих соседних элементов. Им не нужно быть уникальными глобально. Можно использовать один и тот же ключ в двух разных массивах.
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.id}
                </li>)}
        </ul>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [{
    id: 1,
    title: 'Привет, мир',
    content: 'Добро пожаловать в документацию React!'
},
{
    id: 2,
    title: 'Установка',
    content: 'React можно установить из npm.'
}
];

export default SideBarKeyUl;
export { posts };