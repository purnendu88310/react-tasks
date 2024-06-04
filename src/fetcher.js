

export const fetchProducts = async (searchData) => {
    const query = searchData?'?title='+searchData:'';
    const response = await fetch(`https://api.escuelajs.co/api/v1/products${ query }`);
    let data = await response.json();
    return data;
}

