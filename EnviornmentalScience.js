import React, { useState } from 'react'

import './App.css';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'CHEM 1202 - General Chemistry - Introduction to Quantitative Chemistry',
      description: 'This course builds on basic concepts covered in prerequisite courses. Topics include the properties of real gases and solutions, acid/base concepts, chemical kinetics, various equilibria (including <a href="#">acid/base</a>, ionic, and solubility equilibria), elementary thermochemistry and thermodynamics, and electrochemistry. Laboratory exercises will reinforce lecture topics and develop laboratory skills and other competencies.',
      Credits: 'Credits: (3)',
      Prerequisites:'Prerequisite(s): Chemistry 30 and Mathematics 30-1',
    
    },
    {
      id: 2,
      name: 'CHEM 1207 - General Chemistry for the Environmental Sciences',
      description: 'This course builds on concepts covered in high school Chemistry and Mathematics courses. Topics include quantum theory, atomic & molecular structure, theories of chemical bonding, intermolecular forces, equilibria (including acids and bases, solubility), chemical kinetics, and oxidationreduction reactions - all with a view to issues in environmental science. Laboratory exercises will reinforce lecture topics and develop laboratory skills and other competencies.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisites(s): Chemistry 30 and Mathematics 30-1.'
    },
    {
      id: 3,
      name: 'CHEM 2157 - Industrial Organic Chemistry',
      description: 'Topics discussed in this course include: the hybridization of the carbon atom; covalent bonding; reactions of alkanes, alkenes, alkynes and aromatic hydrocarbons; functional groups and their reactions; polymerization and industrial applications. Major projects will include cradle-to-grave analysis of an assigned organic compound and theoretical development of new recycling methods for organics.',
      Credits: 'Credits: 3',
      Prerequisites: 'Prerequisites(s): CHEM 1202 or CHEM 1207.'
    },
    {
      id: 4,
      name: 'ECOL 1111 - Terrestrial Ecology',
      description: 'The study of the interactions and the interdependencies of organisms in terrestrial ecosystems will be the focus of this course. Ecological processes and interactions at the individual, population and community levels within terrestrial ecosystems will be examined. Spatial and temporal patterns of variability within terrestrial ecosystem components and the resulting effects on ecosystem function will be investigated. Natural variability as well as human-induced changes will be profiled. This course will also examine how managed and unmanaged natural terrestrial ecosystems interact with industrial systems. The resulting effects of these interactions on biodiversity and ecosystem function will be critically examined.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisites(s): None'
    },
    {
      id: 5,
      name: 'ECOL 2201 - Plant Survey and Classification',
      description: 'This course provides an introduction to the principles and application of field survey, classification and identification of common types of vegetation found in Alberta. The theoretical component of the course focuses on the particular traits that define the major plant families found in Alberta. In the laboratory, taxonomic keys and field guides will be used to identify plants to the species level, with application to the environmental assessment and reclamation of native and disturbed sites.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): ECOL 1111, GEOG 1101 or BIOL 1204.'
    },
    {
      id: 6,
      name: 'ECOL 2219 - Aquatic Ecology',
      description: 'The study of the structure and function of aquatic ecosystems is undertaken in this course. There is an emphasis on freshwater systems. The goal is to understand how physical, chemical, biological and anthropogenic factors influence population dynamics and community structure in aquatic ecosystems. Laboratory and field research methods used in aquatic ecology are introduced. Current literature and case studies in various areas of aquatic ecology will be critically reviewed. Aquatic biodiversity issues and sustainability issues are emphasized. The interactions and integration of industrial systems with natural aquatic systems will also be reviewed.',
      Credits: 'Credits: (3)',
      Prerequisites: 'ECOL 1111 or consent of the department.'
    },
    {
      id: 7,
      name: 'ENVS 1105 - Data Processing and Statistics',
      description: 'The organization, processing, and presentation of quantitative data. Fundamental statistical ideas, descriptive statistics, inferential statistics (including Analysis of Variance, regression and correlation), statistical quality control and timeseries analysis will be covered. Laboratories will include the analysis of data using statistical software packages.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Mathematics 30-1.'
    },
    {
      id: 8,
      name: 'ENVS 1111 - Professional Development, Health and Safety',
      description: 'This course will prepare students for work experience through Professional Development activities. Recent developments, trends and opportunities in the environmental industry and the field of Industrial Ecology will be covered by representatives from industry and government. The Professional Development component will prepare students to search for work experience opportunities in the environmental field. As the labour market increasingly expects that employees practice due diligence in their adherence to mandated occupational health & safety legislation and regulations, students will be introduced to the general workplace health, safety and career development issues as they relate to the Canadian environmental industry. Within this context, students must demonstrate certifiable proficiencies in H2SAlive, First Aid with CPR, Transportation of Dangerous Goods (TDG), Workplace Hazardous Materials Information System (WHMIS) and other strategies as required by industry.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None'
    },
    {
      id: 9,
      name: 'ENVS 2020 - Work Experience I',
      description: 'Students will be assisted in finding a work-term placement. This normally will be in a business, industry or a research laboratory that deals with environmentally related problems. Completion of non-credit safety courses prior to the work placement will be required. Students will be mentored by a faculty member during the work term. An oral and a written report, completed by the student, in addition to evaluations carried out by the employer will be required following the work-term.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Consent of the department.'
    },
    {
      id: 10,
      name: 'ENVS 2100 - Introduction to Environmental Science',
      description: 'The course will introduce students to the integrated systems that make up the environment and examines the physical, chemical, biological and human interactions that determine the past, current and future states of the environment. Environmental science explores the relationships between the environment and anthropogenic activities. Understanding these relationships is considered vital to all future environmental decision making. This course will consider a full spectrum of views and information to provide a solid base of understanding and a sustainable direction for the future.      ',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s):  One of GNED 1101, GNED 1102, or GNED 1103.'
    },
    {
      id: 11,
      name: 'ENVS 2203 - Introduction to Soil Science',
      description: 'This course introduces the fundamental principles of soil science: soil formation and the development of life, fertility and environmental quality, importance of soil biodiversity, reclamation strategies, solution models, colloids, solid phase interactions, structural classification of silicates, ion exchange, redox reactions, acids and bases in soils, salinity, erosion processes, field moisture dynamics.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): CHEM 1202  or CHEM 1207.'
    },
    {
      id: 12,
      name: 'ENVS 2215 - Applied Instrumentation',
      description: 'This course offers a fundamental understanding of field screening techniques and practices of instrumental measurements for the qualitative determination of substances. The main methods of analysis taught are Atomic Absorption and Emission Spectroscopy, Infrared Spectroscopy, Ion Chromatography, High-Pressure Liquid Chromatography, Gas Chromatography. Students are also introduced to the scientific practice of expressing results and error analysis. The lab component provides hands-on experience with the analytical techniques.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): CHEM 1202 or CHEM 1207.'
    },
    {
      id: 13,
      name: 'ENVS 2221 - Water Pollution and Surface Water Analysis',
      description: 'A study of the sources, transport, effects and fates of chemicals in surface waters. Topics include industrial effluents, the nature and composition of surface waters, the principles of water pollution control, aquatic environmental chemistry. Emphasis will be placed on water quality analysis: pH, acidity, alkalinity, hardness, residual chlorine, chloride, sulphate, dissolved oxygen, BOD, field sample preservation. Field trips will be arranged involving sampling procedures and field recording of data for chemical and physical water quality parameters.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s):  CHEM 1202 or CHEM 1207.'
    },
    {
      id: 14,
      name: 'ENVS 3020 - Work Experience II',
      description: 'Students will be assisted in finding a work-term placement. This normally will be in a business, industry or a research laboratory that deals with environmentally related problems. Completion of non-credit safety courses prior to the work placement will be required. Students will be mentored by a faculty member during the work term. An oral and a written report, completed by the student, in addition to evaluations carried out by the employer will be required following the work-term.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Consent of the department.'
    },
    {
      id: 15,
      name: 'ENVS 3305 - Soil Hydrology',
      description: 'This course provides students with a comprehensive understanding of the underlying principles of soil hydrology systems with respect to general quality, conservation, volume estimation, drainage, improvement and management practices as well as their effects on environmental sustainability.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): ENVS 2203 or consent of the department.'
    },
    {
      id: 16,
      name: 'ENVS 3307 - Air Pollution Monitoring',
      description: 'This course will examine the methods used to monitor pollutants emitted to the atmosphere, the precision and accuracy of these methods and the audit procedures used to determine compliance, emission credits and documenting improvement to industrial processes.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): CHEM 1202, CHEM 1207, MATH 1185 or MATH 1200, or consent of the department.'
    },
    {
        id: 17,
        name: 'ENVS 3323 - Watershed Management',
        description: 'Ensuring a safe and adequate supply of water is a global concern. This course is designed to provide an understanding of watershed practice and an approach to managing watershed systems in a sustainable fashion.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 2221 or ENVS 3333 or consent of the department.'
      },

      {
        id: 18,
        name: 'ENVS 3333 - Ground Water Contamination',
        description: 'This course will provide a basic understanding in applied hydrogeology with emphasis being on the fate and behaviour of industrial chemicals in the groundwater, the impact of industrial activities on groundwater quality, control, monitoring and remediation of contaminated groundwater systems.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): CHEM 2157 or consent of the department.'
      },  
      {
        id: 18,
        name: 'ENVS 3335 - Issues in Environmental Assessment',
        description: 'This course will review and analyze provincial, national and international environmental assessment issues. Important representative case studies will be reviewed. Guest speakers will be drawn from appropriate organizations. Current methodologies in environmental impact assessment will be covered, including overviews of Risk Assessment, Cumulative Effects Assessment and Strategic Environmental Assessment. The advantages of moving towards Comprehensive Risk Assessment and Comprehensive Policy Support Assessment will be critically discussed. These integrated decision methodologies will be necessary to support environmental policies and be crucial to making progress towards economic and environmental efficiency at all system levels.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 3307 and ENVS 3333.'
      },
      {
        id: 19,
        name: 'ENVS 4201 - Environmental Science Research Methods and Projects',
        description: 'This course gives students an opportunity to carry out an independent research project under the supervision of a faculty member. Even though the scientific basis of the research project may be pre-established, each student will be required to develop a research topic and will develop valuable skills while carrying out the project. These skills include integration of knowledge and perspectives across disciplinary boundaries, familiarity with experimental techniques, generation of research hypotheses, accessing and utilizing literature, collection and analysis of data and the opportunity to formulate, execute and present ideas in written and oral formats. The project will bring together knowledge and skills acquired in previous years from the Environmental Science Degree Program.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 4441'
      },
      {
        id: 20,
        name: 'ENVS 4405 - Air Quality',
        description: 'This course will examine the composition, evolution, and future of the earth’s atmosphere. It will include human impact, mitigating initiatives and will examine the predictive methods and databases currently in use to predict future scenarios. It will examine the atmosphere as part of the biogeochemical cycling of its constituents.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): CHEM 2157.'
      },
      {
        id: 21,
        name: 'ENVS 4406 - Soil Genesis and Land Use',
        description: 'This course addresses soil systems formation, interpretation, and processes as they relate to soil development, survey and classification. The course also examines soil databases and their application for site evaluation and suitable use with significant attention to environmental issues. Students will develop critical reading skills in order to synthesize and apply information from soil databases towards land management decisions, conservation, and restoration. Students will also participate in research projects under faculty supervision and present their scientific findings in a written report which will then be presented to the department.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 3305.'
      },
      {
        id: 22,
        name: 'ENVS 4419 - Regulatory Management',
        description: 'Students will be introduced to the processes associated with Regulatory Management through case studies of relevant local, regional, national, and international laws, regulations, and treaties governing the environment. The understanding of the origins, current status, and future impacts of these studies will provide insight into the effects of environmental initiatives on the region, the province, Canada and in the international arena.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 3335'
      },
      {
        id: 23,
        name: 'ENVS 4431 - Waste Management',
        description: 'This course is designed to provide students an understanding of the principles and concepts of waste management. Topics include: environmental chemistry of hazardous wastes, principles of industrial metabolism, waste disposal, health risks, regulatory aspects of waste management, optimization of materials, and emerging/new concepts in waste management. The laboratory component will involve field trips and dry lab activities.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 3333 or consent of the department.'
      },
      {
        id: 24,
        name: 'ENVS 4441 - Site System Remediation Design',
        description: 'This course will provide an in-depth technical and practical evaluation of remediation systems for contaminated sites.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ENVS 2203 or consent of the department.'
      },
      {
        id: 24,
        name: 'GEOL 1101 - The Dynamic Earth',
        description: 'An introduction to the materials, processes, and structure of the Earth. Topics include: the classification and identification of rocks and minerals; processes in Earth’s interior; plate tectonics and mountain building; surface processes and geologic hazards; geologic resources; and geologic time.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 25,
        name: 'MATH 1185 - Calculus with Applications',
        description: 'This course is an introduction to calculus with an emphasis on applications in sciences. Problem-solving is a major component of this course.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): Mathematics 30-1 with a grade of 60% or higher or equivalent.'
      },
      {
        id: 26,
        name: 'MATH 1203 - Linear Algebra for Scientists and Engineers',
        description: 'This course is an introduction to linear algebra for science students. Topics covered are vector and matrix algebra, systems of linear equations, determinants, linear transformations, polar coordinates and complex numbers. Applications in the physical sciences are studied with the help of eigenvalues and eigenvectors.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): Mathematics 30-1 with a 60% or higher.'
      },
      {
        id: 27,
        name: 'MGMT 3269 - Project Management',
        description: 'This course introduces students to project management Content includes concepts, principles, and the inputs, outputs, tools and techniques necessary to take the project from inception to completion. Students will learn, using PMBoK (Project Management Body of Knowledge), how to initiate a project, plan for its completion, monitor and control the project during implementation, and closing the completed project. Projects will be developed that are industry specific and will be used to allow students to take a project from inception to completion.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
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