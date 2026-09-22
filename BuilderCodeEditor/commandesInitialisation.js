// MISE EN PLACE 

addDevice("R1", "2911", 400, 100);

addDevice("SW1", "2960-24TT", 400, 250);

addDevice("SRV-RH", "Server-PT", 600, 400);
addDevice("SRV-COMPTA", "Server-PT", 700, 400);

addDevice("PC-DIR", "PC-PT", 100, 400);
addDevice("PC-RH", "PC-PT", 200, 400);
addDevice("PC-COMPTA", "PC-PT", 300, 400);
addDevice("PC-VISITEUR", "PC-PT", 400, 400);

addLink("R1", "GigabitEthernet0/0", "SW1", "GigabitEthernet0/1", "straight");

addLink("SW1", "FastEthernet0/1", "PC-DIR", "FastEthernet0", "straight");
addLink("SW1", "FastEthernet0/2", "PC-RH", "FastEthernet0", "straight");
addLink("SW1", "FastEthernet0/3", "PC-COMPTA", "FastEthernet0", "straight");
addLink("SW1", "FastEthernet0/4", "PC-VISITEUR", "FastEthernet0", "straight");
addLink("SW1", "FastEthernet0/5", "SRV-RH", "FastEthernet0", "straight");
addLink("SW1", "FastEthernet0/6", "SRV-COMPTA", "FastEthernet0", "straight");


// 1.2 Création des VLAN sur le switch
var sw1 = getDevices(["switch"])[0];

// VLAN à créer : { id, nom }
var vlans = [
  { id: 10, nom: "DIRECTION" },
  { id: 20, nom: "RH" },
  { id: 30, nom: "COMPTA" },
  { id: 40, nom: "VISITEURS" },
  { id: 99, nom: "SERVEURS" },
];

// Ports en mode access : { port, vlan }
var ports = [
  { port: "FastEthernet0/1", vlan: 10 },
  { port: "FastEthernet0/2", vlan: 20 },
  { port: "FastEthernet0/3", vlan: 30 },
  { port: "FastEthernet0/4", vlan: 40 },
  { port: "FastEthernet0/5", vlan: 99 },
  { port: "FastEthernet0/6", vlan: 99 },
];

configureIosDevice(sw1, "enable");
configureIosDevice(sw1, "configure terminal");

// Création des VLAN
for (var v of vlans) {
  configureIosDevice(sw1, "vlan " + v.id + "\nname " + v.nom);
}

// Attribution des ports en access
for (var p of ports) {
  configureIosDevice(sw1, 
    "interface " + p.port + "\nswitchport mode access\nswitchport access vlan " + p.vlan);
}

