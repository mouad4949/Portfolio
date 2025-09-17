export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#exp" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Advancing my skills in microservices and DevOps",
      
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 cover bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/exp4.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Fintech Platform",
      des: "Led DevOps for a FinTech platform, managing CI/CD, AWS, and Kubernetes to deploy secure microservices with Kafka.",
      img: "/asmas.png",
      iconLists: ["/kubernetes.svg", "/aws.svg", "/terraform.svg","/jenkins.svg","/dock.svg"],
      link: "https://github.com/projet-fintech",
    },
    {
      id: 2,
      title: "Business Intelligence for E-commerce",
      des: "Built an End-to-end e-commerce analytics with Shopify scraping, ML Top-K selection, LLM insights, and Streamlit dashboard, deployed via Docker/Kubernetes.",
      img: "/ecom.png",
      iconLists: ["/str.png","/kubernetes.svg","/python.svg", "/dock.svg"],
      link: "https://github.com/topk-intelligent-system",
    },
    {
      id: 3,
      title: "EEG Seizure Detection System",
      des: "Real-time epileptic seizure detection system using EEG signals, processing data via MQTT, predicting seizures with a machine learning model, and visualizing results on an interactive web interface.",
      img: "/EEG.png",
      iconLists: ["/python.svg", "/react.svg"],
      link: "https://github.com/ScienceWeek02",
    },
    {
      id: 4,
      title: "School Agents for Guided Learning",
      des: "ASAG is an educational platform using LLM-powered agents to generate Arabic exercises and instantly evaluate student responses.",
      img: "/agentic.png",
      iconLists: ["/python.svg","/react.svg"],
      link: "https://github.com/Educational-LLM-Unity",
    },
    {
      id: 5,
      title: "Oracle Database Administration App",
      des: "Built a Spring Boot&React app for OracleDB management with TDE, VPD, RMAN, and performance tuning.",
      img: "/oracleDB.jpg",
      iconLists: ["/oracle.svg","/plsql.svg","/spring.svg", "/react.svg"],
      link: "https://github.com/mouad4949/Oracle-Admin-WEB-PROJECT",
    },
    {
      id: 6,
      title: "Bank Management Web Application",
      des: "Developed a bank management app for accounts, transactions, and clients using React and Spring Boot.",
      img: "/Bank.jpeg",
      iconLists: ["/spring.svg", "/tail.svg", "/react.svg"],
      link: "https://github.com/mouad4949/Bank_LSI",
    },
    {
      id: 7,
      title: "Online Booking System for Aeroclub",
      des: "Developed a platform for booking discovery and initiation flights, with automated pricing and secure payment integration.",
      img: "/aeroclub.jpeg",
      iconLists: ["/dj.svg", "/tail.svg", "/js.svg", "/paypal.svg"],
      link: "https://github.com/mouad4949/Aeroclub_siteweb",
    },
    {
      id: 8,
      title: "Lendys Café SaaS Management System",
      des: "Developed and sold a SaaS platform for managing reservations, orders, and payments at Lendys Café.",
      img: "/lendys.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/paypal.svg"],
      link: "https://lendys.ma/",
    },
    {
      id: 9,
      title: "E-commerce Platform with PayPal Integration",
      des: "A Symfony-based e-commerce solution featuring seamless PayPal payment integration for a smooth shopping experience.",
      img: "/ecomm.png",
      iconLists: ["/php.svg", "/symfony.svg", "/js.svg", "/bootstrap.svg", "/paypal.svg"],
      link: "https://github.com/mouad4949/Ecommerce_WebSite",
    },
    {
      id: 10,
      title: "2D Video Game with Pathfinding",
      des: "A 2D Unity game featuring advanced pathfinding mechanics for dynamic character movement and AI navigation.",
      img: "/game.png",
      iconLists: ["/unity.svg"],
      link: "https://github.com/mouad4949/Game-DataStructers-",
    },
    {
      id: 11,
      title: "Hotel Management System",
      des: "A web app for managing hotel bookings, billing, and guest services efficiently.",
      img: "/hotel.png",
      iconLists: ["/php.svg", "/tail.svg", "/js.svg"],
      link: "https://github.com/mouad4949/Gestion-d-hotel",
    },
    {
      id: 12,
      title: " Gaming Club Management System",
      des: "A web app for managing gaming club memberships, events, and player profiles efficiently.",
      img: "/gaming.png",
      iconLists: ["/php.svg", "/bootstrap.svg", "/js.svg"],
      link: "https://github.com/mouad4949/Club-Gaming",
    },
    
  ];
  export const tech = [
    {
      imageUrl:"dj.svg",
    },
    
    {
      imageUrl:"spring.svg",
    },
    {
      imageUrl:"laravel.svg",
    },
    {
      imageUrl:"symfony.svg",
    },
    {
      imageUrl:"java.svg",
    },
    {
      imageUrl:"python.svg",
    },
    {
      imageUrl:"react.svg",
    },
    {
      imageUrl:"angular.svg",
    },
    {
      imageUrl:"next.svg",
    },
    {
      imageUrl:"tailwind.svg",
    },
    
   
  ];
  
  export const dep = [
    {
      imageUrl:"kubernetes.svg",
    },
    {
      imageUrl:"aws.svg",
    },
    {
      imageUrl:"Oracle_Cloud.jpg",
    },
    {
      imageUrl:"terraform.svg",
    },
    {
      imageUrl:"jenkins.svg",
    },
    {
      imageUrl:"ansible.svg",
    },
    {
      imageUrl:"docker.svg",
    },
    {
      imageUrl:"cpanel.svg",
    },
    {
      imageUrl:"ver.png",
    },
    {
      imageUrl:"heroku.svg",
    },
    {
      imageUrl:"git.svg",
    },
    
    
   
  ];
  
  
  
  
  
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/github.svg",
      link:"https://github.com/mouad4949",
    },
    
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/mouad-rguibi-a9969b265/",
    },
  ];