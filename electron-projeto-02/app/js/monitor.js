
const { OSUtils } = require('node-os-utils');

const osutils = new OSUtils();

(async () => {
  // Get CPU usage
  const cpuUsage = await osutils.cpu.usage();
  if (cpuUsage.success) {
    console.log('CPU Usage:', cpuUsage.data + '%');
  }
})();