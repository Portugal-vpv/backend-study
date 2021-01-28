const schedule = require('node-schedule');
const chore1 = schedule.scheduleJob('*/5 * 22 * * 3', () => {
    console.log('Execuntando tarefa 1', new Date().getSeconds());
});