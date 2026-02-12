interface TurtleCardProps {
  name: string;
  turtleName: string;
  image: string;
  achievement: string;
  funQuote: string;
  colorClass: string;
  borderColorClass: string;
  delay: number;
}

const TurtleCard = ({ name, turtleName, image, achievement, funQuote, colorClass, borderColorClass, delay }: TurtleCardProps) => {
  return (
    <div
      className="card-sewer rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:-translate-y-2 animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-40 h-40 rounded-full overflow-hidden border-4 ${borderColorClass} mb-4 bg-secondary`}>
        <img src={image} alt={turtleName} className="w-full h-full object-cover" />
      </div>
      <h3 className={`text-2xl font-bold ${colorClass} mb-1`}>{name}</h3>
      <p className="text-muted-foreground text-sm italic mb-3">a.k.a. {turtleName}</p>
      <div className="card-sewer rounded-lg p-3 mb-3 w-full">
        <p className="text-foreground font-medium text-sm">🏆 {achievement}</p>
      </div>
      <p className="text-muted-foreground text-xs italic">"{funQuote}"</p>
    </div>
  );
};

export default TurtleCard;
