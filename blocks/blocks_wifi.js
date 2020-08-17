Blockly.defineBlocksWithJsonArray(
[{
  "type": "wifi_connect",
  "message0": "WiFi Connect  SSID: %1 Password: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "ssid",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "pass",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "wifi_is_connected",
  "message0": "WiFi is connected",
  "inputsInline": true,
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "wifi_wait_connected",
  "message0": "WiFi wait connected",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
}]
);
