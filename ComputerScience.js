import React, { useState } from 'react'

import './App.css';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'COMP 1633 - Introduction to Computer Science II',
      description: 'Description: Introduction to object-oriented analysis and design, programming using an object-oriented language, and implementation of linked data structures. Issues of modularity, software design, and programming style will be emphasized.',
      Credits: 'Credits: (3)',
      Prerequisites:'Prerequisite(s): COMP 1631 or COMP 1701 with a minimum grade of C- or higher.',
    
    },
    {
      id: 2,
      name: 'COMP 1701 - Introduction to Problem Solving and Programming',
      description: 'Description: This course provides an introduction to problem solving in the context of computer programming. The course emphasizes fundamental algorithmic solutions and implementation of those solutions using a practical programming language. Topics include data representation, program control, file handling and elementary data structures',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisites(s): None'
    },
    {
      id: 3,
      name: 'COMP 2613 - Introduction to Computability',
      description: 'Description: This course provides students with an opportunity to gain insight into the theoretical foundations of computing science. Topics include abstract machines (finite automata; push down automata and Turing machines), the hierarchy of formal languages (regular, context-free, and recursive) recognized by these machines, and applications of these languages.',
      Credits: 'Credits: 3',
      Prerequisites: 'Prerequisite(s): COMP 1633 with a minimum grade of C- or higher.'
    },
    {
      id: 4,
      name: 'COMP 2633 - Foundations of Software Engineering',
      description: 'Introduction to software development problems and to the processes and methods used to address them. Software life cycles models. Software process improvement. Goals and methods for requirements analysis and specification, software design, implementation, integration and testing of software. An introduction to one or more informal methods (focusing on object-oriented approaches) currently in wide spread use.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): ECOMP 2631 with a minimum grade of C- or higher.'
    },
    {
      id: 5,
      name: 'COMP 2655 - Computing Machinery I',
      description: 'A detailed study of the architecture of a modern CPU and its internal data representations. An introduction to assembly language programming, with an emphasis on the instructions and addressing modes used to implement control structures, subroutine calls, and record, array, and linked list data structures in high-level languages.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Prerequisite(s): COMP 1633 with a minimum grade of C- or higher.'
    },
    {
      id: 6,
      name: 'COMP 2659 - Computing Machinery II',
      description: 'The organization, processing, and presentation of quantitative data. Fundamental statistical ideas, descriptive statistics, inferential statistics (including Analysis of Variance, regression and correlation), statistical quality control and timeseries analysis will be covered. Laboratories will include the analysis of data using statistical software packages.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Mathematics 30-1.'
    },
    {
      id: 7,
      name: 'COMP 3309 - Information Technology and Society',
      description: 'A study of the implications of information technology for society. Historical perspectives, social context of computing, legal and ethical problems, economic issues, and philosophical frameworks for analysis will be covered.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): GNED 1301, GNED 1303, or GNED 1304. '
    },
    {
      id: 8,
      name: 'COMP 3614 - Algorithms and Complexity',
      description: 'The design of algorithms and the analysis of their efficiency. Greedy algorithms, divide-and-conquer strategies, recursive backtracking, and dynamic programming are studied. Heuristic algorithms and NP-completeness are introduced.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): COMP 2631, COMP 2613 and MATH 1200 with minimum grades of “C-“.'
    },
    {
      id: 9,
      name: 'COMP 3649 - Programming Paradigms',
      description: 'This course will examine the basic principles of several major programming paradigms, with emphasis on declarative paradigms such as functional and logic programming. Data types, control expressions, loops, types of references, lazy evaluation, different interpretation principles and information hiding will be studied.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): COMP 2613, COMP 2631 and PHIL 1179 with minimum grades of C- or higher. '
    },
    {
      id: 10,
      name: 'COMP 3659 - Operating Systems',
      description: 'This course introduces the principles and techniques for designing and implementing operating systems. Topics include performance measurement; concurrent computations; the management of information, files, process, and security; memory, and processor resources.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in both COMP 2631 and COMP 2659.'
    },
    {
      id: 11,
      name: 'MATH 1200 - Calculus for Scientists I',
      description: 'This course provides an introduction to calculus with exposure to applications in science, business, and economics. The main concepts covered are limits, derivatives, and integrals. Derivatives of exponential, logarithmic, trigonometric and inverse trigonometric functions are used to solve optimization, linear approximation, and related rates problems. Techniques of integration and applications are also introduced. Studying calculus will expose students to a variety of important mathematical ideas and help students develop their calculation, critical thinking and problem solving skills.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): A grade of 60% or higher in Mathematics 30-1 or in MATH 0130, or a grade of C- or higher in any of MATH 1283 or MATH 1285 or equivalent.'
    },
    {
      id: 12,
      name: 'MATH 1203 - Linear Algebra for Scientists and Engineers',
      description: 'This course is an introduction to linear algebra for science students. Topics covered are vector and matrix algebra, systems of linear equations, determinants, linear transformations, polar coordinates and complex numbers. Applications in the physical sciences are studied with the help of eigenvalues and eigenvectors.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Mathematics 30-1 with a 60% or higher.'
    },
    {
      id: 13,
      name: 'MATH 1271 - Discrete Mathematics',
      description: 'This course is an introduction to symbolic logic, techniques of proof, sets, equivalence relations. There is also an exploration of mathematical induction, recursion, counting principles, graphs, and trees.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): MATH 1203 with a grade of C- or higher.'
    },
    {
      id: 14,
      name: 'MATH 2234 - Concepts of Mathematical Statistics',
      description: 'This course involves descriptive statistics and an introduction to probability theory. A systematic treatment of inferential statistics is undertaken in this course. Topics include the inferences of one population and two population means and proportions, linear regression and correlation, chi-square test and analysis of variance. Statistical computer software is used in the labs to apply the concepts to real data sets.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): MATH 1200 with a grade of C- or higher.'
    },
    {
      id: 15,
      name: 'PHIL 1179 - Introduction to Symbolic Logic',
      description: 'This course introduces sentential and first-order logic from both deductive and semantic points of view. Some elementary metatheorems are also discussed.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): CHEM 1202, CHEM 1207, MATH 1185 or MATH 1200, or consent of the department.'
    },
    {
      id: 16,
      name: 'PHIL 1179 - Introduction to Symbolic Logic',
      description: 'This course introduces sentential and first-order logic from both deductive and semantic points of view. Some elementary metatheorems are also discussed.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): CHEM 1202, CHEM 1207, MATH 1185 or MATH 1200, or consent of the department.'
    },
    {
        id: 17,
        name: 'COMP 3533 - Network Infrastructure and Security',
        description: 'This course covers the principles and practice of computer networking, focusing on the high-level protocol-oriented aspects of computer networks. Networking as it relates to database and file service applications is examined along with Internet structure, protocols, and routing. Various aspects of security in networked information systems are studied.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of C- in one of COMP 3532 or COMP 2655.'
      },

      {
        id: 18,
        name: 'COMP 3553 - Human-Computer Interaction',
        description: 'This course covers the fundamental theory and practice in the design and evaluation of human-computer interfaces. The impacts of computer-based information systems on individuals and organizations are examined along with the rationale for a user-centric approach in all IT applications and systems.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of C- in both COMP 2511 and COMP 2541 or a minimum grade of C- or COMP 2633. '
      },  
      {
        id: 18,
        name: 'COMP 3612 - Web Development for Computer Science',
        description: 'This course provides an overview of web development suitable for computer science majors. It covers the broad spectrum of technologies used within this environment. Design, tools, and development processes unique to web development will also be covered.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): COMP 2633 with a minimum grade of C-.'
      },
      {
        id: 19,
        name: 'COMP 3625 - Artificial Intelligence',
        description: 'This course provides an introduction to artificial intelligence concepts and techniques. Topics include the characteristics of problems for which intelligent systems can be built, the agent paradigm, search strategies, knowledge representation, logical reasoning, reasoning under uncertainty, and machine learning. Multi-agent systems, robotics, computer vision, and/or natural language processing will be introduced, as time permits.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in all of COMP 2631, COMP 2613 and MATH 2234'
      },
      {
        id: 20,
        name: 'COMP 3626 - Evolutionary Computation',
        description: 'This course provides a broad understanding of the issues in developing and analyzing evolutionary and swarm computation systems. Topics that may be covered are genetic algorithms, evolution strategies, evolution programming, genetic programming, classifier systems, swarm optimization, constraint handling, dynamic environments, co-evolutionary systems, cellular automata, and neural networks.</p>',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): COMP 2631 with a minimum grade of C-.'
      },
      {
        id: 21,
        name: 'COMP 3654 - Usable Privacy and Security',
        description: 'This course covers the fundamental theory and practice in usable security and privacy. This course is designed to introduce students to a variety of usability problems related to privacy and security and to give them experience in understanding and designing studies aimed at helping to evaluate usability issues in security and privacy systems.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of C- in one of COMP 2503 or COMP 2631.'
      },
      {
        id: 22,
        name: 'COMP 4513 - Web III: Advanced Web Development',
        description: 'This course covers advanced web development topics, applying the foundation client and server techniques learned in Web I and II, and database topics from Databases I. In addition to practical theory, students will learn about asynchronous JavaScript, web services, electronic commerce, search engine optimization and content management systems. Students will use a modern API to develop an application using maps, social network plug-ins, or other advanced web technology.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): COMP 3512 with a minimum grade of C-, or COMP 2521 and COMP 3612 with minimum grades of C-.'
      },
      {
        id: 23,
        name: 'COMP 4555 - Games Development',
        description: 'This course focuses on the design and implementation of interactive computer games. It emphasizes understanding games, social issues related to games, the game development life cycle, prototyping, playtesting, working within constraints, and productive, meaningful critiquing. In the technical segment, the course uses a variety of development tools and techniques in conjunction with a modern game engine. Students work collaboratively to design and develop a number of game prototypes, one of which will be implemented as a digital game.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): COMP 3504 or COMP 3512 or COMP 3551 OR COMP 2633 with a minimum grade of C-.'
      },
      {
        id: 24,
        name: 'COMP 4622 - Advanced Databases',
        description: 'This course covers advanced topics and techniques for using relational databases and introduces distributed databases and distributed transactions. Databases using models other than relational are introduced.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in all of COMP 2631, COMP 2521, and MATH 2234.'
      },
      {
        id: 24,
        name: 'COMP 4622 - Advanced Databases',
        description: 'This course covers advanced topics and techniques for using relational databases and introduces distributed databases and distributed transactions. Databases using models other than relational are introduced.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in all of COMP 2631, COMP 2521, and MATH 2234.'
      },
      {
        id: 25,
        name: 'COMP 4630 - Machine Learning',
        description: 'This course provides a broad introduction to machine learning. Topics include supervised learning, unsupervised learning, neural networks and reinforcement learning. This course will also discuss recent applications of machine learning such as robotics, data mining, autonomous navigation, speech recognition, and text and web processing.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in both COMP 3625 and MATH 2234.'
      },
      {
        id: 26,
        name: 'COMP 4633 - Advanced Software Engineering',
        description: 'This course covers software engineering techniques and principles presented in earlier courses with more detail and introduces different types of soft products. The course emphasis on software design, architecture concepts, and best practices allows students to compare and analyze different designs and architectures used in large-scale software projects. Moreover, the course introduces project management and risk mitigation techniques for software development teams.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): COMP 2633 with a minimum grade of “C-“.'
      },
      {
        id: 27,
        name: 'COMP 4635 - Distributed Systems',
        description: 'This course covers the design and implementation of distributed systems. Topics such as grid computing, virtualization, cloud computing and principles such as multithreading, communication, synchronization, replication, fault tolerance and security are also covered.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in both COMP 3533 and COMP 3659.'
      },
      {
        id: 28,
        name: 'COMP 5690 - Senior Computer Science Project',
        description: 'Students will be expected to design and complete a project of their choosing in some area of computer science under the guidance of a supervisor. The project results will then be presented as a paper, a poster and an oral presentation to the department.',
        Prerequisites: 'Prerequisite(s): Permission of the Department Chair'
      },
      {
        id: 29,
        name: 'DATA 2721 - Data Science I: Introduction to Databases',
        description: 'This course emphasizes concepts necessary to design and implement databases using a variety of data models including relational, and non-relational models. Practical application with a number of Database Management Systems is included with an emphasis on data processing in a data science environment.',
        Credits: 'Credits: (3)',
        Prerequisites: 'None'
    },
    {
        id: 30,
        name: 'MATH 2101 - Abstract Algebra',
        description: 'This course is an introduction to abstract algebra with applications in cryptography. Topics studied include groups and rings, polynomial arithmetic and the division algorithm, and congruencies.',
        Credits: 'Credits: (3)',
        Prerequisites: 'MATH 1203 with a grade of C- or higher.'
    },
    {
                id: 31,
              name: 'MATH 2200 - Calculus for Scientists II',
    
       description: 'In this course, students will learn advanced methods of integration, partial differentiation, and introductory theory of first and second-order linear differential equations and multivariable calculus. A variety of applications will be considered. Convergence of sequences and series will also be covered.',
           Credits: 'Credits: (3)',
     Prerequisites: 'Prerequisite(s): MATH 1200 with a grade of C- or higher.'
    },
    {
        id: 32,
        name: 'MATH 3101 - Numerical Analysis',
        description: 'In this course, the theory and practice of numerical computational procedures o solve practical problems will be studied. Methods for solutions of nonlinear equations, solutions of simultaneous Flinear equations, curve fitting, solution of the eigenvalue problem, interpolation and approximation, numerical differentiation and integration, solution of ordinary and partial differential equations are included. The laboratory includes the application to elementary problems and the computer solution of comprehensive problems.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): MATH 1203 and MATH 2200, each with a minimum grade of C-.'
    },
  ];

  // State to track the selected course for displaying its description
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to toggle the visibility of the course description popup
  const toggleCoursePopup = (courseId) => {
    if (selectedCourse === courseId) {
      setSelectedCourse(null); // Close the popup if it's already open
    } else {
      setSelectedCourse(courseId);
    }
  };
  
  
    return (
      <div>
      <header className="student-info">
        <div className="student-info__item">Student: {}</div>
        <div className="student-info__item">Student ID: {}</div>
        <div className="student-info__item">Degree: Computer Science Degree</div>
        <div className="navbar">
          <div className="menu-toggle" id="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="popup-menu" id="popup-menu">
            <ul className="navbar__list">
              <li className="navbar__item"><a href="#">Home</a></li>
              <li className="navbar__item"><a href="#">Ask Questions</a></li>
              <li className="navbar__item"><a href="#">Sign Out</a></li>
            </ul>
          </div>
        </div>
      </header>
     
      <div>  
    <section class ="courses">
     <h2 class="courses__title">Courses Required for Graduation</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <button onClick={() => toggleCoursePopup(course.id)}>
              {course.name}
            </button>
            {selectedCourse === course.id && (
              <div className="course-popup">
                <p>{course.description}</p>
                <br></br>
                <p>{course.Credits}</p>
                <br></br>
                <p>{course.Prerequisites}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      </section>
    </div>
    </div>
  );
};


export default App