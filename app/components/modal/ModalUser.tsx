"use client";
import React from "react";
declare global {
  interface Window {
    modalUser: {
      showModal: () => void;
    };
  }
}
export default function ModalUser() {
  const addUser = () => {};
  return (
    <div>
      <button className="btn" onClick={() => window.modalUser.showModal()}>
        Add User
      </button>
      <dialog id="modalUser" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Add User</h3>
          <form onSubmit={addUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                placeholder="bio"
                name="bio"
                className="textarea textarea-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                name="age"
                placeholder="age"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="image"
                name="image"
                className="input input-bordered"
              />
            </div>
          </form>
          <div className="modal-action">
            <button className="btn" type="submit">
              Add user
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
