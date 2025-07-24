<script>
  import { Sun, Moon, ExternalLink, Github, Linkedin, Briefcase, Trophy, Rocket, GraduationCap, Globe } from 'lucide-svelte';
  
  let darkMode = $state(false);

  function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  const techStack = [
    { name: 'Laravel', src: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
    { name: 'FastAPI', src: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg' },
    { name: 'Svelte', src: 'https://cdn.worldvectorlogo.com/logos/svelte-1.svg' },
    { name: 'Python', src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Lua', src: 'https://cdn.worldvectorlogo.com/logos/lua-5.svg' },
    { name: 'PHP', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
    { name: 'R', src: 'https://camo.githubusercontent.com/21b60c93f74a3eddd8330231e66f6678c42d6bfb36f3c623d8242d3349f3a61f/68747470733a2f2f7777772e722d70726f6a6563742e6f72672f6c6f676f2f526c6f676f2e737667' },
    { name: 'Dart', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg' },
    { name: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
    { name: 'Flutter', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
    { name: 'Bash', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg' },
    { name: 'MySQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
    { name: 'MSSQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg' },
    { name: 'Firebase', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
    { name: 'Supabase', src: 'https://camo.githubusercontent.com/6738036cf283e82de376da01bfc26bba369d45560f56d3d2c8350e4d86f91cef/68747470733a2f2f63662e617070647261672e636f6d2f64617368626f6172642d6f70656e766d2d636c6f2d6232643432632f75706c6f6164732f73757061626173652d544169592e706e67' },
    { name: 'Neovim', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/neovim/neovim-original.svg' },
    { name: 'Tmux', src: 'https://camo.githubusercontent.com/65e03b28ad137fbef2302979b9f4da7f6b7ed61c66d952920b59d8270eba5d42/68747470733a2f2f7365656b6c6f676f2e636f6d2f696d616765732f542f746d75782d6c6f676f2d453731353233333838412d7365656b6c6f676f2e636f6d2e706e67' },
    { name: 'Git', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'BitBucket', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg' }
  ];

  const experiences = [
    {
      title: 'Lecturer - Part Time at University of Mindanao',
      period: 'Aug 2024 - Present',
      description: 'Lectures programming language like java, python. Also teaching theories of machine learning and software development',
      technologies: ['Java', 'Python', 'REST', 'FastAPI', 'Neovim', 'Tmux']
    },
    {
      title: 'Software Developer at Infosoft Studio',
      period: 'Jan 2024 - Aug 2024',
      description: 'Contributed to the development of an records archiving platform, barangay profiling system, legistlative tracking system. Assisted in API development and database design.',
      technologies: ['ASP.Net', 'PostgreSQL', 'REST', 'Vue.js', 'Bash', 'Neovim', 'Tmux']
    },
    {
      title: 'Software Developer Intern at Media One Software Solutions',
      period: 'June 2023 - Jul 2023',
      description: 'Contributed to the development of an Internal Permit to work checklist system. Assisted in API development and database design.',
      technologies: ['React.js', 'Laravel', 'REST', 'MySql', 'Tmux', 'Neovim', 'Tmux']
    },
    {
      title: 'Software Developer at Vinta Yearbook (University of Mindanao Yearbook Publication)',
      period: 'Oct 2023 - Aug 2024',
      description: 'Contributed to the development of an Landing page for yearbook promotions and data gathering, data cleaning, Legacy system maintainance, task automation using windows . Assisted in API development and database design.',
      technologies: ['React.js', 'Firebase', 'MySql', 'Wix', 'Python', 'Tmux', 'Neovim', 'Tmux']
    }
  ];

  const certifications = [
    {
      title: 'IT Specialist - HTML and CSS',
      issuer: 'Cretiport',
      date: 'June 2023',
      description: 'Demonstrate that they can structure a webpage using HTML elements and create and apply styles using CSS.',
      badge: 'https://images.credly.com/images/49a492cd-5f72-4c9d-aafa-06649e4853fb/MicrosoftTeams-image__5_.png'
    },
    {
      title: 'IT Specialist - Databases',
      issuer: 'Cretiport',
      date: 'June 2023',
      description: 'Demonstrate foundational knowledge of how to design and query relational databases, such as MySQL, Microsoft SQL Server, or Oracle.',
      badge: 'https://images.credly.com/images/49a492cd-5f72-4c9d-aafa-06649e4853fb/MicrosoftTeams-image__5_.png'
    }
  ];

  const projects = [
    {
      title: 'Vinta Yearbook',
      description: 'A yearbook publication of University of Mindanao landing page and data gathering.',
      completedDate: '2024-02-05',
      technologies: ['React', 'Vite', 'Firebase', 'Million.js']
    },
    {
      title: 'Vinta Yearbook System',
      description: 'A yearbook publication of University of Mindanao interal system for data gathering, photoshoot schedule, and payment management exclusive for University of Mindanao Students.',
      completedDate: '2025-07-01',
      technologies: ['React', 'Laravel', 'Inertia', 'PostgreSQL', 'Docker', 'Cloudflare', 'Nginx']
    },
    {
      title: 'PKCS12 Digital Signature',
      description: 'Automated digital signature for PDF documents, embedding metadata that verifies if the signature is valid',
      completedDate: '2024-06-25',
      technologies: ['Python', 'PDF', 'OpenSSL']
    },
    {
      title: 'NBA Comparison App',
      description: 'Identify the top 3 players with the most similar performance profiles based on basketball stats.',
      completedDate: '2025-07-01',
      technologies: ['Python', 'Scikit Learn', 'Streamlit', 'Pandas', 'NumPy']
    },
    {
      title: 'DFE Store Web Scrapper',
      description: 'Web scrapper tool for dfe store\'s product catalog',
      completedDate: '2025-05-08',
      technologies: ['Python', 'BeautifulSoup', 'CSV']
    },
    {
      title: 'Titanic Survival Classification',
      description: 'Utilizing titanic dataset to classify chance of survival on titanic accident.',
      completedDate: '2025-06-30',
      technologies: ['Python', 'Scikit Learn', 'Streamlit', 'Pandas', 'NumPy']
    }
  ];

  const education = [
    {
      institution: 'University of Mindanao',
      degree: 'Bachelor of Science in Computer Science',
      period: '2020 - 2024',
      description: 'Focused on software development, algorithms, and data structures. Participated in Technoprenuershup and research projects. Graduated Magna Cum Laude. GPA 3.47'
    },
    {
      institution: 'University of Mindanao',
      degree: 'Senior High School in Science, Technology, Engineering, Mathematics (STEM)',
      period: '2018 - 2020',
      description: 'Excelled in mathematics,science and technology. Graduated with honors.'
    },
    {
      institution: 'Jesus J. Soriano National High School',
      degree: 'Junior High School',
      period: '2014 - 2018',
      description: 'Excelled in mathematics,science and technology. Graduated with honors.'
    }
  ];
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
  <!-- Header -->
  <div class="flex items-center justify-between max-w-screen-md mx-auto h-16 px-4">
    <h1 class="dark:text-white text-center text-xl font-semibold">_Kdimz</h1>
    <button 
      onclick={toggleTheme}
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm h-9 w-9"
    >
      {#if darkMode}
        <Moon class="h-[1.2rem] w-[1.2rem]" />
      {:else}
        <Sun class="h-[1.2rem] w-[1.2rem]" />
      {/if}
      <span class="sr-only">Toggle theme</span>
    </button>
  </div>

  <!-- About Me Section -->
  <div class="card-container">
    <h3 class="text-2xl font-bold flex items-center gap-2">
      👨🏽‍💻 About Me
    </h3>
    <p class="leading-relaxed dark:text-gray-300">
      Hi, I'm Juliane Kyle B. Dimzon — a software engineer specializing in web development, data science, and machine learning. I build clean, efficient web tools that turn complex data into clear, actionable insights — helping teams save time, reduce errors, and make smarter decisions.
    </p>
    <p class="leading-relaxed dark:text-gray-300">
      One of my recent projects involved developing a full system for a yearbook publishing office: automating data collection, managing solicitations, and scheduling pictorials — streamlining their workflow from start to finish.
    </p>
    <p class="leading-relaxed dark:text-gray-300">
      I'm always exploring emerging technologies to keep my projects innovative and future-ready. If you're looking to streamline your next project, let's connect!
    </p>
  </div>

  <!-- Technology Stack Section -->
  <div class="card-container">
    <h3 class="text-lg font-semibold mb-3 self-start flex items-center gap-2">
      🖥️ Technology Stack
    </h3>
    <div class="flex flex-wrap justify-center gap-4">
      {#each techStack as tech}
        <img class="w-12 h-12" src={tech.src || "/placeholder.svg"} alt="{tech.name} Logo" />
      {/each}
    </div>
  </div>

  <!-- Experience Section -->
  <div class="card-container">
    <h3 class="text-xl font-semibold flex items-center gap-2">
      <Briefcase class="w-5 h-5" />
      Experience
    </h3>
    {#each experiences as exp}
      <div class="space-y-2">
        <h4 class="text-lg font-semibold dark:text-white">{exp.title}</h4>
        <p class="text-sm text-gray-500">{exp.period}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each exp.technologies as tech}
            <span class="px-3 py-1 border border-gray-300 rounded-full text-sm dark:border-gray-600 dark:text-gray-300">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <!-- Certifications Section -->
  <div class="card-container">
    <h3 class="text-xl font-semibold flex items-center gap-2">
      <Trophy class="w-5 h-5" />
      Certifications
    </h3>
    {#each certifications as cert}
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0">
        <div class="flex items-center space-x-4">
          <img class="w-32 h-32 object-contain" src={cert.badge || "/placeholder.svg"} alt="{cert.title} badge" />
          <div class="flex flex-col space-y-2">
            <h4 class="text-lg font-semibold dark:text-white">{cert.title}</h4>
            <p class="text-sm font-medium dark:text-gray-300">{cert.issuer}</p>
            <p class="text-sm text-gray-500">{cert.date}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
          </div>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm h-8 rounded-md px-3 text-xs mt-4 md:mt-0">
          Link <ExternalLink class="h-[1.2rem] w-[1.2rem] ml-1" />
        </button>
      </div>
    {/each}
  </div>

  <!-- Projects Section -->
  <div class="card-container">
    <h3 class="text-xl font-semibold flex items-center gap-2">
      <Rocket class="w-5 h-5" />
      Projects
    </h3>
    {#each projects as project}
      <div class="space-y-4">
        <h4 class="text-lg font-semibold dark:text-white">{project.title}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        <p class="text-sm text-gray-500">Completed on: {project.completedDate}</p>
        <div class="flex flex-wrap gap-2">
          {#each project.technologies as tech}
            <span class="px-3 py-1 border border-gray-300 rounded-full text-sm dark:border-gray-600 dark:text-gray-300">{tech}</span>
          {/each}
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm h-8 rounded-md px-3 text-xs mt-4">
          Link <ExternalLink class="h-[1.2rem] w-[1.2rem] ml-1" />
        </button>
      </div>
    {/each}
  </div>

  <!-- Education Section -->
  <div class="card-container">
    <h3 class="text-xl font-semibold flex items-center gap-2">
      <GraduationCap class="w-5 h-5" />
      Education
    </h3>
    {#each education as edu}
      <div class="space-y-2">
        <h4 class="text-lg font-semibold dark:text-white">{edu.institution}</h4>
        <p class="text-sm font-medium dark:text-gray-300">{edu.degree}</p>
        <p class="text-sm text-gray-500">{edu.period}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
      </div>
    {/each}
  </div>

  <!-- Socials Section -->
  <div class="card-container">
    <h3 class="text-xl font-semibold self-start flex items-center gap-2">
      <Globe class="w-5 h-5" />
      Socials
    </h3>
    <a 
      href="https://github.com/wbert" 
      target="_blank"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-9 px-4 py-2 w-full bg-gray-900 text-white hover:bg-gray-800"
    >
      <Github class="w-4 h-4 mr-2" />
      Github
    </a>
    <a 
      href="https://www.linkedin.com/in/wilbert-josh-alfornon-0582a927b/" 
      target="_blank"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-9 px-4 py-2 w-full bg-gray-900 text-white hover:bg-gray-800"
    >
      <Linkedin class="w-4 h-4 mr-2" />
      Linkedin
    </a>
  </div>

  <!-- Footer -->
  <div class="flex items-center justify-start max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 mb-3 py-4 space-y-3 mx-3">
    <p class="flex items-center text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300">
      Powered by 
      <img src="https://cdn.worldvectorlogo.com/logos/svelte-1.svg" alt="Svelte" class="h-6 w-6 ml-1" />
      <span class="ml-1">&nbsp;wbert © 2025</span>
      <span class="ml-1">All Rights Reserved.</span>
    </p>
  </div>
</div>

<style>
  :global(html) {
    font-family: system-ui, sans-serif;
  }
  
  :global(.dark) {
    color-scheme: dark;
  }
  
  :global(.dark *) {
    border-color: rgb(75 85 99) !important;
  }
  
  :global(.dark .bg-background) {
    background-color: rgb(17 24 39) !important;
  }
  
  :global(.dark .hover\:bg-accent:hover) {
    background-color: rgb(55 65 81) !important;
  }

  :global(.card-container) {
    flex: flex-col items-start justify-between max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-6 py-6 space-y-4 mx-3 mb-4;
    background: linear-gradient(145deg, #ffffff, #f8fafc);
    border: 2px solid transparent;
    border-radius: 16px;
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    transition: all 0.3s ease;
  }

  :global(.card-container::before) {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(145deg, #3b82f6, #8b5cf6, #06b6d4);
    border-radius: 16px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  :global(.card-container:hover::before) {
    opacity: 1;
  }

  :global(.card-container:hover) {
    transform: translateY(-2px);
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  :global(.dark .card-container) {
    background: linear-gradient(145deg, #1f2937, #111827);
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.3),
      0 2px 4px -1px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  :global(.dark .card-container:hover) {
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.4),
      0 4px 6px -2px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
</style>
