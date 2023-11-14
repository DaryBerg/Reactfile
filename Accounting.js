import React, { useState } from 'react'

import './App.css';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'ACCT 2121 - Financial Accountin Concepts',
      description: 'This course provides an introduction to accounting principles and the accounting cycle. Topics include fundamental concepts such as accounting principles, assumptions, constraints, and the preparation and reporting of financial information to investors, managers, and others. Emphasis is on financial statement preparation and analysis.',
      Credits: 'Credits: (3)',
      Prerequisites:'Prerequisite(s): None',
    
    },
    {
      id: 2,
      name: 'ACCT 3224 - Management Accounting I',
      description: 'This course provides an introduction to the nature, scope and use of managerial accounting. Topics include management planning and control, inventory and cost flows, standard costs and variance analysis, budgeting, cost-volume-profit analysis, relevant costs and decision making.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisites(s): ACCT 2121'
    },
    {
      id: 3,
      name: 'ECON 1101 - Principles of Microeconomicsy',
      description: 'This course examines how individuals, firms, and governments allocate scarce resources. Market, firm, and society choices are examined using the principles of consumption and production under the following market structures: perfect competition, monopoly, oligopoly, and monopolistic competition. These principles form the basis for analyzing the decision-making processes associated with contemporary microeconomics issues.',
      Credits: 'Credits: 3',
      Prerequisites: 'Prerequisite(s): None'
    },
    {
      id: 4,
      name: 'ECON 1103 - Principles of Macroeconomics',
      description: 'This course will acquaint students with introductory macroeconomic principles and issues, including key macro variables, and two important short run models of income determination, namely the Keynesian model and the AS/AD model. The course also examines the monetary system, interest rates and the monetary transmission mechanism, business cycles, fiscal and monetary policies, international trade, exchange rates and the balance of payments.',
      Credits: 'Credits: (3)',
      Prerequisites: 'None'
    },
    {
      id: 5,
      name: 'ENTR 4433 - Business Plan Development',
      description: 'Students will be able to prepare and present a solid business plan for a new or existing enterprise. Areas covered will include identifying and assessing opportunities, developing a winning strategy, identifying resource requirements and selling the plan to financing sources.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s) MKTG 2150, ACCT 3224 and one of MGMT 2130, ENTR 2301, SINV 2201.'
    },
    {
      id: 6,
      name: 'FNCE 3227 - Introduction to Finance',
      description: 'This course provides an introduction to the theory, methods, and issues of finance. The main topics include the following: 1) time value of money and capital budgeting techniques; 2) uncertainty and the trade-off between risk and return; 3) security market efficiency; 4) optimal capital structure; 5) dividend policy decisions; 6) financial planning and working capital management; and 7) long term financing considerations including leasing.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): ACCT2121'
    },
    {
      id: 7,
      name: 'HRES 2170 - Introduction to Human Resources',
      description: 'This course will introduce students to the various elements of Human Resources management. In addition to the functional areas within HR, students will focus on the legal, ethical, and strategic HR management issues. Contemporary HR issues will also be discussed.',
      Credits: 'Credits: (3)',
      Prerequisites: 'None'
    },
    {
      id: 8,
      name: 'INBU 3301 - Global Business Environment',
      description: 'This course is an introduction to the field of international business: national economic, political and cultural differences; the issues surrounding globalization; the role of international institutions in facilitating international trade; international trade agreements; the international monetary system; current international business trends and developments. The course will stress Canada’s place in the global economy and the challenges Canadian businesses face in doing international business.',
      Credits: 'Credits: (3)',
      Prerequisites: 'None'
    },
    {
      id: 9,
      name: 'LSCM 3403 - Operations Management',
      description: 'This course is a survey of the decision processes in production and operations management, and the relationship to other business areas. Topics covered include forecasting, product and service design, capacity planning, waiting line models, facility location and layout, process selection, design of work systems, linear optimization, quality inspection and control, life cycle management, inventory management, aggregate planning, material requirements planning, project operations management, and operations scheduling.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None'
    },
    {
      id: 10,
      name: 'MGMT 2262 - Statistics and Analytics for Business',
      description: 'Students are introduced to how data can be used to better understand business situations and to make evidence-based decisions. Topics include collecting data; cleaning and organizing data; making sense of data through visual and numerical summaries; utilizing linear regression to model business situations; introduction to decision analysis using probabilities, and drawing inferences using hypothesis tests and confidence intervals. This course emphasizes the application of statistical analysis to business situations, the understanding of which will be further enhanced through exposure to current statistical computer software.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None'
    },
    {
      id: 11,
      name: 'MGMT 3210 - Business Communication Theory and Practice',
      description: 'Students will develop their abilities for writing business letters, memoranda, reports, and for preparing and delivering oral presentations. Students will develop an understanding of strategic communications by exploring both internal and external organizational communication strategies.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): ENGL 1101/GNED 1401 or GNED 1403 or GNED 1404.'
    },
    {
      id: 12,
      name: 'MGMT 3230 - Business Law',
      description: 'Students will gain experience in legal problem solving with emphasis on legal issues involving business. The core of the course requires critical legal thinking in the following areas: agreements, liability, property rights, constitutional rights, and different ways to set-up businesses and non-profit activities. Additional topics will vary from semester to semester and may include crime, consumer protection, commercial transactions, creditor and debtor relations, and other timely legal topics.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None.'
    },
    {
      id: 13,
      name: 'MGMT 3276 - Organizational Behaviour',
      description: 'This course provides an examination of the behaviour of people in organizations. Emphasis will be placed on the application of theory through group interaction and case studies. Topics include: individual behaviour, group behaviour, leadership, motivation, conflict resolution, and organizational culture.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): MGMT 2130 or MGMT 2131 or ENTR 2301 or SINV 2201.'
    },
    {
      id: 14,
      name: 'MGMT 5333 - Strategic Management',
      description: 'This capstone course develops the conceptual and applied skills associated with analyzing a competitive situation from a general management point of view. It addresses issues affecting the fundamental direction of the firm, considers the formulation and implementation of strategy, focuses on the extent to which different aspects of the firm fit with key environmental forces, and discusses the organization’s ability to leverage its unique core competencies. The course views the organization holistically and, as such, goes beyond the mere integration of specific organizational functions.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): MGMT 3276, MKTG 2150, HRES 2170, ACCT 3224, and FNCE 3227.'
    },
    {
      id: 15,
      name: 'MKTG 2150 - Introduction to Marketing',
      description: 'This course provides an introduction to the fundamental concepts and principles of marketing including an introduction to the 4 P’s or marketing mix - product, price, place and promotion. Upon successful completion of this course, the student will have the ability to: evaluate customer wants and needs; analyze and interpret market research; link trends in the environment to marketing decisions; develop a customer or target market profile for a product (good, service or idea); and communicate a marketing strategy effectively in visual, verbal and written formats. This course serves as the foundation for subsequent marketing courses.',
      Credits: 'Credits: (3)',
      Prerequisites: 'Prerequisite(s): None.'
    },
    {
      id: 16,
      name: 'ENTR 2301 - Innovation and the Entrepreneurial Experience',
      description: 'This experiential course develops an understanding of innovation and builds awareness of the practical experiences of entrepreneurs. Students participate in experiential activities and competitions, and learn using a practical framework that integrates current research, practice and lessons learned from people who have started impactful businesses with limited resources.',
      Credits: 'Credits: (3)',
      Prerequisites: 'None'
    },
    {
        id: 17,
        name: 'MGMT 2130 - Management Principles and Practices',
        description: 'This course is a comprehensive and practical study of the major functions that comprise management processes, and the constraints within which the manager must operate. The focus (through the use of case studies and experiential exercises) is on how to perform these functions in an ethical and socially responsible manner to maximize productivity within the constraints of the organizational environment. A strong emphasis is put on understanding and identifying ethical dilemmas in the business world.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },

      {
        id: 18,
        name: 'SINV 2201 - Introduction to Social Innovation',
        description: 'This course introduces social innovation and values-centred management in Canada. It explores the history of the values-driven business sector, the public sector, Indigenous and treaty-based worldviews, the social economy, community, volunteer, nonprofit organizations and their activities.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): None'
      },  
      {
        id: 18,
        name: 'ACCT 3220 - Financial Accounting Practices',
        description: 'This course builds on the concepts and skills learned in introductory accounting and prepares the student for the more conceptual approach required for Intermediate Accounting. Students learn to apply the accounting framework, and further develop skills for recording transactions and events, and analyzing financial statements. Topics include revenue recognition, long-term liabilities, partnership accounting, shareholders’ equity, investments, and the cash flow statement.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 2121'
      },
      {
        id: 19,
        name: 'ACCT 3221 - Intermediate Accounting I',
        description: 'This course examines issues and problems related to GAAP for income determination and revenue recognition. International Financial Reporting Standards (IFRS) and Accounting standards for Private Enterprises (ASPE) relating to recognition, measurement, and financial statement presentation of assets are addressed.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3220'
      },
      {
        id: 20,
        name: 'ACCT 3228 - Management Accounting II',
        description: 'This course examines various costing methods and analytical tools used by management accountants to provide information and recommendations relevant to short-term and long-term decision making. Topics covered include capital budgeting, cost and revenue allocation, profitability variances, process costing, and inventory management.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3224'
      },
      {
        id: 21,
        name: 'ACCT 4222 - Intermediate Accounting II',
        description: 'This course provides an in-depth analysis of accounting theory and principles related to the reporting of short-term and long-term liabilities, leases, pensions, corporate income taxes, shareholders’ equity, complex financial instruments, earnings per share, the cash flow statement, and accounting changes and error analysis. International Financial Reporting Standards (IFRS) and Accounting Standards for Private Enterprises (ASPE) relating to recognition, measurement, and financial statement presentation of liabilities and equity are addressed.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3221.'
      },
      {
        id: 22,
        name: 'ACCT 4280 - Introduction to Personal and Corporate Income Tax',
        description: 'This course covers Canadian income tax laws affecting individuals and corporations. Topics include the computation of individual and corporate income tax, taxable income, taxes payable, corporate distributions, taxation of capital gains,and the preparation of corporate and personal tax returns.',
        Credits: 'Credits: (3)',
        Prerequisites: '3220.'
      },
      {
        id: 23,
        name: 'MGMT 3265 - Management Information Systems',
        description: 'This course focuses on the role of information technology in an organization and its application to business problems. Techniques for designing, implementing and managing information systems are presented. Topics covered include hardware and software, file management, database organization, networking and telecommunications, systems development and design, flowcharting, system security, backup and recovery, and artificial intelligence.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): MGMT 2262'
      },
      {
        id: 24,
        name: 'ACCT 3227 - Oil and Gas Accounting',
        description: 'Students are provided with an introduction to the accounting principles and practices associated with oil and gas exploration and production. The impact of income and other taxes on the industry is also considered.', 
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): A minimum grade of “C-” in all of COMP 2631, COMP 2521, and MATH 2234.'
      },
      {
        id: 24,
        name: 'COMP 4622 - Advanced Databases',
        description: 'This course covers advanced topics and techniques for using relational databases and introduces distributed databases and distributed transactions. Databases using models other than relational are introduced.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3224'
      },
      {
        id: 25,
        name: 'ACCT 3730 - Special Topics in Accounting<',
        description: 'This course provides an examination of selected topics in Accounting. As this is a variable content course, the specific topic will be announced and advertised each time it is offered.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3224'
      },
      {
        id: 26,
        name: 'ACCT 4225 - Principles of Auditing',
        description: 'This course examines the role of the internal or external auditor in business and explores the legal and ethical environment of auditing. Emphasis is placed on methods and procedures used in auditing and reporting as they relate to specific financial statement areas such as assets, liabilities, equities, revenues, and expenses. Other topics covered include internal control, risk and materiality, and the auditor’s responsibility with respect to fraud.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 4222'
      },
      {
        id: 27,
        name: 'ACCT 4381 - Advanced Financial Accounting',
        description: 'This is a senior level course in financial accounting, which covers the following areas: intercompany investments, joint ventures, accounting for not-for-profit organizations, and translation of foreign currency transactions and financial statements.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 4222'
      },
      {
        id: 28,
        name: 'ACCT 4382 - Advanced Managerial Accounting',
        description: 'This course examines advanced management accounting practices designed to help managers formulate and implement new strategies, motivate and evaluate organizational performance, and achieve operational excellence. This course emphasizes current management accounting practices within a variety of business environments using a case approach. These practices include the theory of constraints, activity-based management, cost-based decision making, and the balanced scorecard.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3228'
      },
      {
        id: 29,
        name: 'ACCT 4403 - Accounting Theory',
        description: 'This course provides an overview of contemporary accounting theory and research, and explores how these theories and research are applied in the development and practice of the accounting profession. Emerging, thought-provoking issues in the field of accounting are discussed.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 3221 and ACCT 3224'
    },
    {
        id: 30,
        name: 'ACCT 5370 - Advanced Topics in Accounting',
        description: 'This capstone course in Accounting integrates concepts learned in earlier core accounting courses with accounting theory, corporate governance, strategy, sustainability, corporate social responsibility and business ethics. A case-analysis approach is used to identify issues relating to financial and managerial accounting, audit and taxation, evaluate alternatives and exercise professional judgment in making recommendations. Students will apply advanced financial statement analysis to the corporate annual report and critically examine the application of the accounting rules and policies by the company.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): ACCT 4222 and ACCT 4280'
    },
    {
        id: 31,
        name: 'FNCE 3228 - Advanced Corporate Finance',
        description: 'This course is intended to consolidate students’ understanding of the theories and practices of effective financial decision-making in a corporate environment, and to assess the impact of these decisions on the firm’s performance. Course coverage includes the economic theory of the firm, advanced capital budgeting concepts, stakeholder conflicts, and mergers and acquisitions. Special attention will be paid to developing a comprehensive approach to solving financial problems. Real world examples and financial modeling will be used throughout the course to give an applied context to the subject matter.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): FNCE 3227.'
    },
    {
        id: 32,
        name: 'FNCE 3304 - Business and Financial Modeling',
        description: 'This course develops the skills associated with using spreadsheets as tools for applying basic theories and concepts from finance and accounting in order to facilitate business and financial decision making. These techniques may include financial statement analysis, data analysis, forecasting, asset evaluation, capital budgeting, and risk assessment.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): FNCE 3227'
    },
    {
        id: 33,
        name: 'MGMT 2263 - Business Statistics for Decision-Making',
        description: 'This is the second course in applied statistical analysis as offered in the Bissett School of Business. This course examines inferential statistical analysis while emphasizing thinking skills and business decision-making. Topics include parametric and nonparametric hypothesis testing procedures. Time series and statistical process control will also be examined and applied to business situations. The understanding of the course material will be further enhanced through exposure to both manual and computerized methods using current statistical computer software.',
        Credits: 'Credits: (3)',
        Prerequisites: 'Prerequisite(s): MGMT 2262  or MATH 1224.'
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