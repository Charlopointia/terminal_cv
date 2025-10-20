(function(){
const screen=document.getElementById('screen');
const cli=document.getElementById('cli');
const input=document.getElementById('command');
const contactPanel=document.getElementById('contact-section');
const contactForm=document.getElementById('contactForm');
const status=document.getElementById('contactStatus');
const year=document.getElementById('year');year.textContent=new Date().getFullYear();

const profile=
{
    name:'Charly Brachet',title:'Développeur',email:'charly.brachet@epitech.eu'
}
function printLine(t)
{
    const d=document.createElement('div');
    d.className='line';
    d.innerHTML=t;screen.appendChild(d);
    screen.scrollTop=screen.scrollHeight;
}
function clearScreen()
{
    screen.innerHTML='';
}
function hidePanels()
{
    contactPanel.classList.add('hidden');
}

const commands={
 help(){printLine('Commandes: about, skills, projects, contact, clear');},
 about(){hidePanels();printLine('> '+profile.name+' — '+profile.title);printLine('Email: <a href="mailto:'+profile.email+'">'+profile.email+'</a>');},
 skills(){hidePanels();printLine('HTML/CSS ⭐⭐⭐⭐');printLine('JS ⭐⭐');printLine('Python ⭐⭐');printLine('langage C ⭐⭐⭐');printLine('swift ⭐⭐');},
 projects(){hidePanels();printLine('Projet: HowRichAreYou? — App iOS');printLine('Projet: Cursus Ephitec');},
 contact(){hidePanels();contactPanel.classList.remove('hidden');printLine('> contact form below');},
 clear(){hidePanels();clearScreen();}
};

cli.addEventListener('submit',e=>{e.preventDefault();const c=input.value.trim().toLowerCase();printLine('$ '+c);(commands[c]||function(){printLine('Commande inconnue');})();input.value='';});
contactForm.addEventListener('submit',e=>{e.preventDefault();status.textContent='Message envoyé (démo)';setTimeout(()=>status.textContent='',3000);});
})();