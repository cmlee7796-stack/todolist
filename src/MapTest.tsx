import React from 'react';

const MapTest : React.FC = () => {
    const fruits = ['사과', '바나나', '오렌지'];
    return(
        <div>
            <h1>과일</h1>
            <p></p>
            <div className="container">
                <div className='board'>
                    <ul>
                        {fruits.map((f, index) => (
                            <li key={index}>{f}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default MapTest;