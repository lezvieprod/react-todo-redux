import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';

export function TodoAddForm(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    props.addNewTodo(data)
    e.target.reset();
  }
 
  return (
    <S.FormLayout onSubmit={handleSubmit(onSubmit)} >
      <S.AddTodoInput name="todoValue" rows={4} ref={register({ required: true })} />
      {errors.todoValue && <S.InputError>This field is required</S.InputError>}
      <S.AddTodoButton type="submit" > Send </S.AddTodoButton>
    </S.FormLayout>
  );
}

const S = {
  FormLayout: styled.form`
    width: 100%;
    overflow: hidden;
  `,
  InputError: styled.div`
    color: red;
    margin: .2rem 0;
  `,
  AddTodoInput: styled.textarea`
    width: 100%;
    min-height: 30px;
    outline: none;
    border: 1px solid #c2c2c2;
    border-radius: 6px;
  `,
  AddTodoButton: styled.button`
    background-color: #5DB075;
    border: 0;
    outline: none;
    padding: 0;
    color:#fff;
    width: 100%;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1rem;
    &:hover {
      background-color: #62b97b;
    }
  `,
}