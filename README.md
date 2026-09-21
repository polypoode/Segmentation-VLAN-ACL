# Challenge : Segmentation VLAN & Contrôle d'accès (ACL)

## Contexte

Vous êtes technicien réseau et vous intervenez chez MédiaSud, une PME de 45 collaborateurs spécialisée dans l'édition numérique. Jusqu'ici, l'ensemble du réseau interne fonctionnait sur un unique réseau plat (flat network) : tous les postes, serveurs et équipements partagent le même domaine de broadcast.

Suite à un audit de sécurité, plusieurs problèmes ont été identifiés:

- Un stagiaire a accidentellement accédé au serveur de paie depuis son poste.
- Des visiteurs connectés au Wi-Fi pouvaient voir les partages réseau internes.
- Aucune restriction n'existe sur l'accès à l'administration des équipements réseau.

Le responsable IT vous confie la mission de segmenter le réseau par service et de mettre en place des règles de filtrage pour appliquer une politique d'accès claire et justifiable.

## Objectifs pédagogiques

À l'issue de ce challenge, vous devez être capable de :

- Créer et configurer des VLAN sur un switch de niveau 2.
- Mettre en place le routage inter VLAN (router-on-a-stick ou switch L3).
- Rédiger et appliquer des ACL standard et étendues sur un routeur Cisco.
- Justifier chaque règle de filtrage par rapport à une politique d'accès donnée.
- Documenter votre travail de manière professionnelle.

## Environnement technique

| Élément | Spécification |
|---|---|
| Outil | Cisco Packet Tracer (version 8.x recommandée) |
| Routeur | 1 routeur (ex : 2911) pour le routage inter VLAN |
| Switch | 1 switch L2 (ex : 2960), ou L3 si vous souhaitez aller plus loin |
| Serveurs | 2 serveurs : 1 serveur RH, 1 serveur Comptabilité |
| Postes | 4 PC : 1 Direction, 1 RH, 1 Comptabilité, 1 Visiteur |
 
## Topologie à réaliser 


Vous devez construire la topologie suivante dans Packet Tracer :

```
                    [Routeur Inter-VLAN]
                          │
                    Trunk (802.1Q)
                          │
                     [Switch L2]
                    ┌──┬──┬──┬──┐
                    │  │  │  │  │
                  DIR RH CPT VIS SRV
```

---

Projet réalisé au sein de la formation O'Clock.
