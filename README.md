# Cubo Mágico 3D

Projeto da disciplina de Computação Gráfica (UNICAP). Implementação interativa de um Cubo Mágico (Rubik's Cube) 3×3×3 em Three.js, com câmera 3D e animação suave ao girar as faces com interações para montar o cubo.

## Objetivo do projeto
Aplicar os conceitos de transformações em 3D (translação, rotação, escala) e hierarquia de objetos (Groups) vistos em aula, construindo uma cena interativa em Three.js. A meta do grupo é entender o funcionamento matemático e o fluxo do código.

## Requisitos mínimos
- Cubo 3×3×3 com 27 cubinhos
- Cores corretas por face (6 cores)
- Rotação de pelo menos 2 faces (ex.: superior e frontal)
- Animação suave da rotação (interpolação do ângulo)
- Câmera em órbita com mouse (OrbitControls)

## Requisitos extras
- Contador de movimentos

## Referências
Fontes consultadas pelo grupo durante o desenvolvimento. Vai sendo atualizada conforme novos materiais forem usados.

- **Slides da disciplina**: `transf3d-p3-pratica.pdf` (prof. Pedro Ximenes, UNICAP). Base teórica: pilares Scene/Camera/Renderer, hierarquia de Groups, setup inicial.
- material de referencia  `transformações3D.pdf`
- **Exemplos da aula**: `ex1-rotacao.html`, `ex2-escopo.html`, `ex3-solar.html`. Padrão de organização do código (criação dos pilares, loop de animação, uso de `Group` para órbitas).
- **Documentação oficial do Three.js**: https://threejs.org/docs/
-  Claude code para estudo do material e analises.
-  [1.Documento.docx](https://github.com/user-attachments/files/28694304/1.Documento.docx)


## Membros do grupo
- Rafael Sampaio E Silva
- Matheus Fabiano Brbosa 
- David Cândido de Souza


## Declaração de Uso de Inteligência Artificial

Este projeto utilizou ferramentas de Inteligência Artificial (IA) como auxiliares no processo de desenvolvimento, garantindo total transparência acadêmica. As ferramentas não substituíram o raciocínio lógico e a autoria do grupo, mas atuaram como assistentes de produtividade dado o tempo curt, tamanho do projeto e falta de familiaridade com as tecnologias.

**Modelos Utilizados:**
* Google Gemini (Gemini 1.5 Pro)
* Anthropic Claude (Claude 3 Opus)

**Aplicações Práticas no Projeto:**
* **Depuração e Integração:** Utilizamos as IAs para identificar e corrigir erros gritantes de lógica, bem como para facilitar o *merge* de diferentes trechos de código escritos pelos integrantes da equipe.
* **Compreensão Matemática e Sintaxe:** A IA foi fundamental para explicar detalhadamente a matemática e a sintaxe dos códigos de apoio fornecidos em sala (como o exemplo do Sistema Solar) e dos slides de requisitos. Tentamos usar a IA para gerar *building blocks* práticos para o nosso projeto, mas as saídas iniciais não funcionaram muito bem entao fomos na unha mesmo muitas vezes so olhando a documentação.
* **Geração de Documentação:** A estrutura inicial deste `README.md` foi gerada por IA a partir dos nossos requisitos escritos em texto bruto. Depois, surgiu a necessidade de algumas partes o conteúdo serem ajustadas manualmente.
* **Interpolações e Movimentação Fluida:** Na reta final do projeto, solicitamos à IA que gerasse as interpolações matemáticas necessárias para a movimentação contínua das faces do cubo. Apesar da ajuda, os *outputs* gerados não eram perfeitos (apresentando falhas de alinhamento e eixo), o que tornou obrigatória a intervenção humana para ajustar e cravar a matemática correta no código final.
* **Trava de Movimento e Alinhamento de Eixos:** Recorremos a IA para desenhar uma máquina de estados e implementar um sistema de "trava" (lock) nas animações. Isso garantiu que as rotações das faces completassem exatos 90 graus por interação, sem deixar brechas para o usuário realizar "meias rotações" e quebrar a malha. Além disso, a IA ajudou a normalizar a orientação das faces, resolvendo um bug onde os blocos menores rotacionavam individualmente em torno de seus próprios centros (desalinhando o objeto inteiro) em vez de orbitarem o eixo central da face.




