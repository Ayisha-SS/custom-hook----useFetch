import React from "react";
import useFetch from "./useFetch";

function Component(){
    const url = '';
    const {data, loading,error} = useFetch(url);
    if (loading) {
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error:{error.message}</p>
    }
    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
}
export default Component;