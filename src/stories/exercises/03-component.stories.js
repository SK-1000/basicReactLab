import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "HDip Computer Science Sheila";
  const twoModules = [
    {
      name: "DevOps",
      noLectures: 1,
      noPracticals: 60,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 24,
      noPracticals: 3,
    },
  ];
  return <CourseModulesWithProps modules={twoModules} course={name} />;
};
