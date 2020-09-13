import React from "react";
import { useForm } from "react-hook-form";
import { typeWhat } from "./rootSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const What = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const what = useSelector((state) => state.what);
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    defaultValues: { what },
  });

  const onSubmit = (data) => {
    dispatch(typeWhat(data.what));
    history.push("./when");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="what" style={{ display: "block" }}>
          What?
        </label>
        <input
          id="what"
          autoComplete="off"
          name="what"
          className="form-control"
          style={{ width: "20rem" }}
          ref={register({ required: "Field is required" })}
        ></input>
        {errors.what?.message}
      </div>
      <button className="btn btn-warning mt-2">Next</button>
    </form>
  );
};

export default What;
