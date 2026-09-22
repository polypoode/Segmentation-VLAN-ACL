# Installation de PTBuilder (Builder Code Editor)

PTBuilder est une extension tierce pour Cisco Packet Tracer qui ajoute un éditeur de code JavaScript permettant d'automatiser la création de topologies et l'envoi de commandes CLI.

Dépôt officiel : [github.com/kimmknight/PTBuilder](https://github.com/kimmknight/PTBuilder)

## Étape 1 — Télécharger l'extension

Télécharger le fichier `Builder.pts` à la racine du dépôt.

## Étape 2 — Installer l'extension dans Packet Tracer

1. Ouvrir Packet Tracer
2. Aller dans **Extensions > Scripting > Configure PT Script Modules**
3. Cliquer sur **Add...**
4. Sélectionner le fichier `Builder.pts` téléchargé

> Cette installation ne se fait qu'**une seule fois** par installation de Packet Tracer : le module reste enregistré tant que la configuration des modules n'est pas réinitialisée. Il n'est donc pas nécessaire de répéter cette étape à chaque session.

## Étape 3 — Utiliser l'extension

Une fois installée, l'éditeur de code est accessible à tout moment via :

**Extensions > Builder Code Editor**

C'est dans cette fenêtre que le script `automatisation.js` (voir fichier séparé) doit être collé puis exécuté.

## Étape 4 — Exécuter le script d'automatisation

1. Ouvrir une topologie Packet Tracer vierge
2. Ouvrir **Extensions > Builder Code Editor**
3. Coller le contenu de `automatisation.js`
4. Lancer l'exécution

Le script effectue, dans l'ordre et en une seule passe :

| Étape | Contenu |
|---|---|
| 1 | Création des équipements (R1, SW1, 2 serveurs, 4 PC) et de leurs liens |
| 2 | Création des VLAN et attribution des ports en mode access sur SW1 |
| 3 | Configuration du trunk 802.1Q entre SW1 et R1 |
| 4 | Création des sous-interfaces et routage inter-VLAN sur R1 |
| 5 | Configuration des ACL (standard + étendues) selon la politique d'accès |

## Ce qui reste manuel

L'adressage IP des postes (PC-DIR, PC-RH, PC-COMPTA, PC-VISITEUR) n'a **pas** de fonction confirmée dans l'API publique de PTBuilder. Il doit être fait manuellement, poste par poste :

**Desktop > IP Configuration**, en mode **Static** :

| Poste | IP | Masque | Passerelle |
|---|---|---|---|
| PC-DIR | 192.168.10.10 | 255.255.255.0 | 192.168.10.1 |
| PC-RH | 192.168.20.10 | 255.255.255.0 | 192.168.20.1 |
| PC-COMPTA | 192.168.30.10 | 255.255.255.0 | 192.168.30.1 |
| PC-VISITEUR | 192.168.40.10 | 255.255.255.0 | 192.168.40.1 |
| SRV-RH | 192.168.99.10 | 255.255.255.0 | 192.168.99.1 |
| SRV-COMPTA | 192.168.99.20 | 255.255.255.0 | 192.168.99.1 |

## Vérifications après exécution

Sur SW1 :
```
show vlan brief
show interfaces trunk
```

Sur R1 :
```
show ip interface brief
show access-lists
```

## Points de vigilance

- `getDevices(["switch"])[0]` et `getDevices(["router"])[0]` supposent qu'il n'y a qu'un seul switch et qu'un seul routeur dans la topologie. Avec plusieurs équipements du même type, l'ordre renvoyé par `getDevices()` n'est pas garanti — à vérifier au cas par cas.