 
 export const GetCategories = async() =>{
  const res = await fetch('http://localhost:5000/categories')
  return res.json();
 }
 export const GetNews = async() =>{
  const res = await fetch('http://localhost:5000/news')
  return res.json();
 }