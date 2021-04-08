# RPG_Gladiateur
rpg gladiateur thp


RPG

Pour ce projet, nous allons te demander de créer un RPG !
1. Introduction

Désormais, tu sais utiliser les classes ES6 de JavaScript. Savoir organiser sa POO efficacement n'est pas une simple tâche, mais il existe des domaines où la POO est extrêmement appropriée.

Le domaine des jeux est, comme tu as pu le voir dans le cours, une très bonne introduction à la POO. Ton objectif, aujourd'hui, sera de créer une partie de jeu vidéo !

Tu devras mettre en place plusieurs personnages qui pourront se taper dessus comme tout personnage de jeu vidéo qui se respecte. Chacun de ces personnages, en fonction de sa classe, sera capable de faire une action qui lui est propre.

Une fois que toutes tes classes seront créées, tu devras englober tes personnages dans un jeu. Ce jeu se jouera au tour par tour, via la console.
2. Le projet
2.1. Description

Nous allons faire un jeu où le joueur pourra contrôler 5 personnages qui vont se combattre à mort, façon gladiateurs. Chaque personnage aura des caractéristiques qui lui sont propres.

Chaque tour, pour chaque personnage, tu vas choisir qui attaquer. Le personnage qui a le plus de points de vie à la fin de 10 tours a gagné le jeu !
2.2. Nos personnages
2.2.1. Personnages et Classes

Chaque personnage aura trois caractéristiques :

    hp : acronyme de health points, soient points de vie. Un personnage commence avec un nombre défini de hp. S'il passe à 0 point de vie, il devient loser
    dmg : acronyme de damage, soient points de dégât. Un personnage pourra toujours effectuer une attaque simple enlevant un nombre précis de points de vie à une cible précise
    mana : les points de mana. Le mana est une ressource qui permet d'utiliser des attaques spéciales. Un personnage commence le jeu avec un nombre précis de mana qui lui permettront d'effectuer son sortilège spécial (coûtant un certain nombre de mana). Par exemple si un personnage commence avec 150 points de mana et que son sortilège spécial lui coûte 15 points de mana, il pourra effectuer 10 fois ce sortilège avant de tomber à 0 point de mana

Dans le jeu, nous aurons 5 classes :

    La classe Fighter (combattant équilibré sous tous les bords)
    La classe Paladin (chevalier puissant et défensif)
    La classe Monk (prêtre qui peut se guérir)
    La classe Berzerker (bourrin avec une attaque élevée)
    La classe Assassin (rusé et fourbe)

Chacune des classes aura une attaque spéciale spécifique à la classe, coûtant un certain nombre de mana. Chaque tour le joueur choisira s'il désire utiliser l'attaque normale, ou l'attaque spéciale.

Afin de rendre ton code plus lisible, les 5 classes de personnage seront étendues d'une autre classe Character.
2.2.2. Les classes

Voici les spécificités des 5 classes
2.2.2.1. Fighter

Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).

Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.
2.2.2.1. Paladin

Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.

Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
2.2.2.1. Monk

Le Monk commence avec 8 points de vie et 200 points de mana. Il a 2 points de dégât.

Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
2.2.2.1. Berzerker

Le Berzerker commence avec 8 points de vie et 0 point de mana. Il a 4 points de dégât.

Le Berzerker aura une attaque spéciale Rage lui donnant +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).
2.2.2.1. Assassin

L'Assassin commence avec 6 points de vie et 20 points de mana. Il a 6 points de dégât.

L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.
2.2.3. Nos personnages

Voici nos personnages :

    Grace sera le personnage de la classe Fighter
    Ulder sera le personnage de la classe Paladin
    Moana sera le personnage de la classe Monk
    Draven sera le personnage de la classe Berzerker
    Carl sera le personnage de la classe Assassin

2.2.4. Caractéristiques des personnages

Tous les personnages ont une méthode takeDamage, prenant en paramètre le nombre de dégâts à recevoir. Ils ont également une seconde méthode dealDamage, prenant en paramètre la victim à choisir. Également, ils ont un attribut status, par défaut à playing. Il pourra passer à winner ou loser.

Si jamais les PV d'un personnage tombent à 0, il est éliminé et ne peut plus jouer ni être attaqué. Son statut passe alors à loser. Lorsqu'un personnage en tue un autre, il regagne 20 point de mana.
2.2.5. En avant ?

À partir de là, tu as toutes les infos nécessaires pour créer les classes liées aux personnages. Je t'invite à le faire avant de passer aux classes liées au système du jeu.
