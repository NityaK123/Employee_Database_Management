export const fetchData = async()=>{
    try{
        const data = await fetch('data.json')
        const response = await data.json() 
        return response
    }
    catch(error){
        throw new Error("Unable to fetch data")
    }
}