import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Form = () => {
      const [form, setForm] = useState({
            username: "",
            email: "",
            password: "",
            age: 0,
            isIndian: false,
      });
      const ref = useRef();
      const passRef = useRef();
      const onChange = (e) => {
            let { checked, type, name, value, files } = e.target;
            console.log(e);
            console.log(name, value);
            if (type === "checkbox") {
                  setForm({
                        ...form,
                        [name]: checked,
                  });
            } else if (type === "file") {
                  setForm({
                        ...form,
                        [name]: files,
                  });
            } else {
                  setForm({
                        ...form,
                        [name]: value,
                  });
            }
      };
      useEffect(() => {
            console.log(form);
      }, [form]);
      const onChangeSubmit = (e) => {
            e.preventDefault();
            console.log(form);
            if (!form.username) ref.current.focus();
            else if (!form.password) ref.current.focus();
      };

      return (
            <div>
                  <h1>form</h1>
                  <form onSubmit={onChangeSubmit}>
                        <div>
                              <div>
                                    <label>Name:</label>
                                    <input
                                          ref={ref}
                                          type="text"
                                          name="username"
                                          placeholder="Name"
                                          value={form.username}
                                          onChange={onChange}
                                    />
                              </div>
                              <div>
                                    <label>Email:</label>
                                    <input
                                          placeholder="Email..."
                                          type="text"
                                          name="email"
                                          value={form.email}
                                          onChange={onChange}
                                    />
                              </div>
                              <div>
                                    <label>Password:</label>
                                    <input
                                          ref={passRef}
                                          placeholder="Password......."
                                          type="password"
                                          name="password"
                                          value={form.password}
                                          onChange={onChange}
                                    />
                              </div>
                              <div>
                                    <label>Age:</label>
                                    <input
                                          placeholder="Age"
                                          type="Number"
                                          name="age"
                                          value={form.age}
                                          onChange={onChange}
                                    />
                              </div>
                              <div>
                                    <input
                                          type="checkbox"
                                          name="isIndian"
                                          checked={form.isIndian}
                                          onChange={onChange}
                                    />
                                    <label htmlFor="">Is Indian</label>
                              </div>
                              <div>
                                    <label htmlFor="">Gender</label>
                                    <select
                                          name="selectGender"
                                          value={form.selectGender}
                                          onChange={onChange}
                                          id=""
                                    >
                                          <option value=""></option>
                                          <option value="male">Male</option>
                                          <option value="female">Female</option>
                                    </select>
                              </div>
                              <div>
                                    <label htmlFor="">User Resume:</label>
                                    <input
                                          type="file"
                                          name="resume"
                                          files={form.resume}
                                          onChange={onChange}
                                    />
                              </div>
                        </div>
                        <button type="submit">submit</button>
                  </form>
            </div>
      );
};

export default Form;
