import {existsSync, readFileSync} from 'node:fs';
const required=['dist/index.html','dist/vision.html','dist/resources/workflow-refinery-white-paper.pdf','dist/resources/workflow-refinery-presentation.pdf'];
for(const path of required){if(!existsSync(path))throw new Error(`Missing static artifact: ${path}`)}
const html=readFileSync('dist/vision.html','utf8');
for(const phrase of ['Proposed vision','Testable hypotheses','Human approval','Golden dataset','Rollback'])if(!html.includes(phrase))throw new Error(`Missing vision concept: ${phrase}`);
console.log('Static showcase and generated documents verified.');
