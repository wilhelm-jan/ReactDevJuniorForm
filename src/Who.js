import React from "react";
import { useForm } from "react-hook-form";
import { typeWho } from "./rootSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Who = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const who = useSelector((state) => state.who);
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    defaultValues: { who },
  });

  const onSubmit = (data) => {
    dispatch(typeWho(data.who));
    history.push("./what");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="who" style={{ display: "block" }}>
          Who?
        </label>
        <input
          id="who"
          autoComplete="off"
          name="who"
          className="form-control"
          style={{ width: "20rem" }}
          ref={register({ required: "Who field is required" })}
        ></input>
        {errors.who?.message}
      </div>
      <button className="btn btn-primary mt-2">Next</button>
    </form>
  );
};

export default Who;
