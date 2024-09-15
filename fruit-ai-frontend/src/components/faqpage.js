import React, { useEffect, useState } from 'react';
import '../styles/faq.css';

function FaqPage() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/faqs')
            .then(response => response.json())
            .then(data => setFaqs(data))
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);

    return (
        <div className="faq-page">
            <h1>FAQ</h1>
            <ul>
                {faqs.map(faq => (
                    <li key={faq.id} className="faq-item">
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FaqPage;

