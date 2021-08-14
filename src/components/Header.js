import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <nav>
      <input type="checkbox" id="check"></input>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">BreakingBad</label>
      <ul>
        <li><RouterLink class="active" to="/">Home</RouterLink></li>
      
      </ul>
    </nav>
    </>
  );
}