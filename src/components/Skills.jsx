import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Lightbulb, Smartphone, Database, Server, Layers, Cpu, Users } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 'engineering',
      title: "Full-Stack Engineering",
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      description: "Building scalable Web & Mobile Apps from requirements to production.",
      color: "blue",
      skills: [
        { name: "Python", type: "lang" }, { name: "Java", type: "lang" }, { name: "JavaScript", type: "lang" },
        { name: "React.js", type: "front" }, { name: "React Native", type: "front" }, { name: "Tailwind CSS", type: "front" },
        { name: "Spring Boot", type: "back" }, { name: "Laravel", type: "back" }, { name: "Node.js", type: "back" },
        { name: "MySQL", type: "db" }, { name: "MongoDB", type: "db" }, { name: "Firestore", type: "db" }
      ]
    },
    {
      id: 'ai',
      title: "AI & Generative Tech",
      icon: <BrainCircuit className="w-8 h-8 text-violet-400" />,
      description: "Bridging the gap between theoretical AI and practical business solutions.",
      color: "violet",
      skills: [
        { name: "Machine Learning", type: "core" }, { name: "Deep Learning", type: "core" }, { name: "Neural Networks", type: "core" },
        { name: "LLMs (Gemini)", type: "mod" }, { name: "Generative AI", type: "mod" }, { name: "RAG Pipelines", type: "mod" },
        { name: "TensorFlow", type: "tool" }, { name: "PyTorch", type: "tool" }, { name: "LangGraph", type: "tool" }
      ]
    },
    {
      id: 'leadership',
      title: "Leadership & Strategy",
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
      description: "Mentoring developers and translating complex ideas into actionable roadmaps.",
      color: "amber",
      skills: [
        { name: "AI/ML Teaching", type: "lead" }, { name: "Curriculum Design", type: "lead" }, { name: "Tech Mentoring", type: "lead" },
        { name: "System Architecture", type: "prod" }, { name: "Agile/Scrum", type: "prod" }, { name: "Requirement Analysis", type: "prod" }
      ],
      quote: "Converting Ideas into Tech Products"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-500/50",
      violet: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-500/50",
      amber: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-500/50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section name="skills" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-amber-400">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From writing code to training models and mentoring the next generation.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-500 ${hoveredCategory && hoveredCategory !== category.id ? 'opacity-40 scale-95 blur-[1px]' : 'opacity-100 scale-100'
                } hover:border-white/20 hover:shadow-2xl hover:shadow-${category.color}-500/10`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-${category.color}-500/10 border border-${category.color}-500/20`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <p className="text-slate-400 mb-8 min-h-[3rem]">
                {category.description}
              </p>

              {/* Quote for Leadership */}
              {category.quote && (
                <div className="mb-8 p-4 bg-amber-500/5 border-l-2 border-amber-500/50 rounded-r-lg">
                  <p className="text-amber-200/80 italic text-sm">"{category.quote}"</p>
                </div>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (idx * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-default ${getColorClasses(category.color)}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Background Decoration */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-${category.color}-500/10 rounded-full blur-3xl pointer-events-none`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
