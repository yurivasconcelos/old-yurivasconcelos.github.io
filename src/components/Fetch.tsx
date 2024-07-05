export function FetchComponent() {
  console.log('hey');

  const getAzure = () => {
    fetch('https://yurifx.azurewebsites.net/getCustomer').then((res => res.json())).then(x=>console.log(x));
  };
  const getLocal = () => {
    fetch('https://localhost:7004/getCustomer').then((res => res.json())).then(x=>console.log(x));
  };


  return (
    <>
      <div>Fetch Component</div>
      <button onClick={getAzure}>Get Azure</button>
      
      <button onClick={getLocal}>Get Local</button>
    </>
  );
}
