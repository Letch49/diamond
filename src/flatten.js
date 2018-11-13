const flatten = (array) => array.reduce((acc, el) => {
    if (Array.isArray(el)){
        flatten(el).forEach(element => {
            acc.push(element);
        });
        return acc;
    }
    return [...acc, el];
},[]);

export default flatten;