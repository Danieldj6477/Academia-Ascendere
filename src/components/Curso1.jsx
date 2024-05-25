// src/components/Curso1.jsx
import React from 'react';
import CourseDetail from './CourseDetail';

const Curso1 = () => {
  const courseData = {
    title: 'Seguridad Cibernética',
    description: 'Desarrolla estrategias para proteger a las organizaciones contra ciberataques e irrupciones.',
    salary: {
      allProfessions: '37.960 US$',
      courseProfession: '119.700 US$'
    },
    jobOffers: '147.973',
    growth: '30,2%',
    image: 'https://via.placeholder.com/150'
  };

  return <CourseDetail {...courseData} />;
};

export default Curso1;
