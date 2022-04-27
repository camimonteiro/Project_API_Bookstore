const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== Livros
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(64),
    "AUTOR" varchar (100),
    "SINOPSE" varchar (2000),
    "CATEGORIA" varchar (64),
    "EDIÇÃO" varchar (64),
    "QTD_PAGINAS" INTEGER,
    "ID_FORNECEDORES" INTEGER FOREIGN KEY AUTOINCREMENT,
    "NOME_FORNECEDORES" varchar (64) FOREIGN KEY,
    "PRECO" DECIMAL,
    "ISBN" INTEGER,
    "ID_CLIENTES" INTEGER FOREIGN KEY AUTOINCREMENT,
    "AVALIACAO" DECIMAL
  );`;

const ADD_LIVROS_DATA = `
INSERT INTO USERS (ID, TITULO, AUTOR, SINOPSE, CATEGORIA, EDICAO, QTD_PAGINAS, ID_FORNECEDORES, NOME_FORNECEDORES, PRECO, ISBN, ID_CLIENTES, AVALIACAO)
VALUES 
    (1, 'Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'Harry Potter é um garoto cujos
     pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um
     bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o 
     sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata 
     borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, 
     tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário 
     de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de 
     Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira 
     história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que 
     enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos 
     verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é 
     um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter 
     sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma 
     de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um 
     feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder 
     natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, 
     caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um 
     passatempo.' 'Fantasia de Ação e Aventura', '1ª edição', 208, 1, 'Editora Rocco', 24.90, 9788532530783, 1, 4.9),
    (2, 'Mulheres que correm com os lobos', 'Clarissa Pinkola Estés', 'Os lobos foram
     pintados com um pincel negro nos contos de fada e até hoje assustam meninas
      indefesas. Mas nem sempre eles foram vistos como criaturas terríveis e violentas. 
      Na Grécia antiga e em Roma, o animal era o consorte de Artemis, a caçadora, e 
      carinhosamente amamentava os heróis. A analista junguiana Clarissa Pinkola Estés 
      acredita que na nossa sociedade as mulheres vêm sendo tratadas de uma forma 
      semelhante. Ao investigar o esmagamento da natureza instintiva feminina, 
      Clarissa descobriu a chave da sensação de impotência da mulher moderna. Seu livro, 
      Mulheres que correm com os lobos, ficou durante um ano na lista de mais vendidos 
      nos Estados Unidos. Abordando 19 mitos, lendas e contos de fada, como a história 
      do patinho feio e do Barba-Azul, Estés mostra como a natureza instintiva da mulher 
      foi sendo domesticada ao longo dos tempos, num processo que punia todas aquelas 
      que se rebelavam. Segundo a analista, a exemplo das florestas virgens e dos animais 
      silvestres, os instintos foram devastados e os ciclos naturais femininos transformados 
      à força em ritmos artificiais para agradar aos outros. Mas sua energia vital, 
      segundo ela, pode ser restaurada por escavações psíquico-arqueológicas' nas ruínas 
      do mundo subterrâneo. Até o ponto em que, emergindo das grossas camadas de 
      condicionamento cultural, apareça a corajosa loba que vive em cada mulher. 
      Clássico dos estudos sobre o sagrado feminino e o feminismo, o livro é o primeiro 
      de uma série de longsellers da Rocco a ganhar edição com novo projeto gráfico e 
      capa dura.', 'Inspiradores', '1ª edição', 576, 1, 'Editora Rocco', 34.90, 9788532529787, 2, 4.8),
    (3, 'A coragem de ser imperfeito ', 'Brené Brown', 'PRIMEIRO LUGAR NA LISTA DO THE 
    NEW YORK TIMES. Como aceitar a própria vulnerabilidade, vencer a vergonha e ousar 
    ser quem você é. Brené Brown ousou tocar em assuntos que costumam ser evitados por 
    causarem grande desconforto. Sua palestra a respeito de vulnerabilidade, medo, 
    vergonha e imperfeição já teve mais de 25 milhões de visualizações. Viver é 
    experimentar incertezas, riscos e se expor emocionalmente. Mas isso não precisa 
    ser ruim. Como mostra Brené Brown, a vulnerabilidade não é uma medida de fraqueza, 
    mas a melhor definição de coragem. Quando fugimos de emoções como medo, mágoa e 
    decepção, também nos fechamos para o amor, a aceitação e a criatividade. Por isso, 
    as pessoas que se defendem a todo custo do erro e do fracasso acabam se frustrando 
    e se distanciando das experiências marcantes que dão significado à vida. Por outro 
    lado, as que se expõem e se abrem para coisas novas são mais autênticas e realizadas, 
    ainda que se tornem alvo de críticas e de inveja. É preciso lidar com os dois lados 
    da moeda para se ter uma vida plena. Em sua pesquisa pioneira sobre vulnerabilidade, 
    Brené Brown concluiu que fazemos uso de um verdadeiro arsenal contra a vergonha de 
    nos expor e a sensação de não sermos bons o bastante, e que existem estratégias 
    eficazes para serem usadas nesse “desarmamento”. Neste livro, ela apresenta suas 
    descobertas e estratégias bem-sucedidas, toca em feridas delicadas e provoca 
    grandes insights, desafiando-nos a mudar a maneira como vivemos e nos 
    relacionamos.', 'Motivacional Auto-Ajuda', '1ª edição', 208, 2, 'Editora Sextante', 29.90, 9788543104331, 1, 4.8);
`

function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de livros");
    });
}


function preencheTabelaLivros() {
    db.run(ADD_LIVROS_DATA, (error) => {
        if (error) console.log("Erro ao preencher tabela de livros");
    });
}

db.serialize(() => {
    criaTabelaLivros();
    preencheTabelaLivros();
});