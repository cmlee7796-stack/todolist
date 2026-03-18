import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

const Todolist : React.FC = () => {
    const title = "오늘 할일";
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: '잠자기', isChecked: false },
        { id: 2, text: '공부하기', isChecked: false },
        { id: 3, text: '운동하기', isChecked: false }
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCheckedChange = (itemId: number) => {
        const prevItems = todos.map((todo) =>
            todo.id === itemId ? { ...todo, isChecked: !todo.isChecked } : todo
        );
        setTodos(prevItems);
    }

    const addTodo = () => {
        if (newTodo.trim() !== '') {
           setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
           setNewTodo('');
        }
    };

    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div>
                    <input type="text" placeholder='할 일을 입력하세요' 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={{marginRight: '10px', writingMode: 'horizontal-tb'}}
                    />
                    <Button variant='warning' onClick={()=>{addTodo();}}>추가</Button>
                </div>
                <p></p>
                <div className='board'>
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    checked={todo.isChecked}
                                    onChange={() => handleCheckedChange(todo.id)}
                                />
                                <span>
                                    {
                                    todo.isChecked ? 
                                    <del>{todo.text}</del> : todo.text
                                    }</span>
                                    <button className="delbutton" onClick={() => {
                                        setTodos(todos.filter((t) => t.id !== todo.id));
                                    }}>삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}   
export default Todolist;