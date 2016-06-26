
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "about", "au-dessus", "après", "encore", "contre", "tout", "suis", "un", "et", "apres", "sont", "ne sont pas", "as", "au", "etre", "parceque", "been", "avant", "être", "dessous", "entre", "les deux", "mais", "par", "impossible", "peut pas", "pourrais", "ne pourrais pas", "était", "n'était pas", "faire", "fait", "ne fait pas", "faire", "non", "bas", "pendant", "chaque", "peu", "pour", "depuis", "plus loin", "avait", "avait pas", "avaient", "avoir", "posséder", "il", "elle", "ici", "sa", "elle-même", "lui", "lui-même", "son", "comment", "je", "je suis", "si", "dans", "dans", "etre", "ca", "c'est", "ça", "ca", "moi", "plus", "plupart", "mon", "moi-même", "non", "ou", "non", "off", "on", "une-fois", "seulement", "ou", "autre", "nos", "notre", "nous-même", "dehors", "terminé", "avoir", "même", "elle", "devrait", "donc", "quelques", "si", "que", "ca", "leur", "leurs", "eux", "eux-même", "alors", "ils", "elles", "ceci", "cela", "à travers", "pour", "trop", "sous", "pas avant", "haut", "beaucoup", "était", "quoi", "quand", "où", "quel", "pendant", "qui", "pourquoi", "avec", "toi", "tu", "toi-même"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'peridurale', 'replace_with': 'péridurale'},
     {'word': 'mal', 'replace_with': 'douleur'},
     {'word': 'piqure', 'replace_with': 'aiguille'},
     {'word': 'piqûre', 'replace_with': 'aiguille'},
     {'word': 'catheter', 'replace_with': 'cathéter'},
     {'word': 'medecin', 'replace_with': 'médecin'}

]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Internal strings

var tipuesearch_string_1 = 'Pas de titre';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 Résultat';
var tipuesearch_string_5 = 'Résultats';
var tipuesearch_string_6 = 'Précédent';
var tipuesearch_string_7 = 'Suivant';
var tipuesearch_string_8 = 'On a rien trouvé';
var tipuesearch_string_9 = 'les mots trop courant sont ignorés';
var tipuesearch_string_10 = 'trop court !!!';
var tipuesearch_string_11 = 'Doit contenir 1 caractère ou plus';
var tipuesearch_string_12 = 'Devrait être';
var tipuesearch_string_13 = 'caractères ou plus';
