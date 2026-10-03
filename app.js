const DEFAULT={
experience:[
["Fundador e Proprietário","Nexora","Março 2026 - Presente"],
["Fundador e Idealizador","BD TV – Canal de Televisão Digital","Maio 2026 - Presente"],
["Presidente e Coordenador Geral","ASDAHDI - Pemba","Maio 2025 - Presente"],
["Locutor","Rádio Moçambique - Pemba","Fevereiro 2025 - 2026"],
["Técnico de Comunicação e Imagem","PPAJ - Pemba","Abril 2025 - Março 2026"],
["Operador de Câmera de Televisão","josTV - Pemba","Outubro 2025 - Março 2026"],
["Mentor Comunitário na área de Saúde Sexual e Reprodutiva","KUTENGA - Pemba","Dezembro 2024 - Dezembro 2025"],
["Apresentador de Programas de TV","TVM - Pemba","Maio 2021 - 2025"],
["Agente Comercial","Vodacom - Pemba","Outubro 2020 - Março 2025"]
],
education:["12ª Classe concluída | Escola Secundária de Pemba — Dezembro 2025","Marketing de Turismo | +Fronteiras — Maio 2026","Liderança e Desenvolvimento Profissional | PRÁTIQ CONSULTORIA — 2026","Programação Web (HTML, CSS, JavaScript) | Rádio Wimbe — Fevereiro 2026","Empreendedorismo | Headway Mozambique — Fevereiro 2026","Saúde Sexual e Reprodutiva | UNFPA — Agosto 2025","Hidroponia e Agricultura Sustentável | Mozahidoponic — Maio 2025","Prevenção do Extremismo Violento | CCD — Agosto 2024","Direitos das Crianças | UNICEF — Junho 2024","Informática Básica | APEC — Junho 2024","Literacia Climática | YCAC-MOZ — Março 2023","Apresentação de TV e Moderação de Eventos | TVM — Junho 2022"],
forums:["Participante Virtual no GLF Africa 2026 (Global Landscapes Forum)","Delegado no VIII Congresso Internacional de Educação Ambiental","Fóruns de Acção Climática promovidos pela Jacob's Ladder Africa"],
languages:[["Português","Avançado (Nativo)"],["Emakua","Intermediário"],["Muane","Básico"],["Árabe","Iniciante"],["Chinês","Iniciante"],["Ximakonde","Iniciante"],["Inglês","Iniciante"]],
achievements:["Supervisão de Equipa: Coordenação e gestão directa de uma equipa com 34 membros na ASDAHDI.","Coordenação de Formações: Facilitador e coordenador do programa de formação “Campeões de Mudança” em Nampula (2026).","Formador Especializado: sessões para mentores e líderes juvenis sobre Apoio Psicossocial e Saúde Mental (2026).","Plataforma Nutrivida / Vida Fonte: estrutura, marca e código funcional para monitoramento do crescimento e desnutrição infantil.","AgriTech Pemba: proposta tecnológica baseada em IA para aconselhamento agrícola.","Projecto Livre: colaboração activa na gestão comunitária de resíduos sólidos.","Cuidado de Mim: apoio no desenvolvimento da plataforma de consultas virtuais.","Resolução de Problemas: negociações e encontros estratégicos pela PPAJ em Cabo Delgado."],
projects:[
{name:"Vida Fonte / Nutrivida",desc:"Plataforma para monitoramento e acompanhamento do crescimento e desnutrição infantil.",status:"Em utilização",url:"#",image:"assets/projeto-vida-fonte.jpg"},
{name:"AgriTech Pemba",desc:"Proposta tecnológica baseada em IA para consultoria e aconselhamento agrícola.",status:"Em desenvolvimento",url:"#",image:"assets/projeto-agritech.jpg"},
{name:"Projecto Livre",desc:"Colaboração activa na gestão comunitária de resíduos sólidos.",status:"Em utilização",url:"#",image:"assets/projeto-livre.jpg"},
{name:"Cuidado de Mim",desc:"Apoio no desenvolvimento de plataforma de consultas virtuais.",status:"Em desenvolvimento",url:"#",image:"assets/projeto-cuidado.jpg"}
],
media:[]
};
function getData(){return JSON.parse(localStorage.getItem("bdPortfolio")||"null")||DEFAULT}
const d=getData();
document.getElementById("experienceList").innerHTML=d.experience.map(x=>`<article><div class="date">${x[2]}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
document.getElementById("educationList").innerHTML=d.education.map(x=>`<p>• ${x}</p>`).join("");
document.getElementById("forumList").innerHTML=d.forums.map(x=>`<li>${x}</li>`).join("");
document.getElementById("languageList").innerHTML=d.languages.map(x=>`<div class="language"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("");
document.getElementById("achievementList").innerHTML=d.achievements.map(x=>`<article class="card"><p>${x}</p></article>`).join("");
document.getElementById("projectList").innerHTML=d.projects.map((p,i)=>`<article class="project-card" data-project="${i}"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"><div class="inside"><span class="status">${p.status}</span><h3>${p.name}</h3><p>${p.desc}</p></div></article>`).join("");
function yt(url){let m=url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^?&/]+)/);return m?`https://www.youtube.com/embed/${m[1]}`:null}
document.getElementById("mediaList").innerHTML=d.media.length?d.media.map((m,i)=>{let e=yt(m.url);return `<article class="media-card"><iframe src="${e||m.url}" allowfullscreen></iframe><div class="inside"><b>${m.title}</b><p>${m.description||""}</p></div></article>`}).join(""):`<div class="card"><h3>Espaço de atividades</h3><p>Use o painel administrativo para adicionar vídeos do YouTube/Facebook.</p></div>`;
const settings=JSON.parse(localStorage.getItem("bdSettings")||"{}");["facebook","youtube","linkedin"].forEach(k=>{let el=document.getElementById(k+"Link");if(el&&settings[k])el.href=settings[k]});
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("dark");
const panel=document.getElementById("assistantPanel");document.getElementById("assistantOpen").onclick=()=>panel.classList.add("open");document.getElementById("assistantClose").onclick=()=>panel.classList.remove("open");
let messages=JSON.parse(localStorage.getItem("assistantMessages")||"[]");function renderMsgs(){document.getElementById("assistantMessages").innerHTML=messages.map(m=>`<div class="msg ${m.who}">${m.text}</div>`).join("");document.getElementById("assistantMessages").scrollTop=99999}renderMsgs();
document.getElementById("assistantForm").onsubmit=e=>{e.preventDefault();let input=document.getElementById("assistantInput"),v=input.value.trim();if(!v)return;messages.push({who:"user",text:v});let r="Obrigado pela sua mensagem. Neste momento estou ocupado, mas o seu contacto ficou registado. Para assuntos profissionais, pode usar a secção Contactos.";messages.push({who:"bot",text:r});localStorage.setItem("assistantMessages",JSON.stringify(messages));input.value="";renderMsgs()};
let visits=JSON.parse(localStorage.getItem("visitLog")||"[]");visits.push({time:new Date().toISOString(),path:location.pathname,agent:navigator.userAgent});localStorage.setItem("visitLog",JSON.stringify(visits.slice(-5000)));
