Blockly.Python['wifi_connect'] = function(block) {
  var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var value_pass = Blockly.Python.valueToCode(block, 'pass', Blockly.Python.ORDER_ATOMIC) || 'None';
  
  Blockly.Python.definitions_['from_network_import_wlan'] = 'from network import WLAN';

  var code = `wlan = WLAN(network.STA_IF); wlan.active(True); wlan.connect(${value_ssid}, ${value_pass})\n`;
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
