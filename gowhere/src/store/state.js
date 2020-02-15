let defaultCity = '深圳'
try{
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e){
    console.log('localStorage err')
}

export default{
    city: defaultCity
}