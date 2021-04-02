import React from 'react'
import styled from 'styled-components'

export function TodoItem({id, value, ...props}) {

  const deleteTodoHandle = () => {
    props.deleteTodo(id)
  }

  return (
    <S.TodoItem>
      <S.TodoItemTitle>
        {value}
      </S.TodoItemTitle>
      <S.TodoItemActions>
        <S.TodoItemButton onClick={deleteTodoHandle}>
          X
        </S.TodoItemButton>
      </S.TodoItemActions>
    </S.TodoItem>
  )
}

const S = {
  TodoItem: styled.div`
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items:center;
    padding: 0 1rem;
    justify-content: space-between;
    &:hover {
      background-color: #e0e0e0;
    }
  `,
  TodoItemTitle: styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 80%;
    text-overflow:ellipsis;
    overflow:hidden;
  `,
  TodoItemActions: styled.div`
    
  `,
  TodoItemButton: styled.button`
    background-color: red;
    color: #fff;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    outline: none;
    border: 0;
    cursor: pointer;
  `,
}