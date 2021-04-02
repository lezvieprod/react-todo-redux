import { connect } from 'react-redux';
import styled from 'styled-components';
import { TodoItem } from './components/TodoItem'
import { TodoAddForm } from './components/TodoAddForm'
import { addNewTodo, deleteTodo } from './redux/rootReducer'

function App({ todos, ...props }) {

  const addNewTodo = (data) => {
    props.addNewTodo(data.todoValue)
  }
  const deleteTodo = (todoId) => {
    props.deleteTodo(todoId)
  }

  return (
    <S.TodoLayout>
      <S.TodoBody>
        <S.TodoTitle>
          Todo List ({todos.length})
        </S.TodoTitle>
        <S.TodoContainer>
          {
            todos && todos.map((todo, idx) =>
              <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} />
            )
          }
        </S.TodoContainer>
        <S.AddTodoContainer>
          <div style={{ margin: '1rem 0' }}>Create new todo</div>
          <TodoAddForm addNewTodo={addNewTodo} />
        </S.AddTodoContainer>
      </S.TodoBody>
    </S.TodoLayout>
  );
}

const S = {
  TodoLayout: styled.div`
    width: 100%;
    min-height:100vh;
    background-color: #d7fff1;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  TodoBody: styled.div`
    background-color: #fff;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 0 4px 10px rgba(0,0,0, 0.08);
    overflow: hidden;
  `,
  TodoTitle: styled.div`
    padding: 1rem;
  `,
  TodoContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  AddTodoContainer: styled.div`
    margin: 1rem 0;
    padding: 0 1rem;
  `,
}

const mapStateToProps = (state) => ({
  todos: state.reducer.todos
})

export default connect(mapStateToProps, { addNewTodo, deleteTodo })(App)
