import TurtleCard from "@/components/TurtleCard";
import leoImg from "@/assets/leonardo.png";
import raphImg from "@/assets/raphael.png";
import donnieImg from "@/assets/donatello.png";
import mikeyImg from "@/assets/michelangelo.png";

const turtles = [
  {
    name: "Tim",
    turtleName: "Leonardo",
    image: leoImg,
    achievement: "Highest grades in FRI's professional study programme",
    githubUrl: "https://github.com/john",
    projects: "Built a real-time collaborative code editor and a distributed task scheduler used by 500+ students.",
    colorClass: "text-leo",
    borderColorClass: "border-leo",
    delay: 0,
  },
  {
    name: "Žan",
    turtleName: "Raphael",
    image: raphImg,
    achievement: "Second highest grades in FRI's professional study programme",
    githubUrl: "https://github.com/adam",
    projects: "Created an AI-powered study planner and a campus navigation app with indoor mapping.",
    colorClass: "text-raph",
    borderColorClass: "border-raph",
    delay: 0.3,
  },
  {
    name: "Aljaž",
    turtleName: "Donatello",
    image: donnieImg,
    achievement: "Web and mobile master with years of experience",
    githubUrl: "https://github.com/steve",
    projects: "Shipped a full-stack e-commerce platform and an open-source React component library with 200+ stars.",
    colorClass: "text-donnie",
    borderColorClass: "border-donnie",
    delay: 0.6,
  },
  {
    name: "Domenic",
    turtleName: "Michelangelo",
    image: mikeyImg,
    achievement: "Team morale booster who will prevent any pizzas from being thrown away",
    githubUrl: "https://github.com/peter",
    projects: "Developed a multiplayer pizza-ordering game and a Discord bot serving 10k+ users.",
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
            <span className="text-primary font-bold">✅ Academic Excellence:</span> Two of the top students in FRI's professional programme. We don't just code — we code with honors.
          </p>
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">✅ JavaScript Mastery:</span> Steve dreams in async/await. Your tech stack? Already conquered.
          </p>
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">✅ Versatility:</span> Peter does everything. Frontend? Backend? Design? Ordering pizza at 3 AM? ✓
          </p>
          <p className="text-foreground text-lg">
            <span className="text-primary font-bold">✅ Team Synergy:</span> We've been coding together so long we finish each other's <code className="text-slime">git commits</code>.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <footer className="px-4 pb-8">
        <div className="banner-pulse max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">
            🐢 PLEASE PICK US 🐢
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">
            We promise to bring top-tier code, questionable pizza choices, and an energy that can only be described as… <strong className="text-primary-foreground">COWABUNGA!</strong>
          </p>
          <p className="text-primary-foreground/60 text-sm mt-6">
            — Team Turtle Power 🍕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
