import './App.css';
import QuoteBox from './components/QuoteBox';
import {React, useState, useEffect} from 'react';
import axios from "axios";


function App() {
  const [index, setIndex] = useState(0);
  const options = {
    method: 'GET',
    url: 'http://py-quoters.herokuapp.com/',
    params: {},
    // headers: {'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com'}
    headers:{}
  };

  const [quote, setQuote] = useState('Quotes! Click Me!');

  const apicall = () => {
    if(index>=1){
      axios.request(options).then(function (response) {
        //console.log(response.data.quote);
        setQuote(response.data.quote);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }

  // useEffect(() => {
  //   // console.log(quotes[index]);
  //   // setQuote(quotes[(index+1)%3]);
  //   if(index>=1){
  //     axios.request(options).then(function (response) {
  //       //console.log(response.data.quote);
  //       setQuote(response.data.quote);
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  //   }
  // },[index])

  onclick = (e) => {
    e.preventDefault();
    setIndex(index+1);
    apicall();
  }

  return (
    <div className="App">
      {/* {quotes.map((quote) => {
        return(
        <QuoteBox quote={quote} />
        )
      })} */}
      <QuoteBox onAdd={onclick} quote={quote} />
    </div>
  );
}

export default App;
