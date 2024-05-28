import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import styled from 'styled-components';
import { s } from './components/pages/_styles'

const PATH = {
	PAGE1: '/page1',
	PAGE2: '/page2',
	PAGE3: '/page3',
	ERROR404: '/page/error404'
} as const

function App() {
	return (
		<div>
			<s.Header><h1>HEADER</h1></s.Header>
			<s.Body>
				<s.Nav>
					{/* <NavLink to={'/page1'}>page1</NavLink>
					<NavLink to={'/page2'}>page2</NavLink>
					<NavLink to={'/page3'}>page3</NavLink> */}
					<s.NavLinkWrapper>
						<NavLink to={PATH.PAGE1}>
							Page1
						</NavLink>
					</s.NavLinkWrapper>

					<s.NavLinkWrapper>
						<NavLink to={PATH.PAGE2}>
							Page2
						</NavLink>
					</s.NavLinkWrapper>
					<s.NavLinkWrapper>
						<NavLink to={PATH.PAGE3}>
							Page3
						</NavLink>
					</s.NavLinkWrapper>

				</s.Nav>
				<s.Content>
					{/* Здесь будут кроссовки */}
					<Routes>
						<Route path={PATH.PAGE1} element={<PageOne />} />
						<Route path={PATH.PAGE2} element={<PageTwo />} />
						<Route path={PATH.PAGE3} element={<PageThree />} />
						{/* <Route path={PATH.ERROR404} element={<Error404 />} /> */}

						<Route path='*' element={<Error404 />} />
						{/* <Route path='/*' element={<Navigate to={PATH.ERROR404} />} /> */}
						<Route path='/' element={<Navigate to={PATH.PAGE1} />} />
					</Routes>
				</s.Content>
			</s.Body>
			<s.Footer>abibas 2023</s.Footer>
		</div>
	);
}


export default App;


