import React from 'react'
import { render } from 'react-dom'
import { Application } from './components/application'

window.React = React;

const target = document.getElementById("root");

render (
    <Application />,
    target
);