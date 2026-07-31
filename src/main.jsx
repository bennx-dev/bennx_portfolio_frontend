import {createRoot} from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

/* ========================================
  GENERAL STYLES
======================================== */

import './style/root.css'
import './style/header.css'
import './style/index.css'
import './style/body.css'

/* ========================================
   SKILLS STYLES
======================================== */

import './style/skills.css'
import './style/softSkills/softSkills.css'
import './style/icons/softSkillsIcons.css'
import './style/softSkills/pill.css'
import './style/softSkills/dot.css'
import './style/softSkills/availability.css'
import './style/softSkills/logo.css'

/* ========================================
   GRAPH STYLES
======================================== */

import './style/hardSkills/svgBackground.css'
import './style/hardSkills/diamond.css'
import './style/hardSkills/wires.css'
import './style/hardSkills/pulses.css'
import './style/hardSkills/hardSkillsCards.css'


/* ========================================
   CONTACT STYLES
======================================== */

import './style/contact.css'

/* ========================================
   FOOTER STYLES
======================================== */

import './style/footer.css'

/* ========================================
   MOBILE STYLES
======================================== */

import './style/mobile/mobileIcons.css'
import './style/mobile/responsive.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
        <BrowserRouter>
                <App/>
        </BrowserRouter>
)