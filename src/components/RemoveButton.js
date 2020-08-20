import React from 'react';
import { useMutation } from 'react-relay/hooks';
import { removeTodoMutation } from '../mutations/removeTodo';

const RemoveButton = ({ id }) => {
  const [removeTodo, isPending] = useMutation(removeTodoMutation);
  const handleClick = () => {
    removeTodo({
      variables: {
        TodoID: {
          id: id,
        },
      },
      onCompleted: data => {
        console.log(data)
        console.log(id)
      },
      onError: (err) => console.log(err),
    });
  };
  return (
    <button className="delete" onClick={handleClick}>
      x
    </button>
  );
};

export default RemoveButton;
