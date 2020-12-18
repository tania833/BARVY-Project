import React from 'react';
import { Link } from 'react-router-dom';
import TeacherAPI from '../../MOCKS/TeacherAPI';

const FullTeachers = () => {
  return (
    <div>
      <ul>
        {TeacherAPI.all().map((teacher) => (
          <li key={teacher.path}>
            <Link to={`/artists/${teacher.path}`}>{teacher.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullTeachers;
