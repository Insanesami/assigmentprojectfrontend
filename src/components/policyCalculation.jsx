import React, { useState } from 'react';
import axios from '../api/axios';

const PolicyCalculation = () => {
    const [age, setAge] = useState('');
    const [premium, setPremium] = useState('');
    const [policyType, setPolicyType] = useState('term');
    const [result, setResult] = useState('');

    const handleCalculate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/calculate', {
                age: parseInt(age),
                premium: parseFloat(premium),
                policyType,
            });
            setResult(response.data.projectedBenefit);
        } catch (err) {
            alert('Error calculating benefits!');
        }
    };

    return (
        <form onSubmit={handleCalculate}>
            <h2>Policy Calculation</h2>
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Premium"
                value={premium}
                onChange={(e) => setPremium(e.target.value)}
                required
            />
            <select value={policyType} onChange={(e) => setPolicyType(e.target.value)}>
                <option value="term">Term</option>
                <option value="whole">Whole Life</option>
            </select>
            <button type="submit">Calculate</button>
            {result && <p>Projected Benefit: {result}</p>}
        </form>
    );
};

export default PolicyCalculation;
