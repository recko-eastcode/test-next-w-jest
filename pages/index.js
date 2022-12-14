import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [isShown, setIsShown] = useState(false);
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
    setNum1('');
    setNum2('');
    setIsShown(true);
  };
  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
    setNum1('');
    setNum2('');
    setIsShown(true);
  };
  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
    setNum1('');
    setNum2('');
    setIsShown(true);
  };
  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
    setNum1('');
    setNum2('');
    setIsShown(true);
  };

  const reset = () => {
    setResult('');
  };

  const handleClick = (event) => {
    setIsShown(true);
    reset();
    setIsShown(false);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className={styles.result} data-testid='result'>
          {result}
        </div>
        <input
          type='number'
          className={styles.input}
          data-testid='num1'
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder='0'
        />
        <input
          type='number'
          className={styles.input}
          data-testid='num2'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder='0'
        />
        <button onClick={add} className={styles.button} data-testid='add'>
          Add
        </button>
        <button
          onClick={subtract}
          className={styles.button}
          data-testid='subtract'
        >
          Subtract
        </button>
        <button
          onClick={multiply}
          className={styles.button}
          data-testid='multiply'
        >
          Multiply
        </button>
        <button onClick={divide} className={styles.button} data-testid='divide'>
          Divide
        </button>

        {isShown && (
          <button
            onClick={handleClick}
            className={styles.buttonReset}
            data-testid='reset'
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
