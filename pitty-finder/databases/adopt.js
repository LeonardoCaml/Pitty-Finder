import foto from "../constants/photos.js";

const animals = [
  {
    id: 1,
    foto: foto.rex,
    nome: "Rex",
    estado: "SP",
    cidade: "São Paulo",
    especie: "cachorro",
    descricao: "Rex é um cão cheio de energia e alegria, sempre disposto a brincar. Ele adora longas caminhadas no parque e é muito amigável com outros cães. Rex tem uma personalidade protetora, sendo sempre leal e atento ao seu tutor. Apesar de sua energia, ele também gosta de momentos de tranquilidade, principalmente quando está ao lado de quem ama. Ele procura um lar onde possa ser parte da família e receber todo o carinho que merece.",
    ficha: {
      idade: "adulto",
      sexo: "masculino",
      castrado: "sim",
      tempoDeAbrigo: "8 meses"
    }
  },
  {
    id: 2,
    foto: foto.mia,
    nome: "Mia",
    estado: "RJ",
    cidade: "Rio de Janeiro",
    especie: "gato",
    descricao: "Mia é uma gata carinhosa e muito apegada aos seus donos. Ela adora se aninhar no colo de alguém e receber carícias por longos períodos. Mia tem um temperamento calmo e tranquilo, sendo ideal para quem busca uma companhia serena. Ela se adapta bem a ambientes internos e gosta de explorar cantos aconchegantes da casa. Com seus olhos expressivos e personalidade doce, Mia encanta todos ao seu redor.",
    ficha: {
      idade: "adulto",
      sexo: "feminino",
      castrado: "sim",
      tempoDeAbrigo: "12 meses"
    }
  },
  {
    id: 3,
    foto: foto.buddy,
    nome: "Buddy",
    estado: "MG",
    cidade: "Belo Horizonte",
    especie: "cachorro",
    descricao: "Buddy é um cachorro brincalhão e afetuoso, conhecido por sua energia contagiante. Ele adora correr e brincar ao ar livre, especialmente com crianças. Buddy é muito inteligente e aprende comandos rapidamente, o que o torna fácil de treinar. Além de ser um ótimo companheiro para atividades físicas, ele também é extremamente leal e protetor. Buddy está à procura de uma família ativa que possa acompanhá-lo em suas aventuras diárias.",
    ficha: {
      raca: 'vira-lata',
      idade: "filhote",
      sexo: "masculino",
      castrado: "não",
      tempoDeAbrigo: "5 meses"
    }
  },
  {
    id: 4,
    foto: foto.luna,
    nome: "Luna",
    estado: "BA",
    cidade: "Salvador",
    especie: "gato",
    descricao: "Luna é uma gata cheia de charme e mistério, com um comportamento independente. Ela adora explorar a casa, sempre encontrando lugares novos para se esconder e descansar. Luna é bastante afetuosa, mas no seu tempo, e adora uma boa dose de carinho quando está no humor certo. Ela é uma ótima companhia para quem aprecia a presença de um gato que sabe respeitar o espaço do outro. Luna se dá bem com outros gatos e é perfeita para um lar tranquilo.",
    ficha: {
      idade: "adulto",
      sexo: "feminino",
      castrado: "sim",
      tempoDeAbrigo: "10 meses"
    }
  },
  {
    id: 5,
    foto: foto.thor,
    nome: "Thor",
    estado: "PR",
    cidade: "Curitiba",
    especie: "cachorro",
    descricao: "Thor é um cão robusto e confiante, conhecido por sua força e resistência. Ele é um guardião natural, sempre vigilante e protetor de sua casa e família. Apesar de sua aparência imponente, Thor é extremamente carinhoso com aqueles que conhece e confia. Ele adora brincar com brinquedos robustos e gosta de atividades ao ar livre, como caminhadas e corridas. Thor está à procura de um lar onde possa exercer seu papel de protetor e companheiro fiel.",
    ficha: {
      idade: "adulto",
      sexo: "masculino",
      castrado: "sim",
      tempoDeAbrigo: "7 meses"
    }
  },
  {
    id: 6,
    foto: foto.felix,
    nome: "Felix",
    estado: "RS",
    cidade: "Porto Alegre",
    especie: "gato",
    descricao: "Felix é um gato curioso e cheio de vida, sempre à procura de algo novo para descobrir. Ele tem um comportamento travesso, muitas vezes brincando com pequenos objetos pela casa. Felix adora a companhia de pessoas e é muito sociável, sempre se aproximando para um afago. Ele é ótimo para quem procura um gato ativo e divertido. Felix também tem um lado afetuoso e gosta de se aconchegar ao lado de quem ama após um dia cheio de aventuras.",
    ficha: {
      idade: "filhote",
      sexo: "masculino",
      castrado: "não",
      tempoDeAbrigo: "3 meses"
    }
  },
  {
    id: 7,
    foto: foto.max,
    nome: "Max",
    estado: "PE",
    cidade: "Recife",
    especie: "cachorro",
    descricao: "Max é um cachorro inteligente e cheio de energia, sempre disposto a aprender novos truques. Ele é extremamente leal e adora estar na companhia de pessoas, especialmente crianças. Max se adapta bem a diversos ambientes, mas prefere ter um espaço ao ar livre onde possa correr e brincar. Ele tem um comportamento amigável e se dá bem com outros animais. Max está à procura de um lar onde possa compartilhar sua alegria e lealdade.",
    ficha: {
      idade: "adulto",
      sexo: "masculino",
      castrado: "sim",
      tempoDeAbrigo: "6 meses"
    }
  },
  {
    id: 8,
    foto: foto.simba,
    nome: "Simba",
    estado: "CE",
    cidade: "Fortaleza",
    especie: "gato",
    descricao: "Simba é um gato majestoso, com uma presença forte e carisma. Ele é independente, mas gosta de atenção e carinho em momentos específicos. Simba é muito observador e passa boa parte do tempo analisando seu ambiente. Ele adora brinquedos interativos e é muito ágil, o que o torna ótimo para famílias que gostam de brincar com seus animais. Simba é ideal para quem procura um gato com personalidade forte e presença marcante.",
    ficha: {
      idade: "adulto",
      sexo: "masculino",
      castrado: "sim",
      tempoDeAbrigo: "9 meses"
    }
  },
  {
    id: 9,
    foto: foto.cachorro,
    nome: "Bob",
    estado: "GO",
    cidade: "Goiânia",
    especie: "cachorro",
    descricao: "Bob é um cachorro amigável e sociável, sempre pronto para fazer novos amigos, seja humanos ou outros animais. Ele adora passeios e é muito bem-comportado na coleira. Bob tem um temperamento calmo, mas é sempre animado para brincar. Ele gosta de estar perto de sua família e é um excelente companheiro para todas as horas. Bob está à procura de um lar onde possa oferecer toda a sua lealdade e carinho incondicional.",
    ficha: {
      idade: "adulto",
      sexo: "masculino",
      castrado: "sim",
      tempoDeAbrigo: "11 meses"
    }
  },
  {
    id: 10,
    foto: foto.nina,
    nome: "Nina",
    estado: "DF",
    cidade: "Brasília",
    especie: "gato",
    descricao: "Nina é uma gata elegante e graciosa, com uma natureza tranquila. Ela é muito carinhosa e adora se aconchegar ao lado de alguém para uma sessão de carinho. Nina tem um comportamento sereno e se adapta bem a ambientes calmos. Ela é perfeita para quem procura uma companhia tranquila e amorosa. Nina gosta de explorar seus arredores com calma e aprecia um ambiente onde possa se sentir segura e confortável.",
    ficha: {
      idade: "adulto",
      sexo: "feminino",
      castrado: "sim",
      tempoDeAbrigo: "10 meses"
    }
  }
];


export default animals