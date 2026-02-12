import TurtleCard from "@/components/TurtleCard";
import leoImg from "@/assets/leonardo.png";
import raphImg from "@/assets/raphael.png";
import donnieImg from "@/assets/donatello.png";
import mikeyImg from "@/assets/michelangelo.png";
import pleaseImg from "@/assets/please.gif";

const turtles = [
  {
    name: "Tim",
    turtleName: "Leonardo",
    image: leoImg,
    achievement: "Top grades in FRI's undergrad programme",
    githubUrl: "https://github.com/tthuma1",
    projects: "Worked on projects ranging from a 3D web puzzle game to real estate market data mining.",
    colorClass: "text-leo",
    borderColorClass: "border-leo",
    delay: 0,
  },
  {
    name: "Žan",
    turtleName: "Raphael",
    image: raphImg,
    achievement: "Also top grades in FRI's undergrad programme",
    githubUrl: "https://github.com/ZanAmbrozic",
    projects: "Avid participant in the Advent of Code.",
    colorClass: "text-raph",
    borderColorClass: "border-raph",
    delay: 0.3,
  },
  {
    name: "Aljaž",
    turtleName: "Donatello",
    image: donnieImg,
    achievement: "Web and mobile master with years of experience",
    githubUrl: "https://github.com/aljazw",
    projects: "Created tons of apps, such as an Ethereum transaction crawler and mobile website blocker.",
    colorClass: "text-donnie",
    borderColorClass: "border-donnie",
    delay: 0.6,
  },
  {
    name: "Domenic",
    turtleName: "Michelangelo",
    image: mikeyImg,
    achievement: "Team morale booster who will prevent any pizzas from being thrown away",
    githubUrl: "http://github.com/KickTheApple",
    projects: "Created his very own SSH honeypot for catching bad guys.",
    colorClass: "text-mikey",
    borderColorClass: "border-mikey",
    delay: 0.9,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="py-16 md:py-24 text-center px-4">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
          DragonHack 2026 Application
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-glow text-primary mb-6">
          CODING MUTANT NINJA TURTLES
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Four coding ninjas from the sewers of <span className="text-foreground font-semibold">FRI</span>, 
          ready to absolutely <span className="text-primary font-semibold">crush</span> DragonHack.
        </p>
      </header>

      {/* Team Section */}
      <section className="px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
          Meet the Squad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {turtles.map((turtle) => (
            <TurtleCard key={turtle.name} {...turtle} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 pb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Why Pick Us?
        </h2>
        <div className="card-sewer rounded-xl p-8 space-y-4 text-left">
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">Experience:</span> Each of us has years of experience in software development, which we would love to showcase at DragonHack.
          </p>
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">Infinite creativity:</span> We will deliver something so innovative that it will blow your mind.
          </p>
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">Good vibes:</span> We are extremely friendly and will ensure that everyone at DragonHack has a good time with us.
          </p>
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">We really want it:</span> We want to be a part of DragonHack more than any other team.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <footer className="px-4 pb-8">
        <div className="banner-pulse max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">
            PLEASE PICK US
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-4">
            We promise to bring top-tier code and help everyone have a good time.
          </p>

          <div className="flex justify-center items-center">
            <img src={pleaseImg} alt="Puss in boots saying please." className="w-3/4 md:w-1/2 max-w-md object-cover" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
