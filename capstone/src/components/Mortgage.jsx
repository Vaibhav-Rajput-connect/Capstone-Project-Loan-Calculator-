import React, { useState } from 'react';

const Mortgage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const monthlyInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (principal && monthlyInterest && numberOfPayments) {
      const payment = 
        (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
        (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
      setMonthlyPayment(payment.toFixed(2));
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div className='' id='Mortgage Calculator'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Mortgage <span className='font-light underline underline-offset-4 under decoration-1 '>Calculator</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Quickly calculate your home loan details and make informed decisions with our intuitive mortgage tool.</p>

        <form onSubmit={calculateMortgage} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Loan Amount (₹):</label>
            <input 
              type="number" 
              value={loanAmount} 
              onChange={(e) => setLoanAmount(e.target.value)} 
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Interest Rate (%):</label>
            <input 
              type="number" 
              step="0.01" 
              value={interestRate} 
              onChange={(e) => setInterestRate(e.target.value)} 
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Loan Term (Years):</label>
            <input 
              type="number" 
              value={loanTerm} 
              onChange={(e) => setLoanTerm(e.target.value)} 
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Calculate
          </button>
          {monthlyPayment && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">Monthly Payment: ₹{monthlyPayment}</h2>
          </div>
        )}
        </form>
    </div>
  );
};

export default Mortgage;