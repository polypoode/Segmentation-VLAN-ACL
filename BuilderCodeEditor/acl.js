var router1 = getDevices(["router"])[0];

configureIosDevice(router1, "enable\nconfigure terminal");

configureIosDevice(router1, "access-list 10 permit 192.168.10.0 0.0.0.255");
configureIosDevice(router1, "line vty 0 4\naccess-class 10 in");

configureIosDevice(router1, "access-list 110 permit ip 192.168.10.0 0.0.0.255 any");

configureIosDevice(router1, "access-list 120 permit ip 192.168.20.0 0.0.0.255 host 192.168.99.10\naccess-list 120 deny ip any any");

configureIosDevice(router1, "access-list 130 permit ip 192.168.30.0 0.0.0.255 host 192.168.99.20\naccess-list 130 deny ip any any");

configureIosDevice(router1,
  "access-list 140 deny ip 192.168.40.0 0.0.0.255 192.168.10.0 0.0.0.255\n" +
  "access-list 140 deny ip 192.168.40.0 0.0.0.255 192.168.20.0 0.0.0.255\n" +
  "access-list 140 deny ip 192.168.40.0 0.0.0.255 192.168.30.0 0.0.0.255\n" +
  "access-list 140 deny ip 192.168.40.0 0.0.0.255 192.168.99.0 0.0.0.255\n" +
  "access-list 140 permit ip any any"
);

configureIosDevice(router1, "interface GigabitEthernet0/0.10\nip access-group 110 in");
configureIosDevice(router1, "interface GigabitEthernet0/0.20\nip access-group 120 in");
configureIosDevice(router1, "interface GigabitEthernet0/0.30\nip access-group 130 in");
configureIosDevice(router1, "interface GigabitEthernet0/0.40\nip access-group 140 in");

configureIosDevice(router1, "end\nwrite memory");




