import { useState } from "react";
export default function ExpenseList() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionValue, setTransactionValue] = useState([]);

  const addTransaction = () => {
    if(text.trim()!=="" &&amount.trim()!=="")
    {
    setTransactionValue([...transactionValue, { text, amount }]);
    setAmount("");
    setText("");}
  };
  const deleteAmount = (index) => {
    const updatedTasks = [...transactionValue];
    updatedTasks.splice(index, 1);
    setTransactionValue(updatedTasks);

  };
  const incomeResult=transactionValue.map((data)=> data.amount);
  let result = incomeResult.map(i=>Number(i));
  
  const incomeValue = result.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expenseValue = result.filter(item => item < 0)
  .reduce((incomeValue, a) => incomeValue - a, 0).toFixed(2);

  // const data=transactionValue.map((data)=>data);
  const txt=transactionValue.map((txt)=> txt.text);

  const editAmount=(amt,text)=>
  {
    if(text==txt)
   {
    setText(text)
    setAmount(amt)
   
   }
  }
  
 
  
  return (
    <section >
      
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16  lg:px-8 lg:py-24 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md b  " >
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-1xl ">
               New Transaction
            </h2>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Text{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-80 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Enter Text"
                      id="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="Amount"
                      className="text-base font-medium text-black-900"
                    >
                      {" "}
                      Amount{""}
                      <br />
                    </label>
                  </div>
                  <p className="flex text-slate-600 ">
                    (negative-expense,positive-income)
                  </p>

                  <div className="mt-2 ">
                    <input
                      className="flex h-10 w-80 rounded-md  border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Amount"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="h-10 w-80 rounded-md  border text-white flex justify-center font-bold bg-green-600 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={addTransaction}
                  >
                    Add Transaction{" "}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg> */}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
 
        <div className="">
          <h1 className=" text-3xl font-bold  ">EXPENSE TRACKER</h1>
          <h2 className="flex pl-20 pt-20">YOUR BALANCE</h2>
          <span className=" flex ml-20 text-4xl font-bold">₹{incomeValue-expenseValue}</span>
          <div className="w-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-20  ml-20 mt-5 ">
            <div className="pt-4 w-96 flex justify-center space-x-40  border-spacing-x-1 h-70 ">
              <div>
                <h1 className=" font-bold ">INCOME</h1>
                <span className=" font-bold text-lime-600	 text-xl">+₹ {
             incomeValue }</span>
              </div>

              <div className="">
                <h1 className=" font-bold ">EXPENSES</h1>
                <span className=" font-bold text-red-600 text-xl">-₹{expenseValue} </span>
              </div>
            </div>
          </div>

          <div className="mr-20">
            <h1 className="flex ml-20 mt-10   justify-start border-b-4 text-lg	">
              Transaction
            </h1>
            <div className="ml-20">
              <ul>
                {transactionValue.map((data, index) => {
                  return (
                    <div key={index} >
                    
                      <li className="flex mt-6 " >
                        {" "}
                        {data.text}{" "}
                        <span className="pl-60 font-bold text-lg">
                          {" "}
                          {data.amount}
                        </span>
                        <br />
                        <div style={{width:"400px"}}className="flex justify-end">
                        {/* <button onClick={()=>editAmount(data.amount,data.text)} className="rounded-md bg-black ml-20 px-3 py-2  text-white " >
                         EDIT
                        </button> */}
                        <button onClick={()=>deleteAmount(index)} className="rounded-md bg-black ml-20 px-3 py-2  text-white">
                          DELETE
                        </button>
                       
                        </div>
                      </li>
                      <hr  />
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}