import toast from "react-hot-toast";


// get to data local storage
const getToStorage = () => {
    const all = localStorage.getItem('my-list')
    if(all){
        const product = JSON.parse(all)
        return product;
    }else{
        return [];
    }
}

// add to data local storage
const addToStorage = (products) => {
    const product = getToStorage()
    const isExist = product.find(item => item.id == products.id)
    if(isExist) return toast.error('This Card is already exist');
    product.push(products)
    localStorage.setItem('my-list', JSON.stringify(product))
    toast.success('Add to card successfully');
}

// remove to data local storage
const removeCardList = (id) => {
    const product = getToStorage()
    const remaining = product.filter(item => item.id != id)
    localStorage.setItem('my-list', JSON.stringify(remaining))
    toast.success('Deleted successfully');
}


const getWishList = () => {
    const all = localStorage.getItem('wish-list')
    if(all){
        const product = JSON.parse(all)
        return product;
    }else{
        return [];
    }
}


const setWishList = (products) => {
    const product = getWishList()
    const isExist = product.find(item => item.id == products.id)
    if(isExist) return toast.error('This wish is already exist');
    product.push(products)
    localStorage.setItem('wish-list', JSON.stringify(product))
    toast.success('Add to wish list');
        
    }

const clearStorage = () => {
    localStorage.clear()
}

const removeWish = (id) => {
    const product = getWishList()
    const remaining = product.filter(item => item.id != id)
    localStorage.setItem('wish-list', JSON.stringify(remaining))
    toast.success('Deleted successfully');
}

export {setWishList, getWishList, removeWish, clearStorage}
export {addToStorage, getToStorage, removeCardList}