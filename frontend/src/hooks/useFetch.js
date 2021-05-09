import {useState,useEffect} from 'react';
import {getToken} from './../services/token';

const useFetch = async (url, holded = null, setHolded = null , type = null) => {

    const [error,setError]     = useState(null);
    const [loading,setLoading] = useState(false);
    let dependency = type === 'obj'?[holded]:[holded.length];

    useEffect(() => {

      (async()=>{

        const abortCont = new AbortController();
        const token     = await getToken();

        try {

          setLoading(true);
          const response = await fetch(url,{
            signal  : abortCont.signal,
            headers : {
              "Content-Type"  : "application/json",
              "Authorization" : "Bearer "+token
            }
          });

          const result = await response.json();
          if(setHolded){
             let arr = type === 'quiz'?result.quizzes:result;
             setHolded(arr);
          }
          setLoading(false);

        } catch (err) {

          if(err.name === 'AbortError'){
              abortCont.abort();
              return;
          }

          setError(String(err));
          setLoading(false);

        }

      })()

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },dependency)

    return {error,loading}
}

export default useFetch;