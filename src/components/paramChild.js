import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTweets } from '../api/tweets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Child from './child';
import '../App.css';
import Loading from './loading';

function ParamChild() {
    const { id } = useParams();
    const [tweets, setTweets] = useState([]);
    const intervalReachingTweets = 30000;

    useEffect(() => {
        setTimeout(() => {
            reachTweets();
        }, 2000);
        intervalTweets();
    }, []);

    const intervalTweets = () => {
        return setInterval(function () {
            const resReach = reachTweets();
        }, intervalReachingTweets);
    }

    const reachTweets = () => {
        Promise.resolve(fetchTweets(id)).then((fetchedTweets) => {
            console.log(fetchedTweets);
            if (fetchedTweets.message === 'KO') {
                console.log('KO fetching tweets: ', { fetchedTweets });
                displayError();
                return;
            }

            buildTweets(fetchedTweets.message);
        }).catch(() => {
            // stop interval
        })
    };

    const displayError = () => {
        console.trace();
        toast.error('Error while fetching tweets', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const buildTweets = (data) => {
        if (!data) {
            return;
        }
        let tempTweets = [];
        for (const tweet of data) {
            const name = tweet.name;
            const date = Math.abs(
                Math.floor(
                    (new Date().getTime() - new Date(tweet.date).getTime()) / 3600
                )
            );
            const text = tweet.text;

            const childTweet = { name, date, text };
            tempTweets.push(childTweet);
        }
        setTweets(tempTweets);
    }

    const displayTweets = () => {
        if (tweets.length === 0) {
            return <Loading />;
        }
        return tweets.map(tweet => {
            return <Child name={tweet.name} date={tweet.date} text={tweet.text} key={tweet.name + tweet.text + tweet.date} />
        });
    }

    return (

        <div className="background my-0">

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={tweets.length === 0 ? '' : 'blank'}></div>
            {
                tweets.length !== 0 ?
                    <div><p className="h2 text-center text-light mx-3 my-3 mb-4">Results for #{id} </p> </div> :
                    ''
            }
            {
                displayTweets()
            }
        </div>
    )
}

export default ParamChild