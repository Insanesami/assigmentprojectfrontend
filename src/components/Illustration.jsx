import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Illustration = () => {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        const fetchPolicies = async () => {
            try {
                const response = await axios.get('/policies');
                setPolicies(response.data);
            } catch (err) {
                alert('Error fetching policies!');
            }
        };
        fetchPolicies();
    }, []);

    return (
        <div>
            <h2>Policy Illustration</h2>
            <table>
                <thead>
                    <tr>
                        <th>Policy ID</th>
                        <th>Policy Type</th>
                        <th>Premium</th>
                        <th>Riders</th>
                    </tr>
                </thead>
                <tbody>
                    {policies.map((policy) => (
                        <tr key={policy.policy_id}>
                            <td>{policy.policy_id}</td>
                            <td>{policy.policy_type}</td>
                            <td>{policy.premium}</td>
                            <td>{policy.riders}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Illustration;
