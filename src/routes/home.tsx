import Window from '../components/Window';
import Hi from '../assets/hi.gif';
import Emoji from '../components/Emoji';
export function meta() {
  return [{ title: "Home - Sidequests" }];
}

const socials = [
  { icon: "", name: "GitHub", url: "https://github.com/Malachite01" },
  { icon: "", name: "Discord", url: "https://discord.com/users/292341035907153921" },
  { icon: "", name: "Reddit", url: "https://www.reddit.com/u/Mathieu_atnes/" },
  { icon: "", name: "Steam", url: "https://steamcommunity.com/id/helloitisimalachite01/" },
  { icon: "󰅶", name: "Ko-Fi (Free 3D Models and stuff)", url: "https://ko-fi.com/malachite01" }
];

function Home() {
  return (
    <>
      <Window
        icon='󰍹'
        title='Hello_World.txt' 
        content={
          <>
          <div>
            <img src={Hi} alt="Hello World" width={100} />
          </div>
          <div>
            <p>Hi! Welcome to my blog! I'm <u className='tUnderline'>Malachite01</u>, a {new Date().getFullYear() - 2003} year old person from France 🇫🇷.</p>
            <p>I love learning new subjects and doing cool stuffs like programming (soft dev, web dev, game dev), tinkering with electronics, cyber security stuff, and creating cool projects with my own hands (explore the blog to see !).</p>
          </div>
          <h4>## About Me</h4>
          <ul>
            <li><b className='tImportant'>Languages: </b>French, English, Spanish, Portuguese</li>
            <li><b className='tImportant'>Pro experiences: </b>Internship Security & Technology Expert, Apprenticeship TechLead DevSecOps, Internship Full Stack Developer</li>
            <li><b className='tImportant'>Education: </b> Master's degree in Computer Science and Networks (1 year left), Bachelor's degree in Computer Science</li>
            <li><b className='tImportant'>Hobbies: </b>Music (Guitar, Bass, Piano), Art (Drawing, 3D modeling), Gaming, WatchMaking</li>
          </ul>
          </>
        }
      />

      <Window 
        icon='󰖟'
        title='Socials.txt' 
        content={
          <>
            <p>Follow me on social medias <Emoji name="kioute"/> :</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {socials.map((social) => (
                <li key={social.name}>{social.icon} {social.name}:&ensp;
                  <a className="tUnderline" href={social.url} target="_blank" rel="noopener noreferrer">{social.url}</a>
                </li>
              ))}
            </ul>
          </>
        }
      />

      <Window 
        icon='󰳽 '
        title='Buttonssss!!!!!!!.png' 
        content={
          <>
            <p>Here is my 88x31-button, if you like my blog, you can paste it on yours! <Emoji name="proud" /> </p>
            <div>
              <img className="coolbutton" onClick={() => navigator.clipboard.writeText('<a href="https://malachite01.github.io/sidequests.blog/" target="_blank" rel="noopener noreferrer"><img src="https://malachite01.github.io/sidequests.blog/buttons/button-88x31.gif" alt="Malachite01, come see my stuff!"/></a>')} src="https://malachite01.github.io/sidequests.blog/buttons/button-88x31.gif" alt="My button" title="Click to copy my silly button :)" style={{ cursor: 'pointer',   }} /> 
              <p>Click the button to copy the HTML code to your clipboard! Or just copy below :</p>
            </div>
            <code style={{ display: "block", backgroundColor: "#1e1e1e", color: "#d4d4d4", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>
              &lt;a href=&quot;https://malachite01.github.io/sidequests.blog/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;&lt;img src=&quot;https://malachite01.github.io/sidequests.blog/buttons/button-88x31.gif&quot; alt=&quot;Malachite01, come see my stuff!&quot;/&gt;&lt;/a&gt;
            </code>

            <br />
            <h4>## Cool buttons</h4>
            <p>Here are some buttons from cool people on the internet, check them out! <Emoji name="sideeye"/> </p>
            <p className="tUnderline">People</p>
            <div className="button-grid">
              <a className="coolbutton" href="https://pucas01.com" target="_blank" rel="noopener noreferrer"><img src="https://pucas01.com/button/button.png" alt="pucas01.com" width="88" height="31"/></a>
              <a className="coolbutton" href="https://ptr.pet/" target="_blank" rel="noopener noreferrer"><img src="https://ptr.pet/88x31.gif" alt="ptr.pet" width="88" height="31" /></a>
              <a className="coolbutton" href="https://vmfunc.re/" target="_blank" rel="noopener noreferrer"><img src="https://vmfunc.re/button.png" alt="vmfunc.re" width="88" height="31" /></a>
            </div>
            <p className="tUnderline">Stuff</p>
            <div className="button-grid">
              <a className="coolbutton" href="https://en.wikipedia.org/wiki/Human" target="_blank" rel="noopener noreferrer"><img src="https://luuumine.com/badges/human.gif" alt="Humans.com" width="88" height="31" /></a>
              <a className="coolbutton" href="https://www.kernel.org/" target="_blank" rel="noopener noreferrer"><img src="https://luuumine.com/badges/linux.gif" alt="Linux" width="88" height="31" /></a>
              <a className="coolbutton" href="https://decomp-academy.dev/" target="_blank" rel="noopener noreferrer"><img src="https://malachite01.github.io/sidequests.blog/buttons/decomp.gif" alt="decomp-academy.dev" width="88" height="31" /></a>
            </div>

          </>
        }
      />
    </>
  );
}

export default Home
