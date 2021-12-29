type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "윤희영",
  age: 28,
};

const expert: Developer = {
  name: "윤구름",
  skills: ["javascript", "react", "typescript"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "orange";
