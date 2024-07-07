const url = 'https://agents.phala.network/ipfs';
const ipfs = 'QmYwNxaLJW5wgtphBVdRQeMQBK4hZ9QJsBujo6CBWEhazd'

async function fetchWithStream(query: string) {
    try {
      const response = await fetch(`${url}/${ipfs}/0?chatQuery=${query}`, {
        method: 'GET',
        headers: {
          'Accept': 'text/event-stream' 
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('ReadableStream is not supported.');
      }
  
      const decoder = new TextDecoder('utf-8');
      let result = '';
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
  
        result += decoder.decode(value, { stream: true });
      }
  
      console.log('Streamed response:', result);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  // const key ="686df81d326fa5f2"
  const query="How to deploy a NFT SmartContract on Starknet"
  
  //fetchWithStream(url,ipfs,query);

  export { fetchWithStream }
  