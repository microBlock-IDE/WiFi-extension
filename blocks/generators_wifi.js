Blockly.Python['wifi_connect'] = function(block) {
  var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var value_pass = Blockly.Python.valueToCode(block, 'pass', Blockly.Python.ORDER_ATOMIC) || 'None';
  
  Blockly.Python.definitions_['import_network'] = 'import network';

  var code = `wlan = network.WLAN(network.STA_IF); wlan.active(True); wlan.connect(${value_ssid}, ${value_pass})\n`;
  return code;
};

Blockly.Python['wifi_is_connected'] = function(block) {
  var code = 'wlan.isconnected()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['wifi_wait_connected'] = function(block) {
  var code = 'while not wlan.isconnected(): pass\n';
  return code;
};


Blockly.JavaScript['wifi_connect'] = function(block) {
  var value_ssid = Blockly.JavaScript.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var value_pass = Blockly.JavaScript.valueToCode(block, 'pass', Blockly.Python.ORDER_ATOMIC) || "";
  
  if (boardId === "arduino-uno-r4-wifi") {
    Blockly.JavaScript.definitions_['include']['WiFiS3.h'] = '#include <WiFiS3.h>';
  } else {
    Blockly.JavaScript.definitions_['include']['WiFi.h'] = '#include <WiFi.h>';
  }

  var code = `WiFi.begin(${value_ssid}.c_str()${value_pass ? `, ${value_pass}.c_str()` : ""});\n`;
  return code;
};

Blockly.JavaScript['wifi_is_connected'] = function(block) {
  if (boardId === "arduino-uno-r4-wifi") {
    Blockly.JavaScript.definitions_['include']['WiFiS3.h'] = '#include <WiFiS3.h>';
  } else {
    Blockly.JavaScript.definitions_['include']['WiFi.h'] = '#include <WiFi.h>';
  }

  var code = 'WiFi.status() == WL_CONNECTED';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['wifi_wait_connected'] = function(block) {
  if (boardId === "arduino-uno-r4-wifi") {
    Blockly.JavaScript.definitions_['include']['WiFiS3.h'] = '#include <WiFiS3.h>';
  } else {
    Blockly.JavaScript.definitions_['include']['WiFi.h'] = '#include <WiFi.h>';
  }

  var code = 
`while(WiFi.status() != WL_CONNECTED) {
  delay(10);
}
`;
  return code;
};
