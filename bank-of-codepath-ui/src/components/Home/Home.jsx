import * as React from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import BankActivity from "../BankActivity/BankActivity";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home({
    transactions,
    setTransactions,
    transfers,
    setTransfers,
    error,
    setError,
    isLoading,
    setIsLoading,
    filterInputValue,
    newTransactionForm,
    setNewTransactionForm,
    isCreating,
    setIsCreating,
}) {
    const handleOnSubmitNewTransaction = (e) => {
        console.log(e);
    };

    let filteredTransactions;

    if (filterInputValue) {
        filteredTransactions = transactions.filter((e) =>
            e.description.toLowerCase().includes(filterInputValue.toLowerCase())
        );
    } else {
        filteredTransactions = transactions;
    }

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("http://localhost:3001/bank/transfers")
            .then(({ data }) => {
                setTransfers(data.transfers);
            })
            .catch((error) => {
                setError(error);
            });
        axios
            .get("http://localhost:3001/bank/transactions")
            .then(({ data }) => {
                setTransactions(data.transactions);
            })
            .catch((error) => {
                setError(error);
            });
        setIsLoading(false);
    }, []);

    return (
        <div className="home">
            <AddTransaction
                /*
                handle on formfield change
                handle on submit
                form
                iscreating
                */ 

                isCreating={isCreating}
                setIsCreating={setIsCreating}
                form={newTransactionForm}
                setForm={setNewTransactionForm}
                handleOnSubmit={handleOnSubmitNewTransaction}
                handleOnCreate={handleOnSubmitNewTransaction}
            />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <BankActivity transactions={filteredTransactions} />
            )}
            {error ? <h2 className="error">{error}</h2> : <></>}
        </div>
    );
}
