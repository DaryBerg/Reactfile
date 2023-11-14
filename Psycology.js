import React, { useState } from 'react'

import './App.css';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'PSYC 1104 - Introduction to Psychology II: Social Science',
      description: 'This course provides a survey of the current psychological knowledge in a range of topics that will include developmental psychology, personality, psychological disorders, therapy, stress, social psychology, assessment, motivation and emotion.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prereequisite(s): PSYC 1103 with a minimum grade of C or higher.',
    
    },
    {
      id: 2,
      name: 'PSYC 2210 - Statistical Methods for Psychology I',
      description: 'This course introduces basic statistical techniques as applied to psychological research. Tabulation, graphic representation, univariate descriptive techniques, correlation and linear regression will be examined. The course will also cover basic inferential statistics, including normal curve and t tests. Students will learn statistical software and will use the software to perform calculations',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): PSYC 1104 with a minimum grade of C or higher.'
    },
    {
      id: 3,
      name: 'PSYC 2211 - Statistical Methods for Psychology II',
      description: 'This course introduces students to more advanced statistical techniques than those covered in PSYC 2210 (Statistical Methods for Psychology I). Statistical processes such as multiple regression, one-way and two-way analysis of variance including post-hoc comparisons, and non-parametric hypothesis tests are included. Students will use statistical software to perform data analyses.',
      Credits: 'Credits: 3',
      Prerequisites: 'Prerequisite(s): PSYC 2210 with a minimum grade of C or higher. '
    },
    {
      id: 4,
      name: 'PSYC 2213 - Research Methods I',
      description: 'This course is an introduction to basic research methods in psychology. Students will examine both the theory and application of a variety of research techniques including observation, surveys/questionnaires, and experiments. The course provides students with practice in defining and understanding key aspects of these techniques and applying these techniques to address a variety of psychological research questions.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisites(s): PSYC 1104 or PSYC 1105 with a minimum grade of C or higher or NURS 1213 or permission of department.'
    },
    {
      id: 5,
      name: 'PSYC 2235 - Life-Span Development',
      description: 'This course provides an overview of the major developmental stages from birth to death. Development will be studied from a variety of theoretical perspectives and the application of theory to practical situations will be examined.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): PSYC 1104 or PSYC 1105 with a minimum grade of C or higher or  NURS 1213 or permission of department'
    },
    {
      id: 6,
      name: 'PSYC 2245 - Social Psychology',
      description: 'Students will examine social psychological approaches to understanding social influence, social perception and cognition, attitudes and group dynamics.',
      Credits: 'Credits: (3)',
      Prerequisites: 'PSYC 1104 or PSYC 1105 with a minimum grade of C or higher. '
    },
    {
      id: 7,
      name: 'PSYC 2265 - Cognitive Psychology',
      description: 'This course provides a survey of the major areas of research and theory in cognitive psychology. Topics may include the origins of cognitive psychology in traditional learning theories, as well as contemporary views of neurocognition, attention, perception, language, memory, problem solving, creativity and intelligence.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): PSYC 1104 or PSYC 1105 with a minimum grade of C or higher.'
    },
    {
      id: 8,
      name: 'PSYC 2275 - Foundations in Biopsychology',
      description: 'Biopsychology explores the biological basis of behaviour and experience. In this course, students will acquire foundational knowledge in brain anatomy and neuron physiology, brain chemistry, and the neural mechanisms underlying the sensory systems, emotions, and learning. This course encourages students to adopt a biological perspective towards psychological issues.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): PSYC 1104 or PSYC 1105 with a minimum grade of C or higher.'
    },
    {
      id: 9,
      name: 'PSYC 2283 - Personality',
      description: 'This course emphasizes a scientific approach to the study of personality formation. It examines theories and research related to the structure and dynamics of personality. Five main theoretical views are covered: psychodynamic, learning, humanistic, existential, and trait. Representative theories are presented for each perspective along these lines: main concepts and hypotheses, empirical work (e.g. measurement of individual differences), and/or psychotherapeutic applications. The course establishes links of divergence, convergence, and similitude between the different theories of personality.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): PSYC 1104 or PSYC 1105 with a minimum grade of C or higher. '
    },
    {
      id: 10,
      name: 'PSYC 2285 - Psychopathology',
      description: 'This course is a survey of the symptoms, causes and treatment of psychological disorders as they occur across the lifespan. Through lectures, videos and in-class applied exercises, students will consider the experience of psychopathology and study contemporary methods used in clinical diagnosis and intervention.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): PSYC 1104 or PSYC 1105 with a minimum grade of C or higher.'
    },
    {
      id: 11,
      name: 'ANTH 2213 - Contemporary Aboriginal Issues in Canada',
      description: 'This course considers the history of Aboriginal-state relations, the development of “Indian policy” in Canada and socio-cultural and legal aspects of current issues (such as land claims treaties, status of women, human rights, and expression of aboriginal identity and stereotyping of Aboriginal people) that various Aboriginal groups define as central to their existence and cultural survival.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): Nonw'
    },
    {
      id: 12,
      name: 'ANTH 2214 - Ethnography of the Northwest Coast',
      description: 'This course is a survey of the aboriginal cultures of the Northwest Coast. Initial topics include prehistory, language, subsistence and settlement patterns, material culture, social organization, religion, ceremonial life and traditional art and mythology. Subsequent discussion will focus on European contact and colonization, social change, and major contemporary issues such as aboriginal rights, land claims and the environment.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None'
    },
    {
      id: 13,
      name: 'ANTH 2255 - An Ethnographic Survey of Native North America',
      description: 'This course provides an overview of native cultures of North America, examining relationships among subsistence and settlement patterns, material culture, social and political organization, ideological structures, ceremonial life, mythology and art. Because of the number and diversity of native peoples in North America, “typical” groups from each culture area will form the basis of description and analysis.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None'
    },
    {
      id: 14,
      name: 'ANTH 3319 - Ethnography of the Great Plains',
      description: 'This course is a comparative study of peoples of the Great Plains past and present. Focus is upon the material culture, settlement and subsistence patterns, language, social and political structures, gender roles, religion, world view, ritual and art of the Indigenous peoples of the region. Anthropological and ethnohistorical sources will form the primary data, with a comparison to Indigenous sources.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): One of ANTH 1103, ANTH 1105, or INST 1101.'
    },
    {
      id: 15,
      name: 'ENGL 2253 - Indigenous Literatures in Canada',
      description: 'This course involves a historical survey of Indigenous literature and orature in Canada, representing a diversity of cultures. It features a variety of genres that may include oral accounts, worldviews, autobiography, memoirs, poetry, fiction, drama, graphic novels, etc. It will be informed by literary criticism and theory specifically focusing on Indigenous writing.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): One of ENGL 1101/GNED 1401, GNED 1403, GNED 1404, ENGL 2207 or ENGL 2263 and one of  ENGL 1151, ENGL 1152, ENGL 2141, ENGL 2216, ENGL 2228, ENGL 2273, ENGL 2293, ENGL 2294, ENGL 2295, ENGL 2298, ENGL 2299, ENGL 2301, CNST 1131, CNST 2202, CNST 2221, CNST 2233 or CNST 3730..'
    },
    {
      id: 16,
      name: 'ENGL 3353 - North American Indigenous Literatures',
      description: 'This course will critically engage the literary works of Indigenous peoples through various genres and will be framed by social, cultural, historical, and political contexts. The focus will vary and may include: Indigenous knowledge, Nation/Identity formation, environmental issues, the numbered Treaties, the role of women, humour, orality and language, stereotyping and racism.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): One of ENGL 2141, ENGL 2202, ENGL 2205, ENGL 2210, ENGL 2211, ENGL 2216, ENGL 2228, ENGL 2248, ENGL 2249, ENGL 2270, ENGL 2271, ENGL 2273, ENGL 2291, ENGL 2292, ENGL 2293, ENGL 2294, ENGL 2295, ENGL 2298, ENGL 2299, ENGL 2301, ANTH 2213, ANTH 2214, ANTH 2229, ANTH 2241, ANTH 2255, ANTH 3319, EDUC 4351, FILM 2231, FILM 2251, FILM 3345, HIST 2215, HIST 2247, HIST 3306, HIST 3343, HIST 3345, HIST 3346, INST 1101, INST 1111, INST 2710, INST 2720, INST 2730, SLGY 2275, or  WGST 3311.'
    },
    {
        id: 17,
        name: 'FILM 2231 - Indigenous Film',
        description: 'This course examines the dynamic changes of images of American Indians, Aboriginals, and other Indigenous Peoples from the silent era to contemporary Indigenous-auteured productions. The influences of visual media and critical responses will explore issues of identity, gender, power, performance, natural environments, and sovereignty. This course will engage various genres and media.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): One of ENGL 1101/GNED 1401, GNED 1403 or GNED 1404 and one of FILM 1143, FILM 2221, FILM 2246, FILM 2251, FILM 2260, FILM 2270, FILM 3345, FILM 3349, FILM 3370, FILM 3701, ANTH 2243, ARTH 1101, ARTH 1103, ARTH 2207, ARTH 2209, ARTH 3311, COMM 2500, CRWT 3305, ENGL 2202, ENGL 2273, ENGL 2291, ENGL 2292, ENGL 3256, ENGL 3309, ENGL 3353, ENGL 3390, FREN 3343, HIST 2291, INST 1101, INST 1111, INST 2710, INST 2720, INST 2730, JOUR 3521, SPAN 2220, SPAN 3312 or WGST 2239, WGST 3311 or WGST 3346.'
      },

      {
        id: 18,
        name: 'HIST 2215 - History of the People of the Plains: Treaty 7 Field Course',
        description: 'This course examines the history of the Native peoples in what is now southern Alberta. Topics include Natives prior to European contact, the events leading to Treaty Seven, and the impact of Treaty Seven on First Nations. This course combines lectures in a traditional classroom setting with a week-long experiential field study component.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },  
      {
        id: 19,
        name: 'IST 2221 - Indigenous Settler Relations: 1497-1877',
        description: 'This course introduces students to key issues and events in the history of post-contact Northern North America. Students will learn how relations among Indigenous groups and French and British colonizers evolved over the period from initial contact to the signing of Treaty Seven. The course will explore the complexity of these groups’ relationships, which included cooperation, interdependence, conflict, collaboration, exploitation, and colonization',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 20,
        name: 'HIST 2234 - The Canadian State and Indigenous Peoples from Treaty 7 to the Truth and Reconciliation Commission',
        description: 'These course surveys aspects of the relationships between the Canadian state and Indigenous Peoples between the signing of the numbered Treaties in the 1870s and the publication of the final report of the Truth and Reconciliation Commission in 2015. Students will learn about the framework of Canadian colonial rule - political, legal, educational, social, and economic - imposed upon Indigenous peoples and about reactions and responses to that imposition.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 21,
        name: 'HIST 3345 - Indigenous Histories of Canada: Settler Colonialism and Indigenous Nationhood in Northern North America',
        description: 'This course engages Indigenous interpretations of Canadian History and perspectives on Indigenous-settler relations. Acknowledging a history of cultural genocide and Indigenous nations’ ongoing struggle for nationhood, this course reconsiders settler histories of the Canadian state by contextualizing historical events and processes within Indigenous historical narratives. In addition to providing students greater depth of understanding of the history of Indigenous-settler relations in what is currently Canada, students will compare historical interpretations of the past written by Indigenous scholars to those written by settler scholars. In doing so, students will learn not only what has happened in the past but how the past is studied, represented, and used in the present.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None.'
      },
      {
        id: 22,
        name: 'HIST 3346 - Indigenous People in Latin America',
        description: 'This course is an introduction to the history of Latin American indigenous societies. Themes to be explored include native resistance and collusion with Iberian conquest efforts, the resilience of indigenous cultures in the face of coercive change, and the robust revival of the region’s indigenous populations in the recent past.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 23,
        name: 'INST 1101 - Introduction to Indigenous Studies: the Canadian Context',
        description: 'This course provides an introduction to the interdisciplinary field of Indigenous Studies. Specifically, the course surveys the diverse histories and traditional and contemporary cultures of the various groups in what is now Canada. Taught from an Aboriginal perspective, the course explores a wide range of topics, with an emphasis on colonization and decolonization.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 24,
        name: 'INST 1111 - Introduction to Indigenous Studies: International Perspectives',
        description: 'Taught from an Aboriginal perspective, this course explores a range of topics, with an emphasis on colonization and decolonization in a comparative international context. The Indigenous peoples focused on will vary from semester to semester and may include groups from areas such as Australia, New Zealand, South America and the United States.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 25,
        name: 'PSYC 3380 - Indigenous Psychology',
        description: 'This course explores the psychological outcomes of the colonization experiences of Indigenous peoples including residential schools, systemic and societal discrimination. It is an introduction to Indigenous healing practices and non-traditional psychological therapeutic practices that are utilized to support the wellbeing of Indigenous peoples in Canada. The course also investigates the integration of these traditional healing practices with mainstream psychotherapeutic methods to respond to the diversity within and between Indigenous communities.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): One of PSYC 2235, PSYC 2245, PSYC 2265, PSYC 2275, PSYC 2283, or PSYC 2285 with a minimum grade of C; or consent of the department'
      },
      {
        id: 26,
        name: 'SLGY 2250 - The Sociology of Indigenous Peoples',
        description: 'An introduction to the materials, processes, and structure of the Earth. Topics include: the classification and identification of rocks and minerals; processes in Earth’s interior; plate tectonics and mountain building; surface processes and geologic hazards; geologic resources; and geologic time.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },
      {
        id: 27,
        name: 'MATH 1185 - Calculus with Applications',
        description: 'This course will address the topics of history, colonization, decolonization, and society through an Indigenous sociological lens. The course will focus on dominant areas of sociological study and analysis, including inequalities of race, gender, health, religion, education, justice, the economy, culture, and social class. Instead of following traditional sociological paradigms, emphasis will be on both how colonization and capitalism has shaped these areas of social life, and how Indigenous peoples in Canada and abroad are continuously advancing theories and practices to deal with these social structures and processes.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): SLGY 1101. '
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
  
  const toggleMenu = () => {
    // Toggle the visibility of the popup menu
    const popupMenu = document.getElementById("popup-menu");
    popupMenu.classList.toggle("active");
 };
 


    return (
      <div>
      <header className="student-info">
        <div className="student-info__item">Student: {}</div>
        <div className="student-info__item">Student ID: {}</div>
        <div className="student-info__item">Degree: Computer Science Degree</div>
        <div className="navbar">
          <div className="menu-toggle" id="menu-toggle" onClick={() => toggleMenu()}>
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