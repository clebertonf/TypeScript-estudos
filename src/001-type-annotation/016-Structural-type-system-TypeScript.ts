// Structural type é o sistema de tipos do TypeScript (Tipagem estruturada)
// o typeScript não olha para identidade do tipo, e sim para sua estrutura

type VefifyUser = boolean; // tipagem da função
type User = string;

function userExists(user1: User, user2: User): VefifyUser {
  return (
    user1 === user2
  );
}

console.log(userExists('Cleber', 'Cleber'));
