import TurtleCard from "@/components/TurtleCard";
import leoImg from "@/assets/leonardo.png";
import raphImg from "@/assets/raphael.png";
import donnieImg from "@/assets/donatello.png";
import mikeyImg from "@/assets/michelangelo.png";

const turtles = [
  {
    name: "John",
    turtleName: "Leonardo",
    image: leoImg,
    achievement: "Highest grades in FRI's professional study programme",
    funQuote: "I don't always lead the team, but when I do, we get straight A's.",
    colorClass: "text-leo",
    borderColorClass: "border-leo",
    delay: 0,
  },
  {
    name: "Adam",
    turtleName: "Raphael",
    image: raphImg,
    achievement: "Second highest grades in FRI's professional study programme",
    funQuote: "I'm not second place. I'm first of the rest. Big difference.",
    colorClass: "text-raph",
    borderColorClass: "border-raph",
    delay: 0.3,
  },
  {
    name: "Steve",
    turtleName: "Donatello",
    image: donnieImg,
    achievement: "JS Master — if it runs on V8, he's already built it",
    funQuote: "I don't fix bugs. Bugs fix themselves out of respect.",
    colorClass: "text-donnie",
    borderColorClass: "border-donnie",
    delay: 0.6,
  },
  {
    name: "Peter",
    turtleName: "Michelangelo",
    image: mikeyImg,
    achievement: "Jack of all trades — and master of vibes",
    funQuote: "I bring the pizza AND the pull requests. Cowabunga!",
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
          🍕 Hackathon Application 🍕
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-glow text-primary mb-6">
          TEAM TURTLE POWER
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Four coding ninjas from the sewers of <span className="text-foreground font-semibold">FRI</span>, 
          ready to emerge and absolutely <span className="text-primary font-semibold">crush</span> your hackathon.
        </p>
        <p className="text-muted-foreground mt-4 text-lg">
          We've got the grades, the skills, and an unhealthy obsession with pizza. 🐢
        </p>
      </header>

      {/* Team Section */}
      <section className="px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Meet the <span className="text-primary">Squad</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Each turtle brings something unique to the sewer… err, the team.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {turtles.map((turtle) => (
            <TurtleCard key={turtle.name} {...turtle} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 pb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Why Pick Us? 🤔
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
