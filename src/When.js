import React from "react";
import { useForm } from "react-hook-form";
import { typeWhen } from "./rootSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const When = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const when = useSelector((state) => state.when);
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    defaultValues: { when },
  });

  const onSubmit = (data) => {
    dispatch(typeWhen(data.when));
    history.push("./where");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="when" style={{ display: "block" }}>
          When?
        </label>
        <input
          id="when"
          autoComplete="off"
          name="when"
          className="form-control"
          style={{ width: "20rem" }}
          ref={register({ required: "Field is required" })}
        ></input>
        {errors.when?.message}
      </div>
      <button className="btn btn-danger mt-2">Next</button>
    </form>
  );
};

export default When;
