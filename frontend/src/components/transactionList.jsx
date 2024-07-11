import React from "react";

export function Transactionlist({ transactions }) {
    return (
        <>
            {transactions.map((item) => (
                <div className="container text-center container-2" key={item._id}>
                    <div className="row align-items-start">
                        <div className="row">
                            <div className="col first">
                                <h3>{item.name}</h3>
                                <div>
                                    {item.description}
                                </div>
                            </div>
                            <div className="col second">
                                <h3 className={item.amount > 0 ? `amount-2` : `amount`}>
                                    {item.amount}
                                </h3>
                                <div>
                                    {item.date}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
