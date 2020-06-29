module.exports = {
    src_folders: ["src/tests"],
    page_objects_path: ["src/pages"],

    webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome"
            },
            globals: {
                waitForConditionTimeout: 5000
            },
        },
        headless: {
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    args: ['-headless'],
                }
            }
        }
    }
}