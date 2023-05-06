import './style.css';
import render from './dom';
import { getBookList } from './storage';

window.addEventListener('load', () => {
  const list = getBookList() || [];
  render(list);
});
