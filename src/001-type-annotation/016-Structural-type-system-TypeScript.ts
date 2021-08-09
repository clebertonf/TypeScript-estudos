// Structural type é o sistema de tipos do TypeScript (Tipagem estruturada)

type VefifyUser = boolean; // tipagem da função
type User = string;

function userExists(user1: User, user2: User): VefifyUser {
  return (
    user1 === user2
  );
}

console.log(userExists('Cleber', 'Cleber'));
