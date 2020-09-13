import React from "react";
import { useForm } from "react-hook-form";
import { typeWhere } from "./rootSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Where = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const where = useSelector((state) => state.where);
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    defaultValues: { where },
  });

  const onSubmit = (data) => {
    dispatch(typeWhere(data.where));
    history.push("./output");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="where" style={{ display: "block" }}>
          Where?
        </label>
        <input
          id="where"
          autoComplete="off"
          name="where"
          className="form-control"
          style={{ width: "20rem" }}
          ref={register({ required: "Field is required" })}
        ></input>
        {errors.where?.message}
      </div>
      <button className="btn btn-success mt-2">Next</button>
    </form>
  );
};

export default Where;
