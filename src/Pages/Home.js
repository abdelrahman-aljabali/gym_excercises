import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Exercies from "../components/Exercies";
import SearchExercies from "../components/SearchExercies";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercies
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Exercies
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
