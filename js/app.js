/*jshint esversion: 6 */

let name = prompt ("Please enter your first name for your color personality.");
console.log (name);

// Piece of crap wont cancel here if I close prompt!!!!!!!!


let color = prompt("Please choose your favotite color.\n\nRed, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, and Grey");
console.log (color);

let colorLower = color.toLowerCase();

switch (colorLower){

  case "red":
  alert(`Thanks ${name}\n\nRed personality color suggests strong will, ambition and energy.`);
  break;

  case "orange":
  alert(`Thanks ${name}\n\nOrange personality color radiates warmth and happiness, combining the physical energy and stimulation of red with the cheerfulness of yellow.`);
  break;

  case "yellow":
  alert(`Thanks ${name}\n\nYellow personality color relates to acquired knowledge. It is the color which resonates with the left or logic side of the brain stimulating our mental faculties and creating mental agility and perception.`);
  break;

  case "green":
  alert(`Thanks ${name}\n\nGreen personality color relates to balance and harmony. From a color psychology perspective, it is the great balancer of the heart and the emotions, creating equilibrium between the head and the heart.`);
  break;

  case "blue":
  alert(`Thanks ${name}\n\nBlue personality color is one of trust, responsibility, honesty and loyalty. It is sincere, reserved and quiet, and doesn't like to make a fuss or draw attention. It hates confrontation, and likes to do things in its own way.`);
  break;

  case "pink":
  alert(`Thanks ${name}\n\nThe color pink represents compassion, nurturing and love. It relates to unconditional love and understanding, and the giving and receiving of nurturing.`);
  break;

  case "purple":
  alert(`Thanks ${name}\n\nThe color purple relates to the imagination and spirituality. It stimulates the imagination and inspires high ideals. It is an introspective color, allowing us to get in touch with our deeper thoughts.`);
  break;

  case "black":
  alert(`Thanks ${name}\n\nThe color black relates to the hidden, the secretive and the unknown, and as a result it creates an air of mystery. It keeps things bottled up inside, hidden from the world.`);
  break;

  case "white":
  alert(`Thanks ${name}\n\n\The color white is color at its most complete and pure, the color of perfection. The psychological meaning of white is purity, innocence, wholeness and completion.`);
  break;

  case "grey":
  alert(`Thanks ${name}\n\nThe color gray is an unemotional color. It is detached, neutral, impartial and indecisive - the fence-sitter.`);
  break;
}
