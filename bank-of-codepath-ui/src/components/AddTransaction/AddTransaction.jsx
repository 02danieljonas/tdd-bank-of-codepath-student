import * as React from "react";
import "./AddTransaction.css";

export default function AddTransaction({
    isCreating,
    setIsCreating,
    form,
    setForm,
    handleOnSubmit,
}) {
  // setForm({})
    const handleOnFormFieldChange = (change) => {
        console.log(change);
    };
    return (
        <div className="add-transaction">
            <h2>Add Transaction</h2>

            <AddTransactionForm
                handleOnSubmit={handleOnFormFieldChange}
                isCreating={isCreating}
                form={form}
            />
        </div>
    );
}

export function AddTransactionForm({ handleOnSubmit, isCreating, form }) {
    return (
        <div className="form">
            <div className="fields">
                <div className="field">
                    <label>Description</label>
                    <input />
                </div>
                <div className="field">
                    <label>Category</label>
                    <input />
                </div>
                <div className="field half-flex">
                    <label>Amount (cents)</label>
                    <input />
                </div>

                <button
                    className="btn add-transaction"
                    type="submit"
                    onClick={handleOnSubmit}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
