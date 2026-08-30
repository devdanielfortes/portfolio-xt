'use client'

import { useState } from 'react'
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  Code2Icon,
  MailIcon,
  MenuIcon,
  MessageCircleIcon,
  SparklesIcon,
  XIcon,
} from 'lucide-react'

const whatsappNumber = '5511999999999'
const whatsappMessage = encodeURIComponent('Olá, Rafael! Vi seu portfolio e gostaria de conversar sobre um projeto.')

const projects = [
  { title: 'Nexus Finance', type: 'Produto digital · Fintech', year: '2024', description: 'Plataforma de gestão financeira com dashboards em tempo real, automações e uma experiência feita para simplificar decisões complexas.', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], color: 'sage', metric: '+42% conversão' },
  { title: 'Cora Studio', type: 'E-commerce · Lifestyle', year: '2023', description: 'Uma experiência de compra editorial para uma marca em crescimento, do catálogo ao checkout sem perder personalidade.', tags: ['React', 'Node.js', 'Stripe'], color: 'lavender', metric: '2.4s carregamento' },
  { title: 'Atlas Operations', type: 'SaaS · B2B', year: '2023', description: 'Sistema operacional interno que conecta times, dados e processos em um único espaço de trabalho inteligente.', tags: ['Vue', 'Python', 'AWS'], color: 'blue', metric: '−18h/mês manual' },
  { title: 'Pulse Health', type: 'Healthtech · Mobile', year: '2022', description: 'Aplicativo de acompanhamento de saúde que transforma dados em hábitos claros e possíveis para pessoas reais.', tags: ['React Native', 'GraphQL', 'Firebase'], color: 'peach', metric: '4.9 avaliação' },
]

const skills = ['TypeScript', 'React & Next.js', 'Node.js', 'PostgreSQL', 'Python', 'AWS', 'React Native', 'UI Engineering']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openProject, setOpenProject] = useState<number | null>(null)

  return (
    <main className="site-shell">
      <nav className="nav container" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Rafael Lima, início"><span>RL</span><b>Rafael Lima</b></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <a className="nav-cta" href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">Vamos conversar <ArrowUpRightIcon size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <XIcon /> : <MenuIcon />}</button>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Disponível para novos projetos <span className="eyebrow-line" /></div>
          <h1>Eu transformo<br /><em>ideias</em> em produtos<br />que <strong>movem negócios.</strong></h1>
          <p className="hero-intro">Desenvolvedor Full Stack freelancer, apaixonado por criar experiências digitais completas — da primeira linha de código ao detalhe que faz alguém ficar.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar projetos <ArrowUpRightIcon size={17} /></a><a className="text-link" href="#sobre">Conhecer meu trabalho <span>↓</span></a></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><div className="portrait-glow" /><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=85" alt="Retrato profissional de Rafael Lima" /><div className="portrait-label"><span>01</span><span>CRIANDO COM<br />INTENÇÃO</span></div></div>
          <div className="orbit-note"><SparklesIcon size={14} /> <span>full stack<br /><b>by nature</b></span></div>
        </div>
      </section>

      <div className="ticker" aria-label="Especialidades"><div className="ticker-track"><span>ESTRATÉGIA</span><i>✳</i><span>DESIGN</span><i>✳</i><span>DESENVOLVIMENTO</span><i>✳</i><span>PERFORMANCE</span><i>✳</i><span>ESTRATÉGIA</span><i>✳</i><span>DESIGN</span><i>✳</i><span>DESENVOLVIMENTO</span></div></div>

      <section id="sobre" className="section container about-section">
        <div className="section-marker"><span>01</span><span className="marker-line" /><span>Sobre mim</span></div>
        <div className="about-grid"><div><h2>Entre código,<br /><em>curiosidade</em><br />e contexto.</h2></div><div className="about-body"><p className="lead">Sou o Rafael, desenvolvedor Full Stack e freelancer. Gosto de estar perto do problema antes de abrir o editor — porque os melhores produtos nascem quando tecnologia e intenção caminham juntas.</p><p>Tenho experiência construindo aplicações completas para empresas e pessoas que precisam tirar uma ideia do papel com clareza, velocidade e qualidade. Meu trabalho combina visão de produto, engenharia sólida e atenção obsessiva aos detalhes.</p><a className="text-link" href="#contato">Vamos criar algo relevante <ArrowUpRightIcon size={16} /></a></div></div>
        <div className="principles"><div><span>01</span><b>Clareza antes do código</b><p>Entender o porquê para construir o quê.</p></div><div><span>02</span><b>Detalhes que fazem diferença</b><p>Pequenas decisões, grandes experiências.</p></div><div><span>03</span><b>Feito para durar</b><p>Arquitetura simples, produto consistente.</p></div></div>
      </section>

      <section id="experiencia" className="section container experience-section"><div className="section-marker"><span>02</span><span className="marker-line" /><span>Experiência</span></div><div className="experience-heading"><h2>Onde deixei<br /><em>minha marca.</em></h2><p>Uma trajetória construída com projetos desafiadores, times incríveis e a vontade constante de fazer melhor.</p></div><div className="timeline"><div className="timeline-item"><span className="timeline-year">2022 — presente</span><div><h3>Desenvolvedor Full Stack <span>Freelancer</span></h3><p>Construção de produtos digitais sob medida para startups e negócios em transformação. Do discovery ao deploy.</p></div><ArrowUpRightIcon size={20} /></div><div className="timeline-item"><span className="timeline-year">2020 — 2022</span><div><h3>Desenvolvedor Front-end <span>Estúdio Norte</span></h3><p>Interfaces e sistemas para marcas que buscavam se posicionar melhor no digital, trabalhando lado a lado com design e produto.</p></div><ArrowUpRightIcon size={20} /></div><div className="timeline-item"><span className="timeline-year">2018 — 2020</span><div><h3>Desenvolvedor Web <span>Orbit Tech</span></h3><p>Primeiros passos profissionais criando soluções web escaláveis e aprendendo que bons fundamentos aceleram qualquer ideia.</p></div><ArrowUpRightIcon size={20} /></div></div></section>

      <section id="projetos" className="section container projects-section"><div className="section-marker"><span>03</span><span className="marker-line" /><span>Projetos selecionados</span></div><div className="projects-heading"><div><h2>Trabalho que<br /><em>fala por si.</em></h2></div><p>Alguns projetos que traduzem meu jeito de pensar, construir e colaborar. Cada um começa com uma pergunta diferente.</p></div><div className="project-list">{projects.map((project, index) => <article className={`project-card ${project.color} ${openProject === index ? 'expanded' : ''}`} key={project.title}><button className="project-top" onClick={() => setOpenProject(openProject === index ? null : index)} aria-expanded={openProject === index}><span className="project-index">0{index + 1}</span><div className="project-title"><span>{project.type}</span><h3>{project.title}</h3></div><span className="project-year">{project.year}</span><span className="project-toggle"><ChevronDownIcon size={20} /></span></button><div className="project-details"><p>{project.description}</p><div className="project-meta"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><b>{project.metric}</b></div></div></article>)}</div><a className="all-projects" href="#contato">Quer ver mais projetos? <span>Fale comigo <ArrowUpRightIcon size={16} /></span></a></section>

      <section className="section container stack-section"><div className="section-marker"><span>04</span><span className="marker-line" /><span>Toolkit</span></div><div className="stack-layout"><h2>As ferramentas<br />por trás do<br /><em>trabalho.</em></h2><div className="skill-cloud">{skills.map((skill, i) => <span className={i % 3 === 0 ? 'skill-highlight' : ''} key={skill}><Code2Icon size={15} />{skill}</span>)}</div></div></section>

      <section id="contato" className="contact-section"><div className="container contact-inner"><div className="section-marker light"><span>05</span><span className="marker-line" /><span>Contato</span></div><div className="contact-content"><div><h2>Tem uma ideia<br /><em>na cabeça?</em></h2><p>Vamos transformar em algo que as pessoas queiram usar.</p></div><a className="contact-circle" href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><MessageCircleIcon size={28} /><span>Me chama<br />no WhatsApp</span><ArrowUpRightIcon size={20} /></a></div><div className="contact-footer"><a href={`mailto:oi@rafaellima.dev`}><MailIcon size={16} /> oi@rafaellima.dev</a><div><a href="#top" aria-label="LinkedIn" className="social-text">in</a><a href="#top" aria-label="GitHub" className="social-text">GH</a></div></div></div></section>
      <footer className="footer container"><span>© 2024 Rafael Lima</span><span>Feito com intenção e muito café.</span><a href="#top">Voltar ao topo ↑</a></footer>
    </main>
  )
}
