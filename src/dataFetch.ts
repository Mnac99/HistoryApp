 const Url = "https://api.spacexdata.com/v3/history";

const dataFetch = async()  => {
    return fetch(Url).then(res => res.json()).
    then(data => console.log(data));
}
export default dataFetch;