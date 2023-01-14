({
    name: "WiFi", // Category Name
    description: "Connect to WiFi",
    author: "microBlock",
    category: "Communication",
    version: "1.1.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="wifi_connect">
                    <value name="ssid">
                        <shadow type="text">
                            <field name="TEXT">--wifi--name--</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "wifi_is_connected",
        "wifi_wait_connected",
        {
            xml: `
                <block type="text">
                    <field name="TEXT">--wifi--pass--</field>
                </block>
            `
        },
    ],
    chip: [
        "ESP32", // Chip support
        "RP2-WiFi"
    ]
});
