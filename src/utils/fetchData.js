export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c9956aae75msh2438a8359532618p13bacfjsnbc1d3253a778',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c9956aae75msh2438a8359532618p13bacfjsnbc1d3253a778',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
