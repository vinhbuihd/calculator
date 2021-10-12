import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
    const [input, setInput] = useState('0');
    const [prevState, setPrevState] = useState("");
    const [operator, setOperator] = useState(null);
    const [curState, setCurState] = useState("");
    const [total, setTotal] = useState(false);
    

    // nhập số: - nếu chưa có gì (!curState) -> e.target.innerText -> ok
            //  - nếu có curState -> pre + e.target.innerText      -> ok
            //  - nếu nhập sau dấu . mà nhập tiếp dấu . -> fail    -> ok
            //  - nếu nhập số sau phép toán tử 
            // -> tính phép tính đó(prevState + curState) -> lưu vào prevState 

    // nhập toán tử: - chưa có gì(!curState) -> fail
                    // chưa có prevState - nếu nhập sau số -> lưu số vào prevState 
                    // có phép toán trước đó(đã có prevState) -> lưu kết quả vào prevState

    const inputNum = e => {
        e.persist()
        if (curState.includes('.') && e.target.innerText === '.') return;
        if (total) {
            setPrevState('')
        }
        curState 
            ? setCurState(pre => (pre === '0' && e.target.innerText !== '.') ? e.target.innerText : pre + e.target.innerText)
            : setCurState(e.target.innerText === '.' ? '0' + e.target.innerText : e.target.innerText)
        setTotal(false);
    }

    useEffect(() => {
        setInput(curState)
    }, [curState])

    useEffect(() => {
        setInput('0')
    }, [])
                    
    const operatorType = (e) => {
        
        if (curState === '' && prevState === '') return;
        setOperator(e.target.innerText);
        if (prevState !== '') {
            equals()
        } else {
            setPrevState(curState);
            setCurState('')
        }
        setTotal(false)
    }

    const equals = () => {
        if (curState === '' || prevState === '') return; 
        setTotal(true);
        let cal;
        switch (operator) {
            case '+':
                cal = Math.round((parseFloat(prevState) + parseFloat(curState)) * 1000000) / 1000000
                break;
            case '-':
                cal = parseFloat(prevState) - parseFloat(curState)
                break;
            case '×':
                cal = parseFloat(prevState) * parseFloat(curState)
                break;
            case '÷':
                cal = parseFloat(prevState) / parseFloat(curState)
                
                break;
            default:
                break;
        }

        setPrevState(cal);
        setCurState('');
    }
    
    const clear = () => {
        setCurState('0');
        setPrevState('')
    }
    
    const minusPlus = () => {
        if (curState === '' && prevState === '') return;
        if (curState === '' && prevState !== '') {
            setPrevState(parseFloat(prevState) * (-1))
        }
        if (curState !== '') {
            setCurState((parseFloat(curState) * -1).toString());
        }
        
    }
    
    const percent = () => {
        if (curState === '' && prevState === '') return;
        if (curState === '' && prevState !== '') {
            setPrevState(parseFloat(prevState) / 100)
        }
        if (curState) {
            setCurState((parseFloat(curState) / 100).toString());
        }
    }

    

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='screen'>
                    {(input ) ? input : prevState}
                </div>
                <div onClick={clear} className='btn gray'>AC</div>
                <div onClick={minusPlus} className='btn gray'>+/-</div>
                <div onClick={percent} className='btn gray'>%</div>
                <button onClick={operatorType} className='btn operator'>÷</button>
                <div onClick={inputNum} className='btn number'>7</div>
                <div onClick={inputNum} className='btn number'>8</div>
                <div onClick={inputNum} className='btn number'>9</div>
                <button onClick={operatorType} className='btn operator'>×</button>
                <div onClick={inputNum} className='btn number'>4</div>
                <div onClick={inputNum} className='btn number'>5</div>
                <div onClick={inputNum} className='btn number'>6</div>
                <button onClick={operatorType} className='btn operator'>-</button>
                <div onClick={inputNum} className='btn number'>1</div>
                <div onClick={inputNum} className='btn number'>2</div>
                <div onClick={inputNum} className='btn number'>3</div>
                <button onClick={operatorType} className='btn operator'>+</button>
                <div onClick={inputNum} className='btn number zero'>0</div>
                <div onClick={inputNum} className='btn number'>.</div>
                <div onClick={equals} className='btn orange'>=</div>
            </div>
        </div>
    );
}

export default App;