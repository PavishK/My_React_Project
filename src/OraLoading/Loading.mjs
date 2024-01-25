import ora from  'ora';

const s=ora({
    text:"Bulding...",
    spinner:"aesthetic",
    color:'green'
});

s.start();
setTimeout(()=>{
    s.stop();
},6000);
