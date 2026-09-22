var router1 = getDevices(["router"])[0];

var interfaces = [
  { sousInterface: "GigabitEthernet0/0.10", vlan: 10, ip: "192.168.10.1" },
  { sousInterface: "GigabitEthernet0/0.20", vlan: 20, ip: "192.168.20.1" },
  { sousInterface: "GigabitEthernet0/0.30", vlan: 30, ip: "192.168.30.1" },
  { sousInterface: "GigabitEthernet0/0.40", vlan: 40, ip: "192.168.40.1" },
  { sousInterface: "GigabitEthernet0/0.99", vlan: 99, ip: "192.168.99.1" },
];

configureIosDevice(router1, "enable\nconfigure terminal");

for (var i of interfaces) {
  configureIosDevice(
    router1,
    "interface " + i.sousInterface +
    "\nencapsulation dot1Q " + i.vlan +
    "\nip address " + i.ip + " 255.255.255.0"
  );
}

configureIosDevice(router1, "interface GigabitEthernet0/0\nno shutdown");

configureIosDevice(router1, "end\nwrite memory");