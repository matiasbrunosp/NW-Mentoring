module.exports = {
    "src_folders": ["src/tests"],
    "page_objects_path": ["src/pages"],

    "webdriver": {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver",
        "port": 9515
    },

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}