import React, { useEffect, useState } from "react";
import { makeRequest } from "../shared/utilities/httpHelper";

export default function BranchAdd({
  toggleLoading,
  onAddBranch,
  selectedBranch,
}) {
  console.log("BranchAdd ");

  const initialValue = { name: "", longitude: "", latitude: "" };
  const [formValues, setFormValues] = useState(initialValue);

  useEffect(() => {
    if (selectedBranch) {
      setFormValues({
        name: selectedBranch.name,
        longitude: selectedBranch.location.longitude,
        latitude: selectedBranch.location.latitude,
      });
    }
  }, [selectedBranch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    selectedBranch ? update() : add();
  };

  const add = () => {
    toggleLoading(true);
    const url = "branch";
		const data ={
			name: formValues.name,
			location: {
				latitude: formValues.latitude,
				longitude: formValues.longitude
			}
		}
    const option = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    makeRequest(url, option)
      .then((res) => {
        onAddBranch(formValues);
        setFormValues(initialValue);
      })
      .finally(() => toggleLoading(false));
  };

  const update = () => {
    toggleLoading(true);
    const url = `branch/${selectedBranch._id}`;
		const data ={
			name: formValues.name,
			location: {
				latitude: formValues.latitude,
				longitude: formValues.longitude
			}
		}
    const option = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    makeRequest(url, option)
      .then((res) => {
        onAddBranch(formValues);
        setFormValues(initialValue);
      })
      .finally(() => toggleLoading(false));
  };

  return (
    <form className="forms-sample" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">longitude</label>
        <input
          name="longitude"
          type="number"
          className="form-control"
          id="longitude"
          placeholder="longitude"
          value={formValues.longitude}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">latitude</label>
        <input
          name="latitude"
          type="number"
          className="form-control"
          id="name"
          placeholder="latitude"
          value={formValues.latitude}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-gradient-primary me-2">
        Save
      </button>
      <button className="btn btn-light">Cancel</button>
    </form>
  );
}
