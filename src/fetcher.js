

export const fetchProducts = async (searchData,currentPage) => {
    let cPage = currentPage?currentPage:1;
    const query = searchData?'?title='+searchData+'&offset='+cPage+'&limit=5':'?offset='+cPage+'&limit=5';
    const response = await fetch(`https://api.escuelajs.co/api/v1/products${ query }`);
    let data = await response.json();
    
return data;
}

export const searchProducts = async (searchData) => {
    const query = searchData?'?title='+searchData:'';
    const response = await fetch(`https://api.escuelajs.co/api/v1/products${ query }`);
    let data = await response.json();
    
return data;
}