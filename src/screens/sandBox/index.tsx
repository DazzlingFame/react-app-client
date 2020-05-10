import React, {ChangeEvent} from "react";
import './sandBoxStyles.css'
import {Button} from "../../components/button";
import {getRandomInt} from "../../utils/global";
import {getTodos, setTodos} from "../../utils/api";
import {Loader} from "../../components/loader";

export type TodoType = {
    id: number;
    text: string;
    checked: boolean;
}

type PropsType = {

}

type StateType = {
    isLoading: boolean
    todoData: Array<TodoType>
}

export class SandBox extends React.Component<PropsType, StateType> {
    timeout: ReturnType<typeof setTimeout> | undefined;

    constructor(props: PropsType) {
        super(props);

        this.state = {
            todoData: [],
            isLoading: false,
        }
    }

    componentDidMount(): void {
        this.setState({
            isLoading: true,
        });
        getTodos().then((response) => {
            this.setState({
                todoData: response,
                isLoading: false,
            })
        })
    }

    async componentWillUnmount(): Promise<void> {
        const {todoData} = this.state;
        const undone: Array<TodoType> = [];
        todoData.forEach(item => {
            !item.checked && undone.push(item);
        });
        await setTodos({todosArray: undone});
    }

    onCheckBoxClick = (id: number) => {
        const todosArray = this.state.todoData;
        const currentIndex = todosArray.findIndex((element) => {
            return element.id === id;
        });
        todosArray[currentIndex].checked = !todosArray[currentIndex].checked;
        this.setState({
            todoData: [...todosArray],
        });
        todosArray && setTodos({todosArray: todosArray});
    };

    onTextChanged = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        const todosArray = this.state.todoData;
        const currentIndex = todosArray.findIndex((element) => {
            return element.id === id;
        });
        todosArray[currentIndex].text = event.target.value;
        this.setState({
            todoData: [...todosArray],
        });
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            todosArray && setTodos({todosArray: todosArray});
        }, 500)
    };

    makeCheckBox = (item: TodoType) => {
      return (
          <div className={'todoContainer'}>
              <input className={'checkBox'} type={'checkbox'} checked={item.checked} onClick={() => this.onCheckBoxClick(item.id)} />
              <input className={'todoInput'} type={'text'} value={item.text} onChange={(event) => this.onTextChanged(event, item.id)}/>
          </div>
      )
    };

    addEmptyTodo = () => {
        this.setState({
            todoData: [...this.state.todoData, {id: getRandomInt(1000), text: '', checked: false}]
        })
    };

    render() {
        const {isLoading} = this.state;
        const todos = this.state.todoData.map(item => this.makeCheckBox(item));
        return (
            <div className={'topContainer'}>
                <p className={'headerText'}>CheckList</p>
                {isLoading && <Loader/>}
                {!!todos.length && !isLoading &&
                <div className={'todosContainer'}>
                    {todos}
                </div>
                }
                <div className={'buttonsContainer'}>
                    <Button text={'Add Todo'} onClick={this.addEmptyTodo}/>
                </div>
            </div>
        );
    }
}