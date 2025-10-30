import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Современная платформа для онлайн-торговли с интеграцией платежей",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Безопасное мобильное приложение для управления финансами",
      tags: ["React Native", "TypeScript", "Firebase"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Дашборд с AI-аналитикой и визуализацией данных в реальном времени",
      tags: ["Python", "TensorFlow", "React"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Social Media Manager",
      description: "Инструмент для управления несколькими социальными сетями",
      tags: ["Vue.js", "GraphQL", "MongoDB"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const skills = [
    { name: "React & TypeScript", level: 95, color: "bg-primary" },
    { name: "Node.js & Express", level: 90, color: "bg-secondary" },
    { name: "UI/UX Design", level: 85, color: "bg-accent" },
    { name: "Python & AI/ML", level: 80, color: "bg-primary" },
    { name: "Database Design", level: 88, color: "bg-secondary" }
  ];

  const achievements = [
    { icon: "Trophy", value: "50+", label: "Проектов" },
    { icon: "Users", value: "100K+", label: "Пользователей" },
    { icon: "Award", value: "15", label: "Наград" },
    { icon: "Star", value: "4.9", label: "Рейтинг" }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Обо мне</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-glow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 border-primary/50">
                <Icon name="Sparkles" className="mr-2" size={16} />
                Доступен для проектов
              </Badge>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-heading font-black mb-6 animate-fade-in-delay">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Креативный
              </span>
              <br />
              <span className="text-foreground">Разработчик</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delay">
              Создаю впечатляющие цифровые продукты, которые решают реальные проблемы 
              и вдохновляют пользователей
            </p>
            
            <div className="flex gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection('portfolio')}
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Смотреть работы
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-lg px-8"
                onClick={() => scrollToSection('about')}
              >
                <Icon name="User" className="mr-2" size={20} />
                Обо мне
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-secondary/20 border-secondary/50">
              <Icon name="Briefcase" className="mr-2" size={14} />
              Портфолио
            </Badge>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Избранные <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Проекты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подборка моих лучших работ, демонстрирующих разнообразие навыков и подходов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group cursor-pointer bg-card/50 backdrop-blur border-border/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                  activeProject === project.id ? 'ring-2 ring-primary' : ''
                }`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon name="Code" size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-accent/20 border-accent/50">
                <Icon name="User" className="mr-2" size={14} />
                Обо мне
              </Badge>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Навыки & <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Опыт</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Технические навыки</h3>
                </div>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Icon name="Target" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Опыт работы</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6 pb-6">
                    <div className="text-sm text-primary font-semibold mb-1">2022 - Настоящее время</div>
                    <h4 className="font-heading font-bold text-lg mb-2">Senior Full-Stack Developer</h4>
                    <p className="text-muted-foreground text-sm">
                      Разработка сложных веб-приложений с использованием современных технологий
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-secondary pl-6 pb-6">
                    <div className="text-sm text-secondary font-semibold mb-1">2020 - 2022</div>
                    <h4 className="font-heading font-bold text-lg mb-2">Lead Frontend Developer</h4>
                    <p className="text-muted-foreground text-sm">
                      Руководство командой разработчиков, создание UI/UX решений
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-accent pl-6">
                    <div className="text-sm text-accent font-semibold mb-1">2018 - 2020</div>
                    <h4 className="font-heading font-bold text-lg mb-2">Full-Stack Developer</h4>
                    <p className="text-muted-foreground text-sm">
                      Разработка веб-приложений от концепции до релиза
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 p-12 text-center">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Готовы начать проект?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Давайте создадим что-то удивительное вместе! Свяжитесь со мной для обсуждения вашей идеи
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Написать мне
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать CV
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground">
              © 2024 Portfolio. Создано с 💜
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
