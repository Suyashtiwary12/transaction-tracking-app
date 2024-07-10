// import { useEffect,useState } from "react";


// export function Transactionlist() {
//     const [transaction, setTransaction] = useState([]);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         loader().then((res) => {
//             setTransaction(res);
//             calculateTotal(res);
//         });
//     }, []);

//     async function loader() {
//         const response = await fetch("http://localhost:4000/tranasction");
//         return await response.json();
//     }

//     function calculateTotal(transactions) {
//         const totalAmount = transactions.reduce((acc, curr) => acc + curr.amount, 0);
//         setTotal(totalAmount);
//     }
//     return (
//         <>
//          <h1 className="heading">
//           Rs.{total}
              
//             </h1> 

//             {transaction.map((item)=>(
//                  <div className="container text-center container-2">
//                  <div className="row align-items-start">
//                      <div class="row" key={item._id}>
//                          <div class="col first">
//                              <h3>{item.name}</h3>
//                              <div>
//                                  {item.description}
//                              </div>
//                          </div>
//                          <div class="col second">
//                             <h3 className={(item.amount>0)?`amount-2`:`amount`}>
//                              {item.amount}
//                             </h3>
//                             <div>
//                             {item.date}
//                             </div>
//                          </div>
//                          <hr />
//                      </div>
//                  </div>
//              </div>
//             ))}
           
            
//         </>
//     )
// }

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
