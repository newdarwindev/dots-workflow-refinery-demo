import React from 'react';
import App,{PipelineCard,EvaluationPanel} from './App.jsx';
export default {title:'Refinery / Experience',component:App};
export const FullExperience={};
export const WorkflowReady={render:()=> <div style={{padding:40,maxWidth:400}}><PipelineCard/></div>};
export const WorkflowSelected={render:()=> <div style={{padding:40,maxWidth:400}}><PipelineCard status="selected"/></div>};
export const ReviewNeeded={render:()=> <div style={{padding:40,maxWidth:400}}><PipelineCard status="error"/></div>};
export const EvaluationComplete={render:()=> <div style={{padding:40,maxWidth:560}}><EvaluationPanel/></div>};
export const EvaluationBlocked={render:()=> <div style={{padding:40,maxWidth:560}}><EvaluationPanel state="error"/></div>};
