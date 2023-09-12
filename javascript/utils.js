const createTag  = (element) =>{
    return ( 
     document.createElement(element)
    )
}
const getElement = (query) => {
    return (
        document.querySelector(query)
    )
}
const getElements = (query) => {
       return (
        document.querySelectorAll(query)
       )
}

const getId = (id) => {
    return (
     document.getElementById(id)
    )
}

  