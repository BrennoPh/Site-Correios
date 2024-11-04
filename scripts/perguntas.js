const perguntas = [
  { 
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'O que caracteriza uma função pura?', 
    opcoes: [
      'Ela sempre retorna o mesmo resultado para os mesmos argumentos.', 
      'Ela modifica o estado de variáveis globais.', 
      'Ela depende de variáveis externas.', 
      'Ela sempre executa um loop.'
    ],
    respostaCorreta: 0
  },
  { 
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Qual é o resultado da função: const dobro=(x)=> {return x * 2}, chamada com o argumento 4?',
    opcoes: ['2', '4', '8', '10'],
    respostaCorreta: 2
  },
  { 
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Assinale a alternativa que NÃO é uma característica de funções puras:',
    opcoes: [
      'Imutabilidade de dados.', 
      'Dependência de estado externo.', 
      'Consistência em resultados.', 
      'Reusabilidade'
    ],
    respostaCorreta: 1
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Qual dos seguintes exemplos representa uma violação do conceito de função pura?',
    opcoes: [
      'const quadrado=(x)=> {return x * x}', 
      'const adicionaTempo=(data, dias)=> {return data + timedelta(days=dias)}',
      'const multiplica=(x, y)=> {return x * y}',
      'const geraId=()=> return random.randint(1, 100)'
    ],
    respostaCorreta: 3
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Assinale a alternativa que completa corretamente o cálculo do volume de uma esfera, dada pela fórmula V= 4/3 x r³',
    opcoes: [
      '3.14, r**3', 
      'pi=3.14, r*3', 
      'pi=3.14, r**3', 
      '3.14, r*3'
    ],
    respostaCorreta: 2
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Funções puras facilitam o uso de qual técnica?',
    opcoes: [
      'Programação orientada a objetos.', 
      'Testes unitários.', 
      'Programação assíncrona.', 
      'Manipulação de estado.'
    ],
    respostaCorreta: 1
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Assinale a alternativa que representa uma função pura:',
    opcoes: [
      'const soma=(x, y)=>{ return x + y + z }(onde z é uma variável global)', 
      'const soma=(x, y)=> {return x + y}', 
      'const incrementa=(x)=> {x + y + 1}(onde y é uma variável global)'
    ],
    respostaCorreta: 1
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Qual das seguintes operações é considerada um efeito colateral?',
    opcoes: [
      'Retornar o dobro de um número.', 
      'Modificar uma variável global.', 
      'Somar dois números.', 
      'Calcular a raiz quadrada de um número'
    ],
    respostaCorreta: 1
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Qual das alternativas abaixo é um benefício de usar funções puras?',
    opcoes: [
      'Aumento da complexidade do código.', 
      'Facilidade para testar e depurar.', 
      'Menor legibilidade.', 
      'Dependência de estado global.'
    ],
    respostaCorreta: 1
  },
  {
    nivel: 1,
    tipo: 'pureza',
    pergunta: 'Assinale o comportamento da função abaixo const dividir = (x,y) => { if (y==0) return "ERRO"; return x/y }',
    opcoes: [
      'Retorna erro', 
      'Multiplica x por y', 
      'Divide x por y', 
      'Eleva x a y'
    ],
    respostaCorreta: 2
  },
  { 
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Considere a função const double=(x)=>{ return 2 * x}. Qual é o efeito colateral dessa função?', 
      opcoes: [
        'Nenhum, é uma função pura.', 
        'Modifica o valor de x.', 
        'Afeta uma variável global.', 
        'Imprime o valor de x.'
      ],
      respostaCorreta: 0
    },
    { 
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Em uma linguagem funcional, como a imutabilidade se relaciona com funções puras?',
      opcoes: [
        'Funções puras não podem trabalhar com dados mutáveis.',
        'A imutabilidade não afeta a pureza das funções.',
        'Funções puras exigem dados mutáveis para serem eficientes.', 
        'A imutabilidade facilita a criação de funções puras.'
      ],
      respostaCorreta: 3
    },
    { 
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Se uma função precisa acessar dados de configuração externa, como isso deve ser feito para mantê-la pura?',
      opcoes: [
        'Acessando diretamente a configuração dentro da função.', 
        'Passando a configuração como um parâmetro para a função.', 
        'Armazenando a configuração em uma variável global.', 
        'Modificando a configuração durante a execução da função.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Quando uma função pura é chamada várias vezes com os mesmos argumentos, o que acontece?',
      opcoes: [
        'Ela pode retornar resultados diferentes.', 
        'O resultado é sempre o mesmo.', 
        'Ela provoca efeitos colaterais diferentes a cada chamada.', 
        'Ela consome mais memória a cada chamada.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Dada a seguinte função function concatStrings(a, b) { return a + b; } Qual dos seguintes exemplos de chamada mantém a pureza da função?',
      opcoes: [
        'concatStrings("Hello, ", "world!")', 
        'let str = "Hello, "; concatStrings(str, "world!")', 
        'str += "updated"; concatStrings("Hello, ", str)', 
        'Todas as anteriores'
      ],
      respostaCorreta: 3
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Considere a seguinte função function doubleArray(arr) { return arr.map(num => num * 2); } Essa função é pura ou impura?',
      opcoes: [
        'Pura', 
        'Impura'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Considere a seguinte função function multiplyByTwo(num, multiplier=2) { return num * multiplier } Qual é o resultado ao chamar multiplyByTwo(3)?',
      opcoes: [
        '3', 
        '4', 
        '2', 
        '6'
      ],
      respostaCorreta: 3
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Dado o código abaixo, qual é a saída da função calculate? function calculate(a, x=10) { return a + x } console.log(calculate(5))',
      opcoes: [
        '5', 
        '10', 
        '15', 
        '20'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'No contexto de programação funcional, qual dos seguintes conceitos está mais relacionado à utilização de funções puras?',
      opcoes: [
        'Efeitos colaterais', 
        'Mutabilidade de estado', 
        'Imutabilidade', 
        'Execução sequencial'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 2,
      tipo: 'pureza',
      pergunta: 'Dado o seguinte código, qual é a melhor forma de torná-lo uma função pura? const total = 20 function addToTotal(num) { return total + num }',
      opcoes: [
        'Fazer a função retornar num.', 
        'Passar total como argumento e retornar a soma.', 
        'Utilizar uma variável global para armazenamento.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Considere a seguinte função em uma linguagem funcional: function filterEven(numbers) { return [n for n in numbers if n % 2 == 0] }. Essa função é considerada pura? Justifique.',
      opcoes: [
        'Sim, porque não altera a lista original de numbers.', 
        'Não, porque depende de uma variável externa.', 
        'Sim, porque sempre retorna uma nova lista.', 
        'Não, porque a operação de filtro pode causar efeitos colaterais.'
      ],
      respostaCorreta: 0
    },
    { 
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Qual é o impacto do uso de funções puras na implementação de algoritmos recursivos?',
      opcoes: [
        'Aumenta a chance de estouro de pilha devido a chamadas recursivas profundas.', 
        'Permite otimizações como Tail Call Optimization.', 
        'Reduz a legibilidade do código.', 
        'Exige a utilização de variáveis globais para controle de estado.'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Qual é a principal implicação de usar funções puras em um sistema de múltiplas threads?',
      opcoes: [
        'Aumento do uso de locks para garantir segurança.', 
        'Redução de problemas de concorrência e condições de corrida.', 
        'Necessidade de implementação de um sistema de estado compartilhado.', 
        'Aumento da complexidade do gerenciamento de memória.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Em programação funcional, como a imutabilidade se relaciona com a definição de funções puras?',
      opcoes: [
        'A imutabilidade é irrelevante para funções puras.', 
        'Funções puras dependem de variáveis mutáveis.', 
        'A imutabilidade garante que funções não causarão efeitos colaterais.', 
        'Funções puras não podem manipular dados imutáveis.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Em um contexto de programação funcional, o que significa a expressão "referência transparente"?',
      opcoes: [
        'Uma expressão que sempre pode ser substituída por seu valor sem alterar o comportamento do programa.', 
        'Uma expressão que não pode ser usada em funções puras.', 
        'Uma expressão que causa efeitos colaterais em variáveis globais.', 
        'Uma expressão que não pode ser otimizada pelo compilador.'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Qual dos seguintes padrões de design é frequentemente utilizado em conjunto com funções puras para melhorar a composição de funções?',
      opcoes: [
        'Padrão de Singleton', 
        'Funções de ordem superior', 
        'Padrão Observer', 
        'Padrão de Comando'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Por que o conceito de memoization é particularmente relevante para funções puras?',
      opcoes: [
        'Porque funções puras não podem ser otimizadas.', 
        'Porque memoization é uma forma de alterar o estado global.', 
        'Porque memoization pode melhorar o desempenho sem causar efeitos colaterais.', 
        'Porque memoization é irrelevante para funções que dependem de variáveis externas.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Como as funções puras podem influenciar a arquitetura de um sistema em microserviços?',
      opcoes: [
        'Elas permitem o compartilhamento de estado entre serviços.', 
        'Elas facilitam a testabilidade e a previsibilidade dos serviços.', 
        'Elas aumentam a complexidade da comunicação entre serviços.', 
        'Elas requerem o uso de bancos de dados mutáveis.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Em uma linguagem que suporta programação funcional, como a imutabilidade afeta a eficiência de funções puras?',
      opcoes: [
        'Imutabilidade pode levar a cópias desnecessárias de dados, diminuindo a eficiência.', 
        'Imutabilidade não tem impacto na eficiência.', 
        'Imutabilidade sempre aumenta a eficiência de funções puras.', 
        'Funções puras são sempre ineficientes por causa da imutabilidade.'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 3,
      tipo: 'pureza',
      pergunta: 'Qual é o papel das funções de ordem superior na implementação de funções puras?',
      opcoes: [
        'Elas são necessárias apenas para funções impuras.', 
        'Elas permitem a criação de funções que podem manipular outras funções como argumentos.', 
        'Elas não têm relação com a pureza das funções.', 
        'Elas aumentam a complexidade da implementação de funções puras.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'O que caracteriza uma função de alta ordem?',
      tipo: 'altaOrdem',
      opcoes: [
        'Uma função que retorna um número.',
        'Uma função que pode receber outras funções como argumentos ou retornar funções como resultado.',
        'Uma função que só pode ser utilizada em um determinado escopo.',
        'Uma função que não aceita parâmetros.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Qual das seguintes opções é um exemplo de uma função de alta ordem em JavaScript?',
      tipo: 'altaOrdem',
      opcoes: [
        'function add(a, b) { return a + b; }',
        'let sum = 0;',
        'function greet() { console.log("Hello!"); }',
        'function applyFunction(f, x) { return f(x); }'
      ],
      respostaCorreta: 3
    },
    {
      nivel: 1,
      pergunta: 'Em Python, qual função de alta ordem é utilizada para aplicar uma função a todos os itens de um iterável?',
      tipo: 'altaOrdem',
      opcoes: [
        'map()',
        'filter()',
        'reduce()',
        'apply()'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 1,
      pergunta: 'Qual é o efeito do seguinte código em JavaScript?\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);',
      tipo: 'altaOrdem',
      opcoes: [
        'doubled será [2, 4, 6].',
        'doubled será [1, 2, 3].',
        'O código irá gerar um erro.',
        'doubled será [1, 4, 9].'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 1,
      pergunta: 'O que faz a função filter() em uma lista?',
      tipo: 'altaOrdem',
      opcoes: [
        'Ela aplica uma função a cada elemento e retorna um novo valor.',
        'Ela transforma todos os elementos em um único valor.',
        'Ela retorna apenas os elementos que satisfazem uma condição específica.',
        'Ela ordena a lista.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 1,
      pergunta: 'Qual dos seguintes exemplos ilustra o uso da função reduce() em JavaScript?',
      tipo: 'altaOrdem',
      opcoes: [
        'array.reduce(x => x + 1)',
        'array.reduce(x => x > 0)',
        'array.reduce((acc, x) => acc + x, 0)',
        'array.reduce(x => console.log(x))'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 1,
      pergunta: 'No código abaixo, o que a função double faz?\ndef double(x):\nreturn x * 2\nnumbers = [1, 2, 3]\nresult = list(map(double, numbers))',
      tipo: 'altaOrdem',
      opcoes: [
        'Retorna a soma dos números.',
        'Retorna a lista original.',
        'Retorna uma nova lista com os números dobrados.',
        'Gera um erro.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 1,
      pergunta: 'Qual das seguintes opções é uma vantagem do uso de funções de alta ordem?',
      tipo: 'altaOrdem',
      opcoes: [
        'Aumenta a complexidade do código.',
        'Permite a reutilização de código e abstração.',
        'Reduz a legibilidade do código.',
        'Diminui o desempenho do programa.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Qual das seguintes funções é uma aplicação comum de funções de alta ordem?',
      tipo: 'altaOrdem',
      opcoes: [
        'Aritmética básica.',
        'Mapeamento de uma lista para transformar seus elementos.',
        'Estruturas condicionais.',
        'Declaração de variáveis.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Qual das seguintes afirmações sobre funções de alta ordem é verdadeira?',
      tipo: 'altaOrdem',
      opcoes: [
        'Elas não podem ser usadas com arrays.',
        'Elas podem encapsular comportamento e criar funções personalizadas.',
        'Elas não aceitam funções como argumentos.',
        'Elas não podem retornar funções.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'O que é closure em programação funcional?',
      tipo: 'altaOrdem',
      opcoes: [
        'Uma função que não retorna valores.',
        'Uma função que captura o ambiente em que foi criada.',
        'Uma função que não pode ser chamada.',
        'Uma função que cria uma nova variável.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Qual é a função de alta ordem que pode ser usada para aplicar uma função a cada elemento de uma lista e retornar um valor acumulado?',
      tipo: 'altaOrdem',
      opcoes: [
        'map',
        'filter',
        'reduce',
        'apply'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 2,
      pergunta: 'Como você pode usar a função filter para obter todos os números ímpares de uma lista?',
      tipo: 'altaOrdem',
      opcoes: [
        'filter( x: x % 2 == 0, lista)',
        'filter( x: x % 2 != 0, lista)',
        'filter( x: x > 0, lista)',
        'filter( x: x < 0, lista)'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Dada a função:\nconst filtrar = [1,2,3,4,5]\nconst filtrarPares= filtrar.filter( x => x % 2 == 0);\nO que ela retorna quando chamada?',
      tipo: 'altaOrdem',
      opcoes: [
        '[1, 3, 5]',
        '[2, 4]',
        '[1, 2, 3, 4, 5]',
        'None'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Como se chama o processo de passar uma função como argumento para outra função?',
      tipo: 'altaOrdem',
      opcoes: [
        'Recursão',
        'Composição de funções',
        'Higher-order function',
        'Encapsulamento'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 2,
      pergunta: 'Dada a lista [1, 2, 3], qual é a saída de lista.map(( x => x**2), [1, 2, 3])?',
      tipo: 'altaOrdem',
      opcoes: [
        '[1, 2, 3]',
        '[1, 4, 9]',
        '[2, 3, 6]',
        '[3, 2, 1]'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Em Haskell, qual das seguintes expressões representa uma função de alta ordem que recebe outra função como argumento?',
      tipo: 'altaOrdem',
      opcoes: [
        'f x = x + 1',
        'apply f x = f x',
        'g = /x -> x * 2',
        'let x = 5'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'O que a função reduce requer como seu primeiro argumento?',
      tipo: 'altaOrdem',
      opcoes: [
        'Um iterável.',
        'Uma função que aceita dois argumentos.',
        'Uma lista de números.',
        'Uma string.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Qual a diferença entre map e filter?',
      tipo: 'altaOrdem',
      opcoes: [
        'map retorna uma lista, filter não retorna nada.',
        'map aplica uma função a todos os elementos, enquanto filter aplica uma condição.',
        'map aceita apenas uma função, enquanto filter aceita várias.',
        'Não há diferença, são a mesma coisa.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Quais das seguintes opções são exemplos de funções de alta ordem?',
      tipo: 'altaOrdem',
      opcoes: [
        'sum, max, min',
        'filter, map, reduce',
        'print, input, str',
        'def, return, lambda'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'O que acontece quando você passa uma função como argumento para outra função em JavaScript?',
      tipo: 'altaOrdem',
      opcoes: [
        'A função é ignorada.',
        'A função é executada imediatamente.',
        'A função é armazenada e pode ser chamada dentro da função que a recebeu.',
        'A função não pode ser chamada dentro da função que a recebeu.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 3,
      pergunta: 'Qual é o retorno da função abaixo quando chamada?\nconst funcao = (a, b) => a + b;\nconst resultado = funcao(1, 2);',
      tipo: 'altaOrdem',
      opcoes: [
        '3',
        'undefined',
        'NaN',
        'Erro'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 3,
      pergunta: 'Qual é a saída do código abaixo?\nconst numeros = [1, 2, 3];\nconst dobro = numeros.map(n => n * 2);\nconsole.log(dobro);',
      tipo: 'altaOrdem',
      opcoes: [
        '[1, 2, 3]',
        '[2, 4, 6]',
        '[1, 4, 9]',
        'undefined'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'O que significa "funções de alta ordem podem retornar funções"?',
      tipo: 'altaOrdem',
      opcoes: [
        'Elas não podem retornar valores.',
        'Elas podem retornar funções anônimas.',
        'Elas não podem ser usadas como retorno.',
        'Elas retornam valores inteiros.'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Dado o seguinte código, qual é o resultado? \nconst multiplicarPor = (n) => (x) => n * x;\nconst dobro = multiplicarPor(2);\nconst resultado = dobro(5);',
      tipo: 'altaOrdem',
      opcoes: [
        '5',
        '10',
        '2',
        '0'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Qual é a função que permite modificar ou reduzir elementos de um array em um único valor?',
      tipo: 'altaOrdem',
      opcoes: [
        'map',
        'reduce',
        'filter',
        'sort'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Como você pode passar uma função como argumento em JavaScript?',
      tipo: 'altaOrdem',
      opcoes: [
        'Usando parênteses.',
        'Colocando a função dentro de uma string.',
        'Apenas se a função for nomeada.',
        'Apenas se a função for anônima.'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 3,
      pergunta: 'Em programação funcional, o que significa composição de funções?',
      tipo: 'altaOrdem',
      opcoes: [
        'Combinar várias funções em uma.',
        'Separar funções complexas em partes menores.',
        'Executar funções em sequência, onde a saída de uma se torna a entrada da próxima.',
        'Criar funções dentro de outras funções.'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 3,
      pergunta: 'Qual das seguintes opções representa a ideia de "curry" em programação funcional?',
      tipo: 'altaOrdem',
      opcoes: [
        'Dividir funções em partes menores que podem ser chamadas com menos argumentos.',
        'Fazer uma função aceitar múltiplos parâmetros de uma vez.',
        'Fazer uma função que não aceita parâmetros.',
        'Transformar funções em strings.'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 1,
      pergunta: 'O que é currying?',
      tipo: 'currying',
      opcoes: [
        'Um tipo de estrutura de dados',
        'Uma técnica que transforma uma função que toma múltiplos argumentos em uma sequência de funções que tomam um único argumento',
        'Um método de ordenação de listas',
        'Uma técnica de recursão'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Qual é a principal vantagem do currying?',
      tipo: 'currying',
      opcoes: [
        'Reduzir o consumo de memória',
        'Facilitar a reutilização de funções',
        'Aumentar a velocidade do programa',
        'Melhorar a legibilidade do código'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Qual das seguintes expressões em JavaScript representa uma função curried?',
      tipo: 'currying',
      opcoes: [
        'const add = (x, y) => x + y;',
        'const add = x => y => x + y;',
        'const add = x, y => x + y;',
        'const add = x => { return y => x + y; };'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Qual é a saída da expressão const add = x => y => x + y; add(5)(3)?',
      tipo: 'currying',
      opcoes: [
        '5',
        '3',
        '8',
        'undefined'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 1,
      pergunta: 'O que acontece se você aplicar uma função curried com menos argumentos do que ela espera?',
      tipo: 'currying',
      opcoes: [
        'Retorna um erro',
        'Retorna null',
        'Retorna uma nova função que espera os argumentos restantes',
        'Retorna um valor padrão'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 1,
      pergunta: 'Como você faria uma função curried que soma três números em JavaScript?',
      tipo: 'currying',
      opcoes: [
        'const addThree = (x, y, z) => x + y + z;',
        'const addThree = (x) => (y) => (z) => x + y + z;',
        'const addThree = x,y,z => (x + y + z);'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'O que significa aplicar uma função parcialmente?',
      tipo: 'currying',
      opcoes: [
        'Chamar a função com todos os argumentos',
        'Chamar a função com alguns argumentos e retornar uma nova função',
        'Ignorar os argumentos',
        'Fazer uma operação assíncrona'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Como você chamaria uma função divide que aceita dois argumentos, se ela estiver curried?',
      tipo: 'currying',
      opcoes: [
        'divide(10, 2)',
        'divide(10)(2)',
        'divide 10 2',
        'divide[10, 2]'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 1,
      pergunta: 'Como você poderia usar currying para criar uma função que subtrai um número fixo?',
      tipo: 'currying',
      opcoes: [
        'const subtractFixed = x => y => y - x;',
        'const subtractFixed = x => y => x - y;',
        'const subtractFixed = y => x => x - y;',
        'const subtractFixed = (x, y) => x - y;'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 1,
      pergunta: 'Qual é um exemplo de uso prático de currying?',
      tipo: 'currying',
      opcoes: [
        'Criar funções de configuração',
        'Manipular strings',
        'Realizar operações assíncronas',
        'Todos os anteriores'
      ],
      respostaCorreta: 3
    },
    {
      nivel: 2,
      pergunta: 'Qual é o papel da função bind() em relação ao currying?',
      tipo: 'currying',
      opcoes: [
        'Executar uma função imediatamente',
        'Criar uma nova função com alguns argumentos pré-definidos',
        'Transformar uma função em um array',
        'Retornar o escopo de uma função'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Como você descreveria uma função que aceita outra função como argumento e a retorna curried?',
      tipo: 'currying',
      opcoes: [
        'Função pura',
        'Função de ordem superior',
        'Função anônima',
        'Função recursiva'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'Qual das seguintes opções representa uma aplicação parcial correta em JavaScript?',
      tipo: 'currying',
      opcoes: [
        'const partial = (fn, ...args) => (...remainingArgs) => fn(...args, ...remainingArgs);',
        'const partial = fn => (...args) => fn(args);',
        'const partial = (fn, a, b) => fn(a, b);',
        'const partial = (fn) => fn();'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 2,
      pergunta: 'Em um código de currying, o que func(1)(2)(3) representa?',
      tipo: 'currying',
      opcoes: [
        'Uma função que soma 1, 2 e 3',
        'Uma função que retorna 1',
        'Uma função que não pode ser chamada',
        'Uma função que retorna 0'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 2,
      pergunta: 'Qual é o conceito oposto ao currying?',
      tipo: 'currying',
      opcoes: [
        'Função de ordem superior',
        'Aplicação parcial',
        'Uncurrying',
        'Recursão'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 2,
      pergunta: 'O que será impresso no console se o seguinte código for executado?\nconst add = x => y => x + y;\nconst add5 = add(5);\nconsole.log(add5(10));',
      tipo: 'currying',
      opcoes: [
        '5',
        '10',
        '15',
        '0'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 2,
      pergunta: 'Qual é a diferença entre bind() e curry()?',
      tipo: 'currying',
      opcoes: [
        'bind() altera o contexto de uma função, enquanto curry() transforma a forma como a função é chamada',
        'Ambos são iguais',
        'curry() altera o contexto de uma função, enquanto bind() transforma a forma como a função é chamada',
        'Nenhum dos dois é útil'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 2,
      pergunta: 'O que será impresso no console com o seguinte código?\nconst add = x => y => z => x + y - z;\nconsole.log(add(6)(2)(3));',
      tipo: 'currying',
      opcoes: [
        '6',
        '3',
        '1',
        '5'
      ],
      respostaCorreta: 3
    },
    {
      nivel: 2,
      pergunta: 'Qual das seguintes é uma abordagem comum para currying em JavaScript?',
      tipo: 'currying',
      opcoes: [
        'Usar funções nomeadas',
        'Usar funções anônimas',
        'Usar métodos de array',
        'Usar classes'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 2,
      pergunta: 'O que será impresso neste código?\nconst subtract = a => b => a - b;\nconst subtractFrom10 = subtract(10);\nconsole.log(subtractFrom10(4));',
      tipo: 'currying',
      opcoes: [
        '4',
        '6',
        '10',
        '14'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Qual é o impacto do currying na legibilidade do código?',
      tipo: 'currying',
      opcoes: [
        'Torna o código menos legível',
        'Pode melhorar a legibilidade ao expor operações mais simples',
        'Não tem impacto na legibilidade',
        'Apenas torna o código mais longo'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Qual das seguintes linguagens de programação suporta currying nativamente?',
      tipo: 'currying',
      opcoes: [
        'Java',
        'Python',
        'Haskell',
        'C'
      ],
      respostaCorreta: 2
    },
    {
      nivel: 3,
      pergunta: 'Como o currying pode afetar a performance do seu código?',
      tipo: 'currying',
      opcoes: [
        'Pode melhorar a performance',
        'Pode reduzir a performance devido à criação de funções intermediárias',
        'Não tem impacto na performance',
        'Sempre reduz a performance'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Por que o currying é importante na programação funcional?',
      tipo: 'currying',
      opcoes: [
        'Facilita a composição de funções',
        'Torna todas as funções mais rápidas',
        'É apenas uma técnica estética',
        'Não é realmente importante'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 3,
      pergunta: 'Como você chamaria uma função curried para multiplicar por 3 e depois adicionar 5?',
      tipo: 'currying',
      opcoes: [
        'multiplyByThreeAddFive(5)',
        'multiplyByThree(5)(5)',
        'multiplyByThree(5) + 5',
        'multiplyByThree(5) + multiplyByFive(5)'
      ],
      respostaCorreta: 0
    },
    {
      nivel: 3,
      pergunta: 'Qual dos seguintes cenários se beneficiaria do uso de currying?',
      tipo: 'currying',
      opcoes: [
        'Quando você precisa de múltiplos parâmetros',
        'Quando você tem parâmetros fixos',
        'Quando você precisa de um valor de retorno direto',
        'Quando você precisa de uma função anônima'
      ],
      respostaCorreta: 1
    },
    {
      nivel: 3,
      pergunta: 'Como o currying pode ajudar na composição de funções?',
      tipo: 'currying',
      opcoes: [
        'Permite que funções sejam chamadas com todos os parâmetros de uma vez',
        'Permite que você combine funções com mais facilidade',
        'Não ajuda na composição de funções',
        'Faz com que funções se tornem mais longas'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 1,
      pergunta: 'Qual método de array JavaScript NÃO altera o array original e, portanto, é considerado imutável?',
      tipo: 'imutabilidade',
      opcoes: [
        'splice()', 
        'map()', 
        'sort()', 
        'reverse()'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 1,
      pergunta: 'Qual das seguintes estruturas em JavaScript é imutável por padrão?',
      tipo: 'imutabilidade',
      opcoes: [
        'Arrays', 
        'Objetos', 
        'Strings', 
        'Mapas'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 1,
      pergunta: 'Em qual dos cenários abaixo a imutabilidade é fundamental para evitar problemas?',
      tipo: 'imutabilidade',
      opcoes: [
        'Ao alterar o estado global da aplicação', 
        'Ao trabalhar com dados de um banco de dados', 
        'Ao trabalhar com funções puras em programação funcional', 
        'Ao criar interfaces de usuário com for loops'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 1,
      pergunta: 'Qual dos métodos a seguir cria uma cópia imutável de um objeto em JavaScript?',
      tipo: 'imutabilidade',
      opcoes: [
        'Object.assign()', 
        'Object.freeze()', 
        'Object.seal()', 
        'delete'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 1,
      pergunta: 'No contexto de programação funcional, qual é a principal vantagem da imutabilidade?',
      tipo: 'imutabilidade',
      opcoes: [
        'Melhor desempenho', 
        'Facilita a depuração e o teste', 
        'Menos consumo de memória', 
        'Código mais curto'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 1,
      pergunta: 'O que acontece se você tentar modificar uma propriedade de um objeto congelado usando Object.freeze()?',
      tipo: 'imutabilidade',
      opcoes: [
        'O valor será alterado', 
        'Uma exceção será lançada', 
        'O valor permanecerá o mesmo', 
        'O objeto será excluído'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 1,
      pergunta: 'Qual das alternativas a seguir é uma técnica comum em programação funcional para garantir a imutabilidade de objetos?',
      tipo: 'imutabilidade',
      opcoes: [
        'Modificar o objeto diretamente', 
        'Clonar o objeto antes de modificar', 
        'Usar loops for para iterar', 
        'Usar funções recursivas'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 1,
      pergunta: 'Qual das funções de array abaixo é imutável?',
      tipo: 'imutabilidade',
      opcoes: [
        'push()', 
        'splice()', 
        'filter()', 
        'reverse()'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 1,
      pergunta: 'Em programação funcional, por que a imutabilidade é importante ao trabalhar com funções puras?',
      tipo: 'imutabilidade',
      opcoes: [
        'Porque funções puras não podem retornar valores', 
        'Porque garante que o estado não seja alterado inesperadamente', 
        'Porque funções puras sempre modificam os argumentos', 
        'Porque funções puras podem ter efeitos colaterais'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 1,
      pergunta: 'Qual das alternativas demonstra uma abordagem funcional e imutável para atualizar o valor de uma propriedade em um objeto?',
      tipo: 'imutabilidade',
      opcoes: [
        'obj.name = "Novo Nome"', 
        'Object.assign(obj, { name: "Novo Nome" })', 
        'const newObj = { ...obj, name: "Novo Nome" }', 
        'delete obj.name'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 2,
      pergunta: 'Qual das seguintes alternativas é uma prática comum em programação funcional para evitar mutabilidade?',
      tipo: 'imutabilidade',
      opcoes: [
        'Usar variáveis var', 
        'Usar let para redefinir o valor de uma variável', 
        'Usar const sempre que possível', 
        'Modificar diretamente objetos globais'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 2,
      pergunta: 'O que significa "imutabilidade profunda" em JavaScript?',
      tipo: 'imutabilidade',
      opcoes: [
        'Não permitir alterações em qualquer nível de um objeto, incluindo objetos aninhados', 
        'Garantir que apenas a primeira camada de propriedades de um objeto seja imutável', 
        'Clonar um objeto e suas propriedades mais internas', 
        'Remover todas as referências de um objeto'
      ],
      respostaCorreta: 0
    },
    { 
      nivel: 2,
      pergunta: 'Qual das opções abaixo é uma maneira de garantir a imutabilidade de objetos complexos em JavaScript?',
      tipo: 'imutabilidade',
      opcoes: [
        'Usar loops para iterar e modificar o objeto', 
        'Usar Object.freeze() em todos os níveis do objeto', 
        'Redefinir o objeto com delete', 
        'Usar splice() para modificar arrays aninhados'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 2,
      pergunta: 'Qual das alternativas a seguir NÃO é considerada uma técnica de imutabilidade?',
      tipo: 'imutabilidade',
      opcoes: [
        'Usar concat() para adicionar elementos a um array', 
        'Usar map() para modificar arrays', 
        'Usar splice() para remover itens de um array', 
        'Usar o operador de espalhamento (spread) para copiar objetos'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 2,
      pergunta: 'Qual das opções a seguir exemplifica uma maneira de evitar a mutação de arrays?',
      tipo: 'imutabilidade',
      opcoes: [
        'array.push(item)', 
        'array.splice(index, 1)', 
        'array.filter(item => item !== value)', 
        'array.reverse()'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 2,
      pergunta: 'Qual é a diferença entre imutabilidade superficial e imutabilidade profunda?',
      tipo: 'imutabilidade',
      opcoes: [
        'Imutabilidade superficial se aplica a arrays, e imutabilidade profunda a objetos', 
        'Imutabilidade superficial congela apenas o primeiro nível, enquanto imutabilidade profunda congela todos os níveis', 
        'Imutabilidade profunda permite modificar propriedades internas', 
        'Não há diferença, ambos os termos são intercambiáveis'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 2,
      pergunta: 'Qual é o principal benefício de garantir a imutabilidade em funções assíncronas?',
      tipo: 'imutabilidade',
      opcoes: [
        'O código se torna mais difícil de manter', 
        'O código pode ser executado mais rapidamente', 
        'O código fica mais previsível, pois elimina problemas de concorrência', 
        'A imutabilidade não tem impacto em funções assíncronas'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 2,
      pergunta: 'Qual é a principal desvantagem do uso de imutabilidade em estruturas de dados complexas?',
      tipo: 'imutabilidade',
      opcoes: [
        'A imutabilidade aumenta o risco de erros no código', 
        'A imutabilidade aumenta a complexidade do gerenciamento de estado', 
        'A imutabilidade pode aumentar o uso de memória, já que cópias são criadas', 
        'A imutabilidade torna o código menos eficiente'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 2,
      pergunta: 'Qual das opções a seguir é uma maneira imutável de remover uma propriedade de um objeto em JavaScript?',
      tipo: 'imutabilidade',
      opcoes: [
        'delete obj.prop', 
        'const newObj = Object.assign({}, obj); delete newObj.prop;', 
        'obj.prop = undefined', 
        'obj = { ...obj, prop: null }'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 3,
      pergunta: 'Quando se trabalha com referência imutável em JavaScript, o que pode ser alterado em um objeto declarado com const?',
      tipo: 'imutabilidade',
      opcoes: [
        'O valor da referência', 
        'As propriedades internas do objeto', 
        'Nenhuma parte do objeto pode ser alterada', 
        'Apenas arrays podem ser alterados, não objetos'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 3,
      pergunta: 'Qual das alternativas a seguir é verdadeira sobre a imutabilidade estrutural?',
      tipo: 'imutabilidade',
      opcoes: [
        'Toda modificação em um objeto resulta na criação de um novo objeto', 
        'Um objeto pode ser modificado diretamente, mantendo sua referência', 
        'A imutabilidade estrutural não se aplica a funções', 
        'A imutabilidade estrutural é uma prática antiga que não é mais recomendada'
      ],
      respostaCorreta: 0
    },
    { 
      nivel: 3,
      pergunta: 'O que é a biblioteca Immutable.js em JavaScript?',
      tipo: 'imutabilidade',
      opcoes: [
        'Uma biblioteca que permite manipulação de dados mutáveis', 
        'Uma biblioteca que fornece estruturas de dados imutáveis para JavaScript', 
        'Uma biblioteca que facilita a criação de funções mutáveis', 
        'Uma biblioteca que compila código JavaScript em código C'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 3,
      pergunta: 'Em programação funcional, como a imutabilidade pode impactar a paralelização de tarefas?',
      tipo: 'imutabilidade',
      opcoes: [
        'A imutabilidade não tem impacto na paralelização', 
        'A imutabilidade pode tornar a paralelização mais difícil devido à necessidade de cópias', 
        'A imutabilidade facilita a paralelização, pois elimina o compartilhamento de estado', 
        'A imutabilidade é desnecessária em programação paralela'
      ],
      respostaCorreta: 2
    },
    { 
      nivel: 3,
      pergunta: 'Qual das seguintes abordagens de gerenciamento de estado é fortemente baseada em imutabilidade?',
      tipo: 'imutabilidade',
      opcoes: [
        'Redux', 
        'Vuex', 
        'MobX', 
        'Flux'
      ],
      respostaCorreta: 0
    },
    { 
      nivel: 3,
      pergunta: 'Em que situação a imutabilidade pode causar um impacto negativo em termos de desempenho?',
      tipo: 'imutabilidade',
      opcoes: [
        'Ao atualizar grandes estruturas de dados frequentemente', 
        'Ao ler dados de uma API', 
        'Ao usar a imutabilidade em funções puras', 
        'A imutabilidade nunca causa impacto negativo'
      ],
      respostaCorreta: 0
    },
    { 
      nivel: 3,
      pergunta: 'Qual é uma abordagem comum para lidar com a imutabilidade em aplicações React?',
      tipo: 'imutabilidade',
      opcoes: [
        'Modificar diretamente o estado usando setState()', 
        'Usar o operador de espalhamento para criar cópias do estado', 
        'Usar apenas variáveis globais', 
        'Não usar a imutabilidade, pois não é necessária'
      ],
      respostaCorreta: 1
    },
    { 
      nivel: 3,
      pergunta: 'O que é a função merge() em bibliotecas que implementam imutabilidade?',
      tipo: 'imutabilidade',
      opcoes: [
        'Uma função que cria uma cópia de um objeto com propriedades mescladas', 
        'Uma função que modifica o objeto original', 
        'Uma função que remove todas as propriedades de um objeto', 
        'Uma função que transforma arrays em objetos'
      ],
      respostaCorreta: 0
    },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que melhor representa seu objetivo.
        const fun = (n) => {
          if (n==0) return '0'
          else if (n==1) return '1'
          else return 1 + fun(Math.floor(n/2)) + (n%2).toString()
        }`,
        opcoes: [
          'Aproxima para o maior inteiro e transforma em string.',
          'Representação decimal do binário.',
          'Representação binária do inteiro.',
          'Aproxima para o menor inteiro e transforma em string.'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que representa o resultado obtido.
        const fun = (fn, [x,…xs]) => {
          if (x===undefined) return [];
          else return [fn(x),…fun(fn,xs)];
        };
        console.log(fun([1,2,3,4,5]));`,
        opcoes: [
          '[1,4,9,16,25]',
          '[2,3,4,5,6]',
          '[2,4,6,8,10]',
          '[1,2,3,4,5]'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'O que é recursão em programação?',
        opcoes: [
          'Um loop infinito.',
          'Uma função que se chama repetidamente até atingir um caso base.',
          'Uma função que só é usada em linguagens de baixo nível.',
          'Um método que sempre retorna undefined.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'Qual a importância de um caso base em recursão?',
        opcoes: [
          'Evitar que a função continue indefinidamente.',
          'Garantir que a função seja iterativa.',
          'Garantir que a função use variáveis globais.',
          'Melhorar a legibilidade do código.'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'O que acontece se uma função recursiva não tiver um caso base?',
        opcoes: [
          'A função será chamada apenas uma vez.',
          'Ela entrará em um loop infinito até consumir toda a memória.',
          'A função nunca será chamada.',
          'A função retornará automaticamente 0.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'Qual das opções abaixo é uma função recursiva para calcular o fatorial de um número?',
        opcoes: [
          'function factorial(n) { return n * factorial(n-1); }',
          'function factorial(n) { let result = 1; for(let i = 1; i <= n; i++) { result *= i; } return result; }',
          'function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }',
          'function factorial(n) { return n + factorial(n-1); }'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'Escreva uma função recursiva para somar os números de um array. Qual é o caso base correto?',
        opcoes: [
          'if (arr.length === 0) return 0;',
          'if (arr[0] === null) return 0;',
          'if (arr.length > 0) return 0;',
          'if (arr.length === 1) return arr[0];'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'Qual é o caso base correto para calcular o fatorial recursivamente?',
        opcoes: [
          'if (n === 0) return 0;',
          'if (n <= 1) return 1;',
          'if (n === 1) return 0;',
          'if (n === -1) return n;'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'Em quais situações a recursão não é recomendada?',
        opcoes: [
          'Quando o problema pode ser resolvido facilmente com laços iterativos.',
          'Quando o caso base é desconhecido.',
          'Quando a função precisa ser otimizada.',
          'Quando o problema envolve processamento de texto.'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 1,
        tipo: 'recursividade',
        pergunta: 'Qual das seguintes é uma vantagem da recursão sobre laços iterativos?',
        opcoes: [
          'Ela sempre executa mais rápido que laços.',
          'Ela pode ser mais expressiva e simples para resolver problemas que envolvem subdivisão, como árvores.',
          'Ela nunca consome mais memória do que a iteração.',
          'Ela não precisa de um caso base.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que melhor representa seu objetivo.
        const fun = (a,b) => {
          if (b==0) return 0
          else return fun(a,b-1)+a
        }`,
        opcoes: [
          'Multiplica dois números naturais.',
          'Soma dois números naturais.',
          'Potencia a^b.',
          'Potencia b^a.'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: 'Como calcular o fatorial de um número natural?',
        opcoes: [
          'const fun = (n) => n==1 ? 1: fun(n-1)',
          'const fun = (n) => n==1 ? 1: fun(n-1)*n',
          'const fun = (n) => n==0 ? 1: fun(n-1)*n',
          'const fun = (n) => n==0 ? 1: fun(n-1)'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: `Função recursiva que verifica se uma lista de inteiros está ordenada em ordem crescente. Qual trecho?
        const fun = ([x,y,...xs]) => {
          if (y === undefined) return true;
          else if (x>y) return false;
          else return fun(xs);
        };`,
        opcoes: [
          'xs',
          '[y,...xs]',
          'xs.slice(1)',
          '[x,...xs]'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que representa o resultado obtido.
        const fun = (n) => {
          if (n>=101) return n-10
          else return fun(fun(n+11))
        }
        console.log(fun(98))`,
        opcoes: [
          '88',
          '91',
          '99',
          '101'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que representa o resultado obtido.
        const fun = ([x,y,…xs]) => {
          if (y===undefined) return [];
          else return [x+y,…fun(xs)];
        };
        console.log(fun([1,2,3,4,5]));`,
        opcoes: [
          '[3,7]',
          '[3,5,7,9]',
          '[3,7,5]',
          '[15]'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: `Qual é a saída da seguinte função recursiva?
        function sum(n) {
          if (n <= 0) return 0;
          return n + sum(n - 1);
        }
        console.log(sum(3));`,
        opcoes: [
          '3',
          '6',
          '0',
          '1'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: `Qual das seguintes funções calcula a soma de todos os elementos de uma lista de forma recursiva?
        a) function sum(arr) { return arr.reduce((acc, x) => acc + x); }
        b) function sum(arr) { return arr[0] + sum(arr.slice(1)); }
        c) function sum(arr) { if (arr.length === 0) return 0; return arr[0] + sum(arr.slice(1)); }
        d) function sum(arr) { let total = 0; for(let i = 0; i < arr.length; i++) total += arr[i]; return total; }`,
        opcoes: [
          'a',
          'b',
          'c',
          'd'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: 'Como podemos evitar o estouro de pilha em uma função recursiva?',
        opcoes: [
          'Aumentando a profundidade da recursão.',
          'Convertendo a função recursiva em uma função iterativa.',
          'Usando variáveis globais.',
          'Modificando o caso base.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: 'Em que situações a recursão é a abordagem preferida?',
        opcoes: [
          'Problemas que podem ser resolvidos de forma iterativa.',
          'Problemas que envolvem a divisão de problemas em subproblemas.',
          'Problemas que exigem manipulação de grandes volumes de dados.',
          'Problemas que não possuem um caso base.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: 'Qual a desvantagem da recursão em relação à iteração?',
        opcoes: [
          'Maior legibilidade.',
          'Maior consumo de memória devido à pilha de chamadas.',
          'É mais fácil de depurar.',
          'Não possui casos base.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        tipo: 'recursividade',
        pergunta: 'Qual é a complexidade de tempo de uma função recursiva que faz n chamadas recursivas?',
        opcoes: [
          'O(n)',
          'O(log n)',
          'O(2^n)',
          'O(n!)'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que melhor representa seu objetivo.
        function fib(n) {
          if (n <= 1) return n;
          return fib(n - 1) + fib(n - 2);
        }`,
        opcoes: [
          'Cálculo do fatorial.',
          'Cálculo da soma de um array.',
          'Cálculo da sequência de Fibonacci.',
          'Cálculo do máximo divisor comum.'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Considere a função abaixo:
        function power(base, exp) {
          if (exp === 0) return 1;
          return base * power(base, exp - 1);
        }`,
        opcoes: [
          'Calcula a potência de um número.',
          'Calcula o logaritmo.',
          'Calcula a raiz quadrada.',
          'Calcula o fatorial.'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Qual é a complexidade de tempo da função abaixo?
        function countDown(n) {
          if (n <= 0) return;
          console.log(n);
          countDown(n - 1);
        }`,
        opcoes: [
          'O(n)',
          'O(n^2)',
          'O(log n)',
          'O(1)'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que representa a saída da função abaixo:
        function reverse(str) {
          if (str === "") return "";
          return reverse(str.substr(1)) + str.charAt(0);
        }
        console.log(reverse("abcd"));`,
        opcoes: [
          '"abcd"',
          '"dcba"',
          '"a"',
          '""'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Assinale a alternativa que representa a saída da função abaixo:
        function sum(arr) {
          if (arr.length === 0) return 0;
          return arr[0] + sum(arr.slice(1));
        }
        console.log(sum([1, 2, 3, 4]));`,
        opcoes: [
          '1',
          '10',
          '0',
          '6'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Considere a função abaixo:
        function flatten(arr) {
          return arr.reduce((acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val) : val);
          }, []);
        }`,
        opcoes: [
          'Achata um array de objetos.',
          'Achata um array de strings.',
          'Achata um array de arrays.',
          'Achata um array de números.'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Qual é a complexidade de tempo da função abaixo?
        function factorial(n) {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
        }`,
        opcoes: [
          'O(n)',
          'O(log n)',
          'O(1)',
          'O(n^2)'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `Qual é a principal desvantagem da recursão?
        a) A falta de clareza no código.
        b) A possibilidade de estouro da pilha.
        c) O aumento do tempo de execução.
        d) A necessidade de escrever mais código.`,
        opcoes: [
          'a',
          'b',
          'c',
          'd'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `A função abaixo é uma implementação de qual técnica?
        function findMax(arr) {
          if (arr.length === 1) return arr[0];
          const maxOfRest = findMax(arr.slice(1));
          return Math.max(arr[0], maxOfRest);
        }`,
        opcoes: [
          'Programação dinâmica.',
          'Recursão.',
          'Backtracking.',
          'Dividir e conquistar.'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: 'O que a recursão é especialmente útil para resolver?',
        opcoes: [
          'Problemas que podem ser definidos em termos de si mesmos.',
          'Problemas que não podem ser definidos de forma iterativa.',
          'Problemas que exigem um desempenho constante.',
          'Problemas que não têm um caso base.'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 3,
        tipo: 'recursividade',
        pergunta: `A função abaixo é um exemplo de qual tipo de problema?
        function quicksort(arr) {
          if (arr.length <= 1) return arr;
          const pivot = arr[0];
          const left = arr.slice(1).filter(x => x < pivot);
          const right = arr.slice(1).filter(x => x >= pivot);
          return [...quicksort(left), pivot, ...quicksort(right)];
        }`,
        opcoes: [
          'Problema de combinação.',
          'Problema de otimização.',
          'Problema de ordenação.',
          'Problema de busca.'
        ],
        respostaCorreta: 2
      },
    {
        nivel: 1,
        pergunta: 'O que significa a composição de funções em um contexto de programação funcional?',
        tipo: 'compFuncao',
        opcoes: [
          'Combinar duas funções em uma só',
          'Criar uma função que não usa parâmetros',
          'Deletar uma função',
          'Chamar funções sequencialmente'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 1,
        pergunta: 'Qual das seguintes linguagens de programação suporta composição de funções de forma nativa?',
        tipo: 'compFuncao',
        opcoes: ['Python', 'Java', 'C', 'Assembly'],
        respostaCorreta: 0
      },
      {
        nivel: 1,
        pergunta: 'Qual é a principal vantagem da composição de funções?',
        tipo: 'compFuncao',
        opcoes: [
          'Aumentar a complexidade do código',
          'Reutilizar código de forma mais eficiente',
          'Reduzir a legibilidade do código',
          'Aumentar o número de variáveis'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 1,
        pergunta: 'A operação de composição de funções é comumente usada em:',
        tipo: 'compFuncao',
        opcoes: [
          'Orientação a objetos',
          'Programação imperativa',
          'Programação funcional',
          'Nenhuma das anteriores'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        pergunta: 'Em Python, qual biblioteca é frequentemente usada para composição de funções?',
        tipo: 'compFuncao',
        opcoes: ['NumPy', 'itertools', 'functools', 'pandas'],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        pergunta: 'Qual é a característica de uma função composta?',
        tipo: 'compFuncao',
        opcoes: [
          'Ela sempre deve retornar um valor diferente',
          'Ela é composta apenas de funções puras',
          'Ela pode depender de variáveis globais',
          'Ela pode ter efeitos colaterais'
        ],
        respostaCorreta: 1
      },
      {
        nivel: 1,
        pergunta: 'Qual das seguintes expressões representa a composição de duas funções em uma linguagem funcional?',
        tipo: 'compFuncao',
        opcoes: ['f + g', 'f - g', 'f(g(x))', 'nenhuma das anteriores'],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        pergunta: 'No contexto da programação funcional, funções puras são importantes porque:',
        tipo: 'compFuncao',
        opcoes: [
          'Elas não podem ser compostas',
          'Elas têm efeitos colaterais',
          'Elas permitem composição sem efeitos colaterais',
          'Elas são mais rápidas que funções impuras'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 1,
        pergunta: 'Dada a função h(x)=2x e g(x)=x+3, o que é h(g(5))?',
        tipo: 'compFuncao',
        opcoes: ['13', '16', '14', '10'],
        respostaCorreta: 1
      },
      {
        nivel: 1,
        pergunta: 'Qual é o resultado da expressão f(g(x)) se f(x)=x+2 e g(x)=x²?',
        tipo: 'compFuncao',
        opcoes: ['x²+2', '2x', 'x+2', '2x+2'],
        respostaCorreta: 0
      },
    
      // Média
      {
        nivel: 2,
        pergunta: 'O que o método map pode fazer em uma composição de funções?',
        tipo: 'compFuncao',
        opcoes: [
          'Aplicar uma função a cada elemento de um array',
          'Combinar dois arrays',
          'Criar um novo array vazio',
          'Ordenar um array'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 2,
        pergunta: 'O que a seguinte composição retorna? const f = x => x + 1; const g = x => x * 2; const h = compose(f, g); console.log(h(5));',
        tipo: 'compFuncao',
        opcoes: ['10', '11', '12', '6'],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        pergunta: 'Se você tiver uma lista de números e quiser compor uma função para dobrar e depois somar 1, qual seria a abordagem correta?',
        tipo: 'compFuncao',
        opcoes: [
          'numbers.map(double).map(increment)',
          'numbers.map(increment).map(double)',
          'numbers.map(compose(increment, double))',
          'compose(double, increment)(numbers)'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 2,
        pergunta: 'O que a função pipe faz em comparação com compose?',
        tipo: 'compFuncao',
        opcoes: [
          'Inverte a ordem das funções',
          'Executa as funções em paralelo',
          'Executa as funções da esquerda para a direita',
          'Executa as funções da direita para a esquerda'
        ],
        respostaCorreta: 0
      },
      {
        nivel: 2,
        pergunta: 'O que acontece quando você compõe funções que não são puras?',
        tipo: 'compFuncao',
        opcoes: [
          'O resultado será sempre o mesmo.',
          'O comportamento se torna previsível.',
          'O resultado pode variar dependendo do estado global.',
          'A composição falha.'
        ],
        respostaCorreta: 2
      },
      {
        nivel: 2,
        pergunta: 'Qual a saída do seguinte código? const toUpperCase = str => str.toUpperCase(); const exclaim = str => str + "!"; const excited = compose(toUpperCase, exclaim); console.log(excited("hello"));',
        tipo: 'compFuncao',
        opcoes: ['"hello!"', '"HELLO!"', '"HELLO!!"', '"hello!!"'],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        pergunta: 'Qual a saída do código abaixo? const square = x => x * x; const cube = x => x * x * x; const combined = x => square(cube(x)); console.log(combined(2));',
        tipo: 'compFuncao',
        opcoes: ['8', '64', '16', '32'],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        pergunta: 'Qual o resultado do código abaixo? const add = x => x + 10; const square = x => x * x; const process = x => square(add(x)); console.log(process(5));',
        tipo: 'compFuncao',
        opcoes: ['25', '225', '75', '100'],
        respostaCorreta: 1
      },
      {
        nivel: 2,
        pergunta: 'O que acontece quando você compõe uma função que altera o estado global?',
        tipo: 'compFuncao',
        opcoes: [
          'A função é executada normalmente.',
          'O estado global é sempre alterado.',
          'A função não pode ser composta.',
          'Pode causar efeitos colaterais indesejados.'
        ],
        respostaCorreta: 3
      },
      {
        nivel: 2,
        pergunta: 'Qual é o resultado da expressão const add = x => x + 2; const multiply = x => x * 3; const composed = x => multiply(add(x)); console.log(composed(2));',
        tipo: 'compFuncao',
        opcoes: ['6', '8', '10', '12'],
        respostaCorreta: 1
      },
    
      // Difícil
      {
        nivel: 3,
        pergunta: 'Qual será o resultado da expressão? const result = [1, 2, 3].map(x => x + 1).filter(x => x > 2).reduce((acc, x) => acc + x, 0)',
        tipo: 'compFuncao',
        opcoes: ['3', '4', '7', '8'],
        respostaCorreta: 2
      },
      {
        nivel: 3,
        pergunta: 'Qual é a saída do seguinte código? const compose = (...funcs) => x => funcs.reduceRight((acc, fn) => fn(acc), x); const increment = x => x + 1; const square = x => x * x; const combined = compose(increment, square); console.log(combined(3));',
        tipo: 'compFuncao',
        opcoes: ['9', '10', '11', '12'],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        pergunta: 'Qual é o resultado de const f = x => x + 1; const g = x => x * x; const h = x => f(g(f(g(x)))); console.log(h(2));?',
        tipo: 'compFuncao',
        opcoes: ['10', '11', '12', '13'],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        pergunta: 'O que o código abaixo retorna? const add = x => x + 1; const multiply = x => x * 2; const combined = (x) => multiply(add(x)); console.log(combined(5));',
        tipo: 'compFuncao',
        opcoes: ['6', '8', '10', '12'],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        pergunta: 'Qual a saída do código abaixo? const f = x => x * 2; const g = x => x + 3; const h = (x) => f(g(x)); console.log(h(5));',
        tipo: 'compFuncao',
        opcoes: ['8', '10', '12', '16'],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        pergunta: 'Qual é a saída do código abaixo? const double = x => x * 2; const addFive = x => x + 5; const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x); const process = pipe(double, addFive); console.log(process(3));',
        tipo: 'compFuncao',
        opcoes: ['6', '8', '11', '13'],
        respostaCorreta: 2
      },
      {
        nivel: 3,
        pergunta: 'Qual é a saída do código abaixo? const toUpperCase = str => str.toUpperCase(); const exclaim = str => str + "!"; const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x); const excited = pipe(toUpperCase, exclaim); console.log(excited("hello"));',
        tipo: 'compFuncao',
        opcoes: ['"HELLO!"', '"HELLO!!"', '"hello!"', '"hello!!"'],
        respostaCorreta: 0
      },
      {
        nivel: 3,
        pergunta: 'O que será retornado? const f = x => x + 1; const g = x => x * 2; const h = (x) => f(g(x)); console.log(h(3));',
        tipo: 'compFuncao',
        opcoes: ['5', '6', '7', '8'],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        pergunta: 'Qual a saída do seguinte código? const composed = x => add(multiply(x)); console.log(composed(2));',
        tipo: 'compFuncao',
        opcoes: ['4', '5', '6', '7'],
        respostaCorreta: 1
      },
      {
        nivel: 3,
        pergunta: 'Qual o resultado do seguinte código? const combined = (x) => square(add(x)); console.log(combined(4));',
        tipo: 'compFuncao',
        opcoes: ['20', '24', '36', '42'],
        respostaCorreta: 2
      }
];

export {perguntas};