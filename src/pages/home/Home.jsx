import React from "react";
import axios from "axios";
import {  useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import "./Home.style";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";
//  const APP_ID = '4e9f05eb';
// const APP_KEY = '9b904d703fa0d46a88ce1ac63f29f498';
const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY =process.env.REACT_APP_APP_KEY;

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  // const [query,setQuery]=useState("egg")
  // const [meal,setMeal]=useState("breakfast")
  // const APP_ID="8c0cec64"
  // const APP_KEY="3ee80ab7d1aca47e3e0ae57afa1981e9"
  // const [recipes, setRecipes] = useState(null);

  // // const APP_ID = '4e9f05eb';
  // // const APP_KEY = '9b904d703fa0d46a88ce1ac63f29f498';
  // const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}b&app_key=${APP_KEY}&mealType=${meal}`;

  // const getData=async()=>{
  //   const { data } = await axios.get(url);
  //   setRecipes(data.hits);
  //   console.log(recipes)
  // }

  const [query, setQuery] = useState("egg");
  const [recipes, setRecipes] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(mealType[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    // const {data}=await axios.get(url)
    //     // console.log(result.data.hits)
    //     setRecipes(data.hits)

    // Card ekledikten sonra

    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form");
    }
  };

  //     if (query !== ""){
  //     const result=await axios.get(url)
  //     console.log(result.data.hits)
  //     if(result.data.more){
  //         console.log("no food a this name")
  //     }
  //     setRecipes(result.data.hits)
  //     setQuery("")
  // }
  // else{ console.log("Please fill the form")}
  // }
  // }

  console.log(recipes);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
